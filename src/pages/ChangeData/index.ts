import { tmpl } from './ChangeData.tpl';
import { Block } from '../../utils/block.ts';
import Button from '../../components/Button/index.ts';
import ProfileInput from '../../components/ProfileInput/index.ts';
import { getFormData } from '../../utils/getFormData.ts';
import { IProfileInputProps } from '@/components/ProfileInput/profileInput.props.ts';

const user = {
    login: 'ivanivanov',
    first_name: 'Иван',
    second_name: 'Иванов',
    phone: '+7 (909) 967 30 30',
    email: 'pochta@yandex.ru',
    display_name: 'test',
};
const type = 'text';
const profileInputProps: IProfileInputProps[] = [{
    name: 'email',
    required: true,
    placeholder: user.email,
    type,
    label: 'Почта',
    rules: ['email-valid'],
},
{
    name: 'login',
    required: true,
    placeholder: user.login,
    type,
    label: 'Логин',
    rules: ['login-valid'],
},
{
    name: 'first_name',
    required: true,
    placeholder: user.first_name,
    type,
    label: 'Имя',
    rules: ['name-valid'],
},
{
    name: 'second_name',
    required: true,
    placeholder: user.second_name,
    type,
    label: 'Фамилия',
    rules: ['name-valid'],
},
{
    name: 'display_name',
    required: true,
    placeholder: user.display_name,
    type,
    label: 'Имя в чате',
},
{
    name: 'phone',
    required: true,
    placeholder: user.phone,
    type,
    label: 'Телефон',
    rules: ['phone-valid'],
},
];
export default class ChangeData extends Block {
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
