import { Block, DefaultProps } from '../../core/Block/Block';
import { tmpl } from './ButtonText.tpl';

export default class ButtonText extends Block {
    constructor(props: { text: string, style?: string, } & DefaultProps) {
        super({
            ...props,
            style: ['gray-text', props.style, 'button-text'],
        }, 'p');
    }

    render(): DocumentFragment {
        return this.compile(tmpl, this.props);
    }
}
