import { tmpl } from "./notFound.tpl"
import Handlebars from "handlebars"

export const NotFound = () => {
    return Handlebars.compile(tmpl)({})
}