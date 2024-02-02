import { tmpl } from './Login.tpl.ts';
import { Block } from '../../core/Block/Block.ts';
import Input from '../../components/Input/index.ts';
import Button from '../../components/Button/index.ts';
import { getFormData } from '../../utils/getFormData.ts';
import { AuthController } from '../../controllers/AuthControllers.ts';
import { ISigninData } from '@/api/AuthApi.ts';

const input = [new Input({
    type: 'text',
    name: 'login',
    required: true,
    title: 'Логин',
    rules: ['login-valid'],
}), new Input({
    type: 'password',
    name: 'password',
    required: true,
    title: 'Пароль',
    rules: ['password-valid'],
})];

async function onSubmit(event: SubmitEvent) {
    try {
        const data = getFormData(event);
        await AuthController.signin(data as unknown as ISigninData);
    } catch (e) {
        console.error(e);
    }
}

export default class Login extends Block {
    constructor() {
        super({
            style: 'login-container',
            children: {
                input,
                button: new Button({
                    text: 'Авторизация',
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
