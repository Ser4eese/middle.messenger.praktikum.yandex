import { tmpl } from './error.tpl';
import { Block } from '../../utils/block.ts';

export default class ErrorPage extends Block {
    constructor() {
        super('div', {
            style: 'error-page',
        });
    }

    render(): DocumentFragment {
        return this.compile(tmpl, this.props);
    }
}
