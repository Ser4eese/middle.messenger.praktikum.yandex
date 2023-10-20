import { Block } from '../../../utils/block.ts';
import Avatar from '../../Avatar/index.ts';
import { type IChatItem } from './chatItem.props.ts';
import { chatItem } from './chatItem.tpl.ts';

export default class ChatItem extends Block {
    constructor(props: IChatItem) {
        super('li', { ...props, style: 'chat-item', children: { avatar: new Avatar() } });
    }

    render(): DocumentFragment {
        return this.compile(chatItem, this.props);
    }
}
