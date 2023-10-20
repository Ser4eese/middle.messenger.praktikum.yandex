import { tmpl } from './ChangePassword.tpl';
import { Block } from '../../utils/block.ts';
import Button from '../../components/Button/index.ts';
import ProfileInput from '../../components/ProfileInput/index.ts';
import { getFormData } from '../../utils/getFormData.ts';

const user = {
    login: 'ivanivanov',
    first_name: 'Иван',
    second_name: 'Иванов',
    phone: '+7 (909) 967 30 30',
    email: 'pochta@yandex.ru',
    display_name: 'test',
};
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
export default class ChangePassword extends Block {
    constructor() {
        super({
            style: 'profile',
            user,
            children: {
                profileInput: profileInputProps.map((props) => new ProfileInput(props)),
                button: new Button({
                    text: 'Сохранить',
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
