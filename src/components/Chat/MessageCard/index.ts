import { IState } from '../../../core/Store/store';
import { withStore } from '../../../core/Store/withStore';
import { Block } from '../../../core/Block/Block';
import { type IMessageCardProps } from './messageCard.props';
import { messageCard } from './messageCard.tpl';

class MessageCard extends Block<IMessageCardProps> {
    constructor(props: IMessageCardProps) {
        super({
            ...props,
            style: ['chat-messages__content'],
        });
    }

    render(): DocumentFragment {
        return this.compile(messageCard, this.props);
    }
}

const mapStateToProps = (state: IState) => {
    const messages = state.currentChat ? (state.messages || {})[state.currentChat] : [];
    return {
        messages: messages?.map((message) => ({
            isAuthor: message.user_id === state.user?.id,
            date: new Date(message.time).toLocaleString('ru', {
                hour: '2-digit',
                minute: '2-digit',
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
            }),
            text: message.content,
        })),
    };
};

export default withStore(mapStateToProps)(MessageCard);
