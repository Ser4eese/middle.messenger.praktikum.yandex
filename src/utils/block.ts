import Handlebars from 'handlebars';
import { nanoid } from 'nanoid';
import EventBus from './eventBus';

type ObjectType = Record<string, any>

type DefaultProps = {
    style?: string | string[],
    events?: Record<string, any>,
    // eslint-disable-next-line no-use-before-define
    children?: unknown | unknown[]
}

export abstract class Block<Props extends Record<string, any> = any> {
    static EVENTS = {
        INIT: 'init',
        FLOW_CDM: 'flow:component-did-mount',
        FLOW_CDU: 'flow:component-did-update',
        FLOW_RENDER: 'flow:render',
    };

    eventBus: () => EventBus;

    props: Props;

    // eslint-disable-next-line no-use-before-define
    children: Record<string, Block> = {};

    _element: HTMLElement = this._createDocumentElement('div');

    _meta: ObjectType = {};

    _id = nanoid();

    /** JSDoc
     * @param {string} tagName
     * @param {Object} props
     *
     * @returns {void}
     */
    constructor(props: Props & DefaultProps, tagName: string = 'div') {
        const eventBus = new EventBus();
        this._meta = {
            tagName,
            props,
        };

        this.props = this._makePropsProxy(props);
        this._setChildren();
        this.eventBus = () => eventBus;

        this._registerEvents(eventBus);
        eventBus.emit(Block.EVENTS.INIT);
    }

    _registerEvents(eventBus: EventBus): void {
        eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
        eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
    }

    _createResources(): void {
        const { tagName } = this._meta;
        this._element = this._createDocumentElement(tagName);
        this._addStyles();
    }

    initChildren(): void {}

    init(): void {
        this._createResources();
        this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
        this.initChildren();
    }

    _componentDidMount(): void {
        this.componentDidMount();
    }

    componentDidMount(_oldProps?: ObjectType): void {}

    dispatchComponentDidMount(): void {
        this.eventBus().emit(Block.EVENTS.FLOW_CDM);
    }

    _componentDidUpdate(oldProps: ObjectType, newProps: ObjectType): void {
        const response = this.componentDidUpdate(oldProps, newProps);
        if (!response) {
            return;
        }
        Object.assign(oldProps, newProps);
        this._render();
    }

    componentDidUpdate(_oldProps: ObjectType, _newProps: ObjectType): boolean {
        return true;
    }

    setProps = (nextProps: ObjectType): void => {
        if (!nextProps) {
            return;
        }
        this._componentDidUpdate(this.props, nextProps);
    // Object.assign(this.props, nextProps)
    };

    get element(): HTMLElement {
        return this._element;
    }

    _render(): void {
        const block = this.render();
        // Этот небезопасный метод для упрощения логики
        // Используйте шаблонизатор из npm или напишите свой безопасный
        // Нужно не в строку компилировать (или делать это правильно),
        // либо сразу в DOM-элементы возвращать из compile DOM-ноду
        this._deleteEvents();
        this._element.innerHTML = '';
        this._element.append(block);
        this._setEvents();
    }

    render(): any {}

    compile(template: string, context: ObjectType): DocumentFragment {
        const contextAndStubs = { ...context };
        const arraysElementMap = new Map();
        Object.entries(this.children).forEach(([name, child]: [string, any]) => {
            if (Array.isArray(child)) {
                const arrayElementsId = nanoid();
                contextAndStubs[name] = `<div data-id="${arrayElementsId}"></div>`;
                arraysElementMap.set(name, arrayElementsId);
                // console.log(arraysElementMap)
            } else contextAndStubs[name] = `<div data-id="${child._id}"></div>`;
        });
        const temp = document.createElement('template');
        temp.innerHTML = Handlebars.compile(template)(contextAndStubs);
        Object.entries(this.children).forEach(([name, child]: [string, ObjectType]) => {
            const isElementArray = Array.isArray(child);
            const stub = isElementArray
                ? temp.content.querySelector(`[data-id="${arraysElementMap.get(name)}"]`)
                : temp.content.querySelector(`[data-id="${child._id}"]`);
            if (!stub) return;
            if (isElementArray) {
                const nodeArray = child.map((childItem) => {
                    childItem.getContent()?.append(...Array.from(stub.childNodes));
                    return childItem.getContent();
                });
                stub.replaceWith(...nodeArray);
            } else {
                child.getContent()?.append(...Array.from(stub.childNodes));
                stub.replaceWith(child.getContent());
            }
        });
        return temp.content;
    }

    _setEvents(): void {
        const { events = {} } = this.props;
        Object.keys((events as ObjectType)).forEach((eventName) => {
            if (eventName === 'blur') {
                this._element.querySelector('input')?.addEventListener(eventName, events[eventName]);
            } else {
                this._element.addEventListener(eventName, events[eventName]);
            }
        });
    }

    _setChildren(): void {
        const { children = {} } = this.props;
        this.children = children;
    }

    _deleteEvents(): void {
        const { events = {} } = this.props;
        Object.keys((events as ObjectType)).forEach((eventName) => {
            if (eventName === 'blur') {
                this._element.querySelector('input')?.removeEventListener(eventName, events[eventName]);
            } else {
                this._element.removeEventListener(eventName, events[eventName]);
            }
        });
    }

    getContent(): HTMLElement {
        return this.element;
    }

    _makePropsProxy(props: Props): Props {
    // Можно и так передать this
    // Такой способ больше не применяется с приходом ES6+
        const self = this;

        return new Proxy(props, {
            get(target, prop) {
                const value = target[prop as keyof Props];
                return typeof value === 'function' ? value.bind(target) : value;
            },
            set(target, prop, value) {
                // eslint-disable-next-line no-param-reassign
                target[prop as keyof Props] = value;
                self.eventBus().emit(Block.EVENTS.FLOW_CDU, { ...target }, target);
                return true;
            },
            deleteProperty() {
                throw new Error('Нет доступа');
            },
        });
    }

    _createDocumentElement(tagName: string): HTMLElement {
    // Можно сделать метод, который через фрагменты в цикле создаёт сразу несколько блоков
        return document.createElement(tagName);
    }

    _addStyles(): void {
        const { style = null } = this.props;
        if (style !== null) {
            if (Array.isArray(style)) {
                style.forEach((s) => { this._element.classList.add(s); });
            } else this._element.classList.add(style);
        }
    }

    show(): void {
        this.getContent().style.display = 'block';
    }

    hide(): void {
        this.getContent().style.display = 'none';
    }
}
