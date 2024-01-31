import { withStore } from '../../../core/Store/withStore';
import { Block } from '../../../core/Block/Block.ts';
import Avatar from '../../Avatar/index.ts';
import { chatItem } from './chatItem.tpl.ts';
import { IState } from '../../../core/Store/store';
import { DefaultProps } from '../../../core/Block/Block';
import { ChatController } from '../../../controllers/ChatsControllers';

const getChatId = (element: HTMLElement | null): string | null => {
    if (!element) return null;
    const chatId = element.getAttribute('data-chat');
    return chatId || getChatId(element.parentElement);
};

class ChatItem extends Block {
    constructor(props: DefaultProps) {
        super({
            ...props,
            style: 'chats-lists__items',
            children: {
                avatar: new Avatar(),
            },
            events: {
                click: (e: any) => {
                    const chatId = getChatId(e.target);
                    if (chatId) ChatController.selectCurrentChat(chatId);
                },
            },
        }, 'ul');
    }

    render(): DocumentFragment {
        return this.compile(chatItem, this.props);
    }
}

const mapStateToProps = (state: IState) => ({
    chatsList: state.chats,
});

const ChatItemWithStore = withStore(mapStateToProps)(ChatItem);

export default ChatItemWithStore;
