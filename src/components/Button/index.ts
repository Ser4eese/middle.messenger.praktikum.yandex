import { button } from './button.tpl.ts';
import { Block } from '../../utils/block.ts';

export default class Button extends Block<{text: string}> {
    constructor(props: { text: string }) {
        super({
            ...props,
            style: 'button',
        }, 'button');
    }

    render(): DocumentFragment {
        return this.compile(button, this.props);
    }
}
