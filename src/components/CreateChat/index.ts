import { getFormData } from '../../utils/getFormData';
import { Block, DefaultProps } from '../../core/Block/Block';
import Button from '../Button/index';
import ProfileInput from '../ProfileInput/index';
import { popup } from './CreateChat.tpl';
import { ChatController } from '../../controllers/ChatsControllers';
import { PopupController } from '../../controllers/PopupController';

async function onClick(event: SubmitEvent) {
    try {
        const { title } = getFormData(event);
        await ChatController.create(title as string);
        PopupController.close();
    } catch (e) {
        if (e instanceof Error && 'reason' in e) console.error(e.reason);
    }
}

export class CreateChat extends Block {
    constructor(props: DefaultProps) {
        super({
            ...props,
            style: 'create-chat',
            children: {
                input: new ProfileInput({
                    name: 'title',
                    required: true,
                    placeholder: 'Ромашковый чат',
                    value: '',
                    type: 'text',
                    label: 'Имя чата',
                    rules: ['not-empty'],
                }),
                button: new Button({
                    text: 'Создать',
                }),
            },
            events: {
                submit: onClick,
            },
        }, 'div');
    }

    render(): DocumentFragment {
        return this.compile(popup, this.props);
    }
}
