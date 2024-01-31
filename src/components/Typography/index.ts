import { button } from './button.tpl.ts';
import { Block } from '../../core/Block/Block.ts';

export default class Button extends Block<{text: string}> {
    constructor(props: { text: string }) {
        super({
            ...props,
            style: 'button',
        }, 'button');
    }

    render(): DocumentFragment {
        return this.compile(button, this.props);
    }
}
