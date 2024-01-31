import { avatar } from './avatar.tpl.ts';
import { Block } from '../../core/Block/Block.ts';

export default class Avatar extends Block {
    constructor() {
        super({
            style: 'avatar',
        });
    }

    render(): DocumentFragment {
        return this.compile(avatar, this.props);
    }
}
