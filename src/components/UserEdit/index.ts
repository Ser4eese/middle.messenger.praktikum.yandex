import { getFormData } from '../../utils/getFormData';
import { Block } from '../../core/Block/Block';
import Button from '../Button/index';
import ProfileInput from '../ProfileInput/index';
import { IState } from '@/core/Store/store';
import { withStore } from '@/core/Store/withStore';
import { userEditTmpl } from './userEdit.tpl';
import { UserController } from '@/controllers/UserControllers';
import { ChatController } from '@/controllers/ChatsControllers';

async function onClick(event: SubmitEvent) {
    try {
        const { login } = getFormData(event);
        UserController.searchUserByLogin(login);
    } catch (e) {
        if (e instanceof Error && 'reason' in e) console.error(e.reason);
    }
}

const getUserId = (element: EventTarget | null): string | null => {
    if (!element) return null;
    const userId = (element as HTMLElement).getAttribute('data-user-id');
    return userId || getUserId((element as HTMLElement).parentElement);
};

class UserEdit extends Block<{ text: string, selectedChat?: number }> {
    constructor(props: any) {
        super({
            ...props,
            style: 'create-chat',
            children: {
                input: new ProfileInput({
                    name: 'login',
                    required: true,
                    placeholder: '',
                    value: '',
                    type: 'text',
                    label: 'Поиск по логину',
                    rules: ['not-empty'],
                }),
                button: new Button({
                    text: 'Поиск',
                }),
            },
            events: {
                click: async (e: Event) => {
                    try {
                        const userId = getUserId(e.target);
                        if (userId && this.props.selectedChat) {
                            ChatController.addUserToChat(this.props.selectedChat, +userId);
                        }
                    } catch (error) {
                        console.error(error);
                    }
                },
                submit: onClick,
            },
        }, 'div');
    }

    render(): DocumentFragment {
        return this.compile(userEditTmpl, this.props);
    }
}

const mapStateToProps = (state: IState) => (
    {
        users: state.findUsers,
        selectedChat: state.currentChat,
        userId: state.user?.id,
    }
);

export default withStore(mapStateToProps)(UserEdit);
