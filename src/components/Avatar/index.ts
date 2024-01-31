import { avatar } from './avatar.tpl.ts';
import { Block, DefaultProps } from '../../core/Block/Block.ts';
import { withStore } from '@/core/Store/withStore.ts';
import { IState } from '@/core/Store/store.ts';

class Avatar extends Block {
    constructor(props: DefaultProps) {
        super({
            ...props,
            style: 'avatar',
        });
    }

    render(): DocumentFragment {
        return this.compile(avatar, this.props);
    }
}
const mapStateToProps = (state: IState) => {
    return {
        url: state.chats.find((chat) => chat.id === state.currentChat)?.avatar,
    };
};

export default withStore(mapStateToProps)(Avatar);
