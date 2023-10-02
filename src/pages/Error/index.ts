import { tmpl } from "./error.tpl"
import Handlebars from "handlebars"

export const ErrorPage = () => {
    return Handlebars.compile(tmpl)({})
}