import { Block } from '../../../core/Block/Block.ts';
import { type IChatInputProps } from './chatInput.props.ts';
import { chatInput } from './chatInput.tpl.ts';

export default class ChatInput extends Block<IChatInputProps> {
    constructor(props: IChatInputProps) {
        super({
            ...props,
            style: 'input-chat',
        });
    }

    render(): DocumentFragment {
        return this.compile(chatInput, this.props);
    }
}
