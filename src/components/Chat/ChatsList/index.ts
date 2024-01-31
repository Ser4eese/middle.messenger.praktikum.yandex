import { Block } from '../../../core/Block/Block';
import ChatInput from '../ChatInput';
import ChatItem from '../ChatItem';
import { tmpl } from './ChatsList.tpl';
import { PopupTypes } from '../../../core/Store/store';
import ButtonText from '../../../components/ButtonText/index';
import { PopupController } from '../../../controllers/PopupController';
import Popup from '../../../components/Popup/index';

const onClick = () => {
    PopupController.open(PopupTypes.CREATE_CHAT);
};

export default class ChatList extends Block {
    constructor(props: any) {
        super({
            ...props,
            style: 'chats-lists',
            children: {
                buttonText: new ButtonText({
                    text: 'Создать чат',
                    style: 'chats-lists__create-chat',
                    events: {
                        click: onClick,
                    },
                }),
                chatItems: new ChatItem({ ...props }),
                chatInput: new ChatInput({
                    name: 'search',
                    type: 'text',
                    placeholder: 'Поиск',
                    required: false,
                }),
                popup: new Popup({}),
            },
        });
    }

    render(): DocumentFragment {
        return this.compile(tmpl, this.props);
    }
}
