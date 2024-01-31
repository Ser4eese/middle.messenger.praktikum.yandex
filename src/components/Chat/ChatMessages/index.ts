import { tmpl } from './chatMessages.tpl';
import { Block, DefaultProps } from '../../../core/Block/Block';
import Avatar from '../../Avatar/index';
import ChatInput from '../ChatInput/index';
import MessageCard from '../MessageCard/index';
import { IChatMessagesProps } from './ChatMessages.props';
import { IState, PopupTypes } from '../../../core/Store/store';
import { withStore } from '../../../core/Store/withStore';
import ButtonIcon from '../../../components/ButtonIcon/index';
import { getFormData } from '../../../utils/getFormData';
import controller from '../../../controllers/MessageControllers';
import ButtonText from '../../../components/ButtonText/index';
import { PopupController } from '@/controllers/PopupController';
import { ChatController } from '@/controllers/ChatsControllers';

class ChatMessagesDefault extends Block<IChatMessagesProps> {
    constructor(props: IChatMessagesProps & DefaultProps) {
        super({
            ...props,
            style: 'chat-messages',
            children: {
                addUser: new ButtonText({
                    text: 'Добавить',
                    events: {
                        click: async () => {
                            PopupController.open(PopupTypes.ADD_USER);
                        },
                    },
                }),
                deleteUser: new ButtonText({
                    text: 'Удалить',
                    events: {
                        click: async () => {
                            if (this.props.selectedChat) {
                                await ChatController.getUsers(this.props.selectedChat);
                                PopupController.open(PopupTypes.DELETE_USER);
                            }
                        },
                    },
                }),
                messageCards: new MessageCard({}),
                avatar: new Avatar(),
                chatInput: new ChatInput({
                    name: 'message',
                    type: 'text',
                    required: false,
                    placeholder: 'Введите сообщение',
                }),
                buttonIcon: new ButtonIcon({ icon: 'send.svg' }),
            },
            events: {
                submit: (e: any) => {
                    const { message } = getFormData(e);
                    if (this.props.selectedChat) {
                        controller
                            .sendMessage(this.props.selectedChat, message);
                    }
                },
            },
        });
    }

    render(): DocumentFragment {
        return this.compile(tmpl, this.props);
    }
}

const mapStateToProps = (state: IState) => {
    return {
        chat: state.chats.find((chat) => chat.id === state.currentChat),
        selectedChat: state.currentChat,
        userId: state.user?.id,
    };
};

export default withStore(mapStateToProps)(ChatMessagesDefault);
