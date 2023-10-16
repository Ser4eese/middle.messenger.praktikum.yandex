import { tmpl } from "./ChatsList.tpl"
import Handlebars from "handlebars"

export const ChatsList = () => {
    const chatList = [{
        chatName: 'Андрей',
        lastDate: '10:49',
        message: 'Привет!'
    },{
        chatName: 'Андрей',
        lastDate: '10:49',
        message: 'Привет!'
    },{
        chatName: 'Андрей',
        lastDate: '10:49',
        message: 'Привет!'
    },{
        chatName: 'Андрей',
        lastDate: '10:49',
        message: 'Привет!'
    },{
        chatName: 'Андрей',
        lastDate: '10:49',
        message: 'Привет!'
    },{
        chatName: 'Андрей',
        lastDate: '10:49',
        message: 'Привет!'
    },{
        chatName: 'Андрей',
        lastDate: '10:49',
        message: 'Привет!'
    },{
        chatName: 'Андрей',
        lastDate: '10:49',
        message: 'Привет!'
    },];
    return Handlebars.compile(tmpl)({chatList})
}
