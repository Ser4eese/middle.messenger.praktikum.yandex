import { Block } from '../../../utils/block.ts';
import Avatar from '../../Avatar/index.ts';
import { type IChatItem } from './chatItem.props.ts';
import { chatItem } from './chatItem.tpl.ts';

export default class ChatItem extends Block<IChatItem> {
    constructor(props: IChatItem) {
        super({ ...props, style: 'chat-item', children: { avatar: new Avatar() } }, 'li');
    }

    render(): DocumentFragment {
        return this.compile(chatItem, this.props);
    }
}
