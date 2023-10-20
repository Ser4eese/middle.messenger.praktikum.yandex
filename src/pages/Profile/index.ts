import { tmpl } from './Profile.tpl.ts';
import { Block } from '../../utils/block.ts';

const user = {
    login: 'ivanivanov',
    first_name: 'Иван',
    second_name: 'Иванов',
    phone: '+7 (909) 967 30 30',
    email: 'pochta@yandex.ru',
    display_name: 'test',
};

export default class Profile extends Block {
    constructor() {
        super({
            style: 'profile',
            user,
        });
    }

    render(): DocumentFragment {
        return this.compile(tmpl, this.props);
    }
}
