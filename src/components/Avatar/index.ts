import { avatar } from './avatar.tpl.ts';
import { Block } from '../../utils/block.ts';

export default class Avatar extends Block {
    constructor() {
        super('div', {
            style: 'avatar',
        });
    }

    render(): DocumentFragment {
        return this.compile(avatar, this.props);
    }
}
