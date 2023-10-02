import { tmpl } from "./ChangePassword.tpl"
import Handlebars from "handlebars"

export const ChangePassword = () => {
    return Handlebars.compile(tmpl)({})
}