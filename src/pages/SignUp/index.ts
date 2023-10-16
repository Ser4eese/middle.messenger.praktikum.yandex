import Handlebars from "handlebars"
import { tmpl } from "./SignUp.tpl.ts"

export const SignUp = () => {
    return Handlebars.compile(tmpl)({loginValue: '', passwordValue: ''})
}
