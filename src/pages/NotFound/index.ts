import { tmpl } from './notFound.tpl';
import { Block } from '../../utils/block.ts';

export default class NotFound extends Block {
    constructor() {
        super({
            style: 'not-found',
        });
    }

    render(): DocumentFragment {
        return this.compile(tmpl, this.props);
    }
}
