import { button } from './button.tpl.ts';
import { Block } from '../../core/Block/Block.ts';
import { DefaultProps } from '../../core/Block/Block';

export default class Button extends Block<{text: string}> {
    constructor(props: { text: string } & DefaultProps) {
        super({
            ...props,
            style: 'button',
        }, 'button');
    }

    render(): DocumentFragment {
        return this.compile(button, this.props);
    }
}
