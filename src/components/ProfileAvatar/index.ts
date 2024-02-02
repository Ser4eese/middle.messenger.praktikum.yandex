import { avatar } from './profileAvatar.tpl.ts';
import { Block } from '../../core/Block/Block.ts';
import { IProfileAvatarProps, ProfileAvatarSizes } from './profileAvatar.props.ts';
import { IState } from '../../core/Store/store';
import { withStore } from '../../core/Store/withStore';

const mapStateToProps = (state: IState) => ({
    url: `https://ya-praktikum.tech/api/v2/resources/${state.user?.avatar}`,
});

class ProfileAvatar extends Block {
    constructor({ variant = ProfileAvatarSizes.MEDIUM, ...props }: IProfileAvatarProps) {
        super({
            ...props,
            // url ? `https://ya-praktikum.tech/api/v2/resources/${url}` : 'empty-avatar.svg',
            style: `profile-avatar__${variant}`,
        });
    }

    render(): DocumentFragment {
        return this.compile(avatar, this.props);
    }
}

const ProfileAvatarWithStore = withStore(mapStateToProps)(ProfileAvatar);

export default ProfileAvatarWithStore;
