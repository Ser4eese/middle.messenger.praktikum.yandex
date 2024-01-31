import { tmpl } from './error.tpl';
import { Block } from '../../core/Block/Block.ts';

export default class ErrorPage extends Block {
    constructor() {
        super({
            style: 'error-page',
        });
    }

    render(): DocumentFragment {
        return this.compile(tmpl, this.props);
    }
}
