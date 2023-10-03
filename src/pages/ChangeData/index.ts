import { tmpl } from "./ChangeData.tpl"
import Handlebars from "handlebars"

const user = {
    login: 'ivanivanov',
    first_name: 'Иван',
    second_name: 'Иванов',
    phone: '+7 (909) 967 30 30',
    email: 'pochta@yandex.ru',
    display_name: 'test',
}

export const ChangeData = () => {
    return Handlebars.compile(tmpl)({user})
}
