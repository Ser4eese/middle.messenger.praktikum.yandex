import { button } from './link.tpl.ts';
import { Block, DefaultProps } from '../../core/Block/Block.ts';

export default class Link extends Block<{text: string}> {
    constructor(props: { text: string, isExit?: boolean } & DefaultProps) {
        super({
            ...props,
            style: ['link',
                'profile-link',
                props.isExit ? 'profile-link__exit' : 'profile-link__change'],
        }, 'a');
    }

    render(): DocumentFragment {
        return this.compile(button, this.props);
    }
}
