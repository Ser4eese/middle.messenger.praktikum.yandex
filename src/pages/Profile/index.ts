import { tmpl } from './Profile.tpl.ts';
import { Block } from '../../core/Block/Block.ts';
import Link from '../../components/Link/index.ts';
import { AuthController } from '../../controllers/AuthControllers.ts';
import { IState } from '../../core/Store/store.ts';
import { withStore } from '../../core/Store/withStore.ts';
import { router } from '../../core/Router/Router.ts';
import { Routes } from '../../main.ts';
import ProfileAvatar from '../../components/ProfileAvatar/index.ts';
import { UserController } from '../../controllers/UserControllers.ts';

const mapStateToProps = (state: IState) => ({
    login: state.user?.login,
    first_name: state.user?.first_name,
    second_name: state.user?.second_name,
    phone: state.user?.phone,
    email: state.user?.email,
    display_name: state.user?.display_name,
    avatar: state.user?.avatar,
});

async function onChangeDataClick() {
    try {
        router.go(Routes.ChangeData);
    } catch (e) {
        console.error(e);
    }
}

async function onChangePasswordClick() {
    try {
        router.go(Routes.ChangePassword);
    } catch (e) {
        console.error(e);
    }
}

async function onExitClick() {
    try {
        await AuthController.logout();
    } catch (e) {
        console.error(e);
    }
}

class BaseProfile extends Block {
    constructor(props: any) {
        super({
            ...props,
            style: 'profile',
            children: {
                ProfileAvatar: new ProfileAvatar({
                    events: {
                        change: async (event: any) => {
                            const fileTarget = (event.target as HTMLInputElement).files![0];
                            UserController.changeUserAvatar(fileTarget);
                        },
                    },
                }),
                ChangeDataLink: new Link({
                    text: 'Изменить данные',
                    events: {
                        click: onChangeDataClick,
                    },
                }),
                ChangePasswordLink: new Link({
                    text: 'Изменить пароль',
                    events: {
                        click: onChangePasswordClick,
                    },
                }),
                ExitLink: new Link({
                    text: 'Выйти',
                    isExit: true,
                    events: {
                        click: onExitClick,
                    },
                }),
            },
        });
    }

    render(): DocumentFragment {
        return this.compile(tmpl, this.props);
    }
}

export const Profile = withStore(mapStateToProps)(BaseProfile);
