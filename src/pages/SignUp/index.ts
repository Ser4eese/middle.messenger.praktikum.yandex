import { tmpl } from './SignUp.tpl.ts';

import { Block } from '../../core/Block/Block.ts';
import Input from '../../components/Input/index.ts';
import Button from '../../components/Button/index.ts';
import { getFormData } from '../../utils/getFormData.ts';
import { IInputProps } from '../../components/Input/input.props.ts';
import { AuthController } from '../../controllers/AuthControllers.ts';
import { ISignupData } from '@/api/AuthApi.ts';

const type = 'text';
const required = true;
const input: IInputProps[] = [{
    name: 'email', type, title: 'Почта', required, rules: ['email-valid'],
},
{
    name: 'login', type, title: 'Логин', required, rules: ['login-valid'],
},
{
    name: 'first_name', type, title: 'Имя', required, rules: ['name-valid'],
},
{
    name: 'second_name', type, title: 'Фамилия', required, rules: ['name-valid'],
},
{
    name: 'phone', type, title: 'Телефон', required, rules: ['phone-valid'],
},
{
    name: 'password', type, title: 'Пароль', required, rules: ['password-valid'],
},
{
    name: 'password', type, title: 'Пароль (ещё раз)', required, rules: ['password-valid'],
},
];
function onSubmit(event: SubmitEvent) {
    try {
        const data = getFormData(event);
        AuthController.signup(data as unknown as ISignupData);
    } catch (e) {
        if (e instanceof Error && 'reason' in e)console.error(e.reason);
    }
}

export default class SignUp extends Block {
    constructor() {
        super({
            style: 'register-container',
            events: {
                submit: onSubmit,
            },
            children: {
                inputs: input.map((inputData) => new Input({ ...inputData })),
                button: new Button({
                    text: 'Зарегистрироваться',
                }),
            },
        });
    }

    render(): DocumentFragment {
        return this.compile(tmpl, this.props);
    }
}
