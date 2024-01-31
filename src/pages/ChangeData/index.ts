import { tmpl } from './ChangeData.tpl';
import { Block } from '../../core/Block/Block.ts';
import Button from '../../components/Button/index.ts';
import ProfileInput from '../../components/ProfileInput/index.ts';
import { getFormData } from '../../utils/getFormData.ts';
import { IProfileInputProps } from '@/components/ProfileInput/profileInput.props.ts';
import { withStore } from '../../core/Store/withStore.ts';
import { IState } from '../../core/Store/store.ts';
import { UserController } from '../../controllers/UserControllers.ts';
import { Routes } from '../../main.ts';
import { router } from '../../core/Router/Router.ts';
import { IUser } from '@/api/AuthApi.ts';

function onSubmit(event: SubmitEvent) {
    try {
        const data = getFormData(event);
        UserController.changeUserProfile(data as unknown as IUser);
        router.go(Routes.Profile);
    } catch (e) {
        if (e instanceof Error && 'reason' in e) console.error(e.reason);
    }
}

const type = 'text';
class BaseChangeData extends Block {
    constructor(props: any) {
        const profileInputProps: IProfileInputProps[] = [{
            name: 'email',
            required: true,
            placeholder: props.user.email,
            value: props.user.email,
            type,
            label: 'Почта',
            rules: ['email-valid'],
        },
        {
            name: 'login',
            required: true,
            placeholder: props.user.login,
            value: props.user.login,
            type,
            label: 'Логин',
            rules: ['login-valid'],
        },
        {
            name: 'first_name',
            required: true,
            placeholder: props.user.first_name,
            value: props.user.first_name,
            type,
            label: 'Имя',
            rules: ['name-valid'],
        },
        {
            name: 'second_name',
            required: true,
            placeholder: props.user.second_name,
            value: props.user.second_name,
            type,
            label: 'Фамилия',
            rules: ['name-valid'],
        },
        {
            name: 'display_name',
            required: true,
            placeholder: props.user.display_name,
            value: props.user.display_name,
            type,
            label: 'Имя в чате',
        },
        {
            name: 'phone',
            required: true,
            placeholder: props.user.phone,
            value: props.user.phone,
            type,
            label: 'Телефон',
            rules: ['phone-valid'],
        },
        ];
        super({
            ...props,
            style: 'profile',
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
    user: {
        login: state.user?.login,
        first_name: state.user?.first_name,
        second_name: state.user?.second_name,
        phone: state.user?.phone,
        email: state.user?.email,
        display_name: state.user?.display_name,
    },
});

export const ChangeData = withStore(mapStateToProps)(BaseChangeData);
