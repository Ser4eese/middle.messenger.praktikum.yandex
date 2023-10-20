import { tmpl } from './chatMessages.tpl';
import { Block } from '../../../utils/block.ts';
import Avatar from '../../Avatar/index.ts';
import ChatInput from '../ChatInput/index.ts';
import { type IMessageCardProps } from '../MessageCard/messageCard.props.ts';
import MessageCard from '../MessageCard/index.ts';
import { IChatMessagesProps } from './ChatMessages.props.ts';

const messageList: IMessageCardProps[] = [
    { date: '15:56', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', isAuthor: true },
    { date: '16:56', text: 'Привет', isAuthor: false },
    { date: '17:56', text: 'Привет', isAuthor: true },
    { date: '18:56', text: 'Привет', isAuthor: false },
    { date: '15:56', text: 'Привет', isAuthor: true },
    { date: '16:56', text: 'Привет', isAuthor: false },
    { date: '17:56', text: 'Привет', isAuthor: true },
    { date: '18:56', text: 'Привет', isAuthor: false },
    { date: '15:56', text: 'Привет', isAuthor: true },
    { date: '16:56', text: 'Привет', isAuthor: false },
    { date: '17:56', text: 'Привет', isAuthor: true },
    { date: '18:56', text: 'Привет', isAuthor: false },
    { date: '15:56', text: 'Привет', isAuthor: true },
    { date: '16:56', text: 'Привет', isAuthor: false },
    { date: '17:56', text: 'Привет', isAuthor: true },
    { date: '18:56', text: 'Привет', isAuthor: false },
    { date: '15:56', text: 'Привет', isAuthor: true },
    { date: '16:56', text: 'Привет', isAuthor: false },
    { date: '17:56', text: 'Привет', isAuthor: true },
    { date: '18:56', text: 'Привет', isAuthor: false },
    { date: '15:56', text: 'Привет', isAuthor: true },
    { date: '16:56', text: 'Привет', isAuthor: false },
    { date: '17:56', text: 'Привет', isAuthor: true },
    { date: '18:56', text: 'Привет', isAuthor: false },
    { date: '15:56', text: 'Привет', isAuthor: true },
    { date: '16:56', text: 'Привет', isAuthor: false },
    { date: '17:56', text: 'Привет', isAuthor: true },
    { date: '18:56', text: 'Привет', isAuthor: false },
    { date: '15:56', text: 'Привет', isAuthor: true },
    { date: '16:56', text: 'Привет', isAuthor: false },
    { date: '17:56', text: 'Привет', isAuthor: true },
    { date: '18:56', text: 'Привет', isAuthor: false },
    { date: '15:56', text: 'Привет', isAuthor: true },
    { date: '16:56', text: 'Привет', isAuthor: false },
    { date: '17:56', text: 'Привет', isAuthor: true },
    { date: '18:56', text: 'Привет', isAuthor: false },
];

export default class ChatMessages extends Block {
    constructor(props: IChatMessagesProps) {
        super('div', {
            style: 'chat-messages',
            ...props,
            children: {
                messageCards: messageList
                    .map((messageCardProps) => new MessageCard(messageCardProps)),
                avatar: new Avatar(),
                chatInput: new ChatInput({
                    name: 'message',
                    type: 'text',
                    required: false,
                    placeholder: 'Введите сообщение',
                }),
            },
        });
    }

    render(): DocumentFragment {
        return this.compile(tmpl, this.props);
    }
}
