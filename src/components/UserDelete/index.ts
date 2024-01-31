import { Block, DefaultProps } from '../../core/Block/Block';
import { IState } from '@/core/Store/store';
import { withStore } from '@/core/Store/withStore';
import { userDeleteTmpl } from './userDelete.tpl';
import { ChatController } from '@/controllers/ChatsControllers';

const getUserId = (element: EventTarget | null): string | null => {
    if (!element) return null;
    const userId = (element as HTMLElement).getAttribute('data-user-id');
    return userId || getUserId((element as HTMLElement).parentElement);
};

class UserDelete extends Block {
    constructor(props: { text: string } & DefaultProps) {
        super({
            ...props,
            style: 'create-chat',
            events: {
                click: async (e: Event) => {
                    try {
                        const userId = getUserId(e.target);
                        if (userId) {
                            ChatController.deleteUserToChat(this.props.selectedChat, +userId);
                        }
                    } catch (error) {
                        console.error(error);
                    }
                },
            },
        }, 'div');
    }

    render(): DocumentFragment {
        return this.compile(userDeleteTmpl, this.props);
    }
}

const mapStateToProps = (state: IState) => (
    {
        users: state.users,
        selectedChat: state.currentChat,
        userId: state.user?.id,
    }
);

export default withStore(mapStateToProps)(UserDelete);
