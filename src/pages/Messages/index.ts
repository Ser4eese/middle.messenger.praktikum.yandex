import { ChatMessages } from "../../components/Chat/ChatMessages"
import { ChatsList } from "../../components/Chat/ChatsList"
import { tmpl } from "./Messages.tpl"
import Handlebars from "handlebars"

export const Messages = () => {
    return Handlebars.compile(tmpl)({ChatsList, ChatMessages})
}
