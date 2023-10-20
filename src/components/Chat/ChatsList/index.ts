import { Block } from '../../../utils/block';
import ChatInput from '../ChatInput';
import ChatItem from '../ChatItem';
import { type IChatItem } from '../ChatItem/chatItem.props';
import { tmpl } from './ChatsList.tpl';

// export const ChatsList = () => {
const chatList: IChatItem[] = [{
    chatName: 'Андрей',
    lastDate: '10:49',
    message: 'Привет!',
}, {
    chatName: 'Андрей',
    lastDate: '10:49',
    message: 'Привет!',
}, {
    chatName: 'Андрей',
    lastDate: '10:49',
    message: 'Привет!',
}, {
    chatName: 'Андрей',
    lastDate: '10:49',
    message: 'Привет!',
}, {
    chatName: 'Андрей',
    lastDate: '10:49',
    message: 'Привет!',
}, {
    chatName: 'Андрей',
    lastDate: '10:49',
    message: 'Привет!',
}, {
    chatName: 'Андрей',
    lastDate: '10:49',
    message: 'Привет!',
}, {
    chatName: 'Андрей',
    lastDate: '10:49',
    message: 'Привет!',
}];

export default class ChatList extends Block {
    constructor() {
        super('div', {
            chatList,
            style: 'chats-lists',
            children: {
                chatItems: chatList.map((chatProps) => new ChatItem(chatProps)),
                chatInput: new ChatInput({
                    name: 'search',
                    type: 'text',
                    placeholder: 'Поиск',
                    required: false,
                }),
            },
        });
    }

    render(): DocumentFragment {
        return this.compile(tmpl, this.props);
    }
}
