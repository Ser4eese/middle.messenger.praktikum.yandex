import Handlebars from "handlebars"
import { tmpl } from "./Login.tpl.ts"

export const Login = () => {
    return Handlebars.compile(tmpl)({loginValue: '', passwordValue: ''})
}