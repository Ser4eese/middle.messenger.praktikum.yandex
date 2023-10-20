import { tmpl } from './Login.tpl.ts';
import { Block } from '../../utils/block.ts';
import Input from '../../components/Input/index.ts';
import Button from '../../components/Button/index.ts';
import { getFormData } from '../../utils/getFormData.ts';

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
export default class Login extends Block {
    constructor() {
        super('div', {
            style: 'login-container',
            children: {
                input,
                button: new Button({
                    text: 'Авторизация',
                }),
            },
            events: {
                submit: getFormData,
            },
        });
    }

    render(): DocumentFragment {
        return this.compile(tmpl, this.props);
    }
}
