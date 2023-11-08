import { Block } from '../../../utils/block';
import { type IMessageCardProps } from './messageCard.props';
import { messageCard } from './messageCard.tpl';

export default class MessageCard extends Block<IMessageCardProps> {
    constructor(props: IMessageCardProps) {
        super({
            ...props,
            style: ['message', `message${props.isAuthor ? '__left' : '__right'}`],
        });
    }

    render(): DocumentFragment {
        return this.compile(messageCard, this.props);
    }
}
