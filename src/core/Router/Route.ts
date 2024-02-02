import { render } from '../../utils/render';

export class Route {
    _pathname: string;

    _blockClass;

    _block: any | null;

    _props;

    constructor(pathname: string, view: any, props: Record<string, any>) {
        this._pathname = pathname;
        this._blockClass = view;
        this._block = null;
        this._props = props;
    }

    navigate(pathname: string) {
        if (this.match(pathname)) {
            this._pathname = pathname;
            this.render();
        }
    }

    leave() {
        if (this._block) {
            'hide' in this._block ? this._block.hide() : this._block = null;
        }
    }

    match(pathname: string) {
        return pathname === this._pathname;
    }

    render() {
        if (!this._block) {
            this._block = new this._blockClass();
            render(this._props?.rootQuery, this._block);
            return;
        }
        this._block.show();
    }
}
