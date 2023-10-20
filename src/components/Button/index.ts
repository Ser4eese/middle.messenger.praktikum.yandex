import { button } from './button.tpl.ts';
import { Block } from '../../utils/block.ts';

export default class Button extends Block {
    constructor(props: { text: string }) {
        super('button', {
            ...props,
            style: 'button',
        });
    }

    render(): DocumentFragment {
        return this.compile(button, this.props);
    }
}
