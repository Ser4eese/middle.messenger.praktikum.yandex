import { tmpl } from './ChangePassword.tpl';
import { Block } from '../../core/Block/Block.ts';
import Button from '../../components/Button/index.ts';
import ProfileInput from '../../components/ProfileInput/index.ts';
import { getFormData } from '../../utils/getFormData.ts';
import { withStore } from '../../core/Store/withStore.ts';
import { IState } from '../../core/Store/store.ts';
import { UserController } from '../../controllers/UserControllers.ts';
import { Routes } from '../../main.ts';
import { router } from '../../core/Router/Router.ts';
import { IChangePassword } from '@/api/UserApi.ts';

const type = 'password';
const profileInputProps = [{
    name: 'oldPassword',
    required: true,
    placeholder: 'Введите пароль',
    type,
    rules: ['password-valid'],
    label: 'Старый пароль',
},
{
    name: 'newPassword',
    required: true,
    placeholder: 'Введите новый пароль',
    type,
    label: 'Новый пароль',
    rules: ['password-valid'],
},
{
    name: 'newPassword',
    required: true,
    placeholder: 'Повторите пароль',
    type,
    label: 'Повторите новый пароль',
    rules: ['password-valid'],
},
];

function onSubmit(event: SubmitEvent) {
    try {
        const data = getFormData(event);
        UserController.changePassword(data as unknown as IChangePassword);
        router.go(Routes.Profile);
    } catch (e) {
        if (e instanceof Error && 'reason' in e) console.error(e.reason);
    }
}

class BaseChangePassword extends Block {
    constructor(props: any) {
        super({
            style: 'profile',
            ...props,
            children: {
                profileInput: profileInputProps.map((inputProps) => new ProfileInput(inputProps)),
                button: new Button({
                    text: 'Сохранить',
                }),
            },
            events: {
                submit: onSubmit,
            },
        });
    }

    render(): DocumentFragment {
        return this.compile(tmpl, this.props);
    }
}

const mapStateToProps = (state: IState) => ({
    first_name: state.user?.first_name,
    avatar: state.user?.display_name,
});

export const ChangePassword = withStore(mapStateToProps)(BaseChangePassword);
