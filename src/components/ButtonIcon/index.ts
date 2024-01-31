import { Block, DefaultProps } from '../../core/Block/Block';
import { tmpl } from './ButtonIcon.tpl';

export default class ButtonIcon extends Block {
    constructor(props: { icon: string, style?: string, } & DefaultProps) {
        super({
            ...props,
        }, 'div');
    }

    render(): DocumentFragment {
        return this.compile(tmpl, this.props);
    }
}
