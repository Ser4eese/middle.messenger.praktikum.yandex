import { tmpl } from "./chatMessages.tpl"
import Handlebars from "handlebars"

const currentChat = {
    name: 'Андрей',
    messageList: [
        { date: '15:56', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', isAuthor: true },
        { date: '16:56', text: 'Привет', isAuthor: false },
        { date: '17:56', text: 'Привет', isAuthor: true },
        { date: '18:56', text: 'Привет', isAuthor: false },
        { date: '15:56', text: 'Привет', isAuthor: true },
        { date: '16:56', text: 'Привет', isAuthor: false },
        { date: '17:56', text: 'Привет', isAuthor: true },
        { date: '18:56', text: 'Привет', isAuthor: false },
        { date: '15:56', text: 'Привет', isAuthor: true },
        { date: '16:56', text: 'Привет', isAuthor: false },
        { date: '17:56', text: 'Привет', isAuthor: true },
        { date: '18:56', text: 'Привет', isAuthor: false },
        { date: '15:56', text: 'Привет', isAuthor: true },
        { date: '16:56', text: 'Привет', isAuthor: false },
        { date: '17:56', text: 'Привет', isAuthor: true },
        { date: '18:56', text: 'Привет', isAuthor: false },
        { date: '15:56', text: 'Привет', isAuthor: true },
        { date: '16:56', text: 'Привет', isAuthor: false },
        { date: '17:56', text: 'Привет', isAuthor: true },
        { date: '18:56', text: 'Привет', isAuthor: false },
        { date: '15:56', text: 'Привет', isAuthor: true },
        { date: '16:56', text: 'Привет', isAuthor: false },
        { date: '17:56', text: 'Привет', isAuthor: true },
        { date: '18:56', text: 'Привет', isAuthor: false },
        { date: '15:56', text: 'Привет', isAuthor: true },
        { date: '16:56', text: 'Привет', isAuthor: false },
        { date: '17:56', text: 'Привет', isAuthor: true },
        { date: '18:56', text: 'Привет', isAuthor: false },
        { date: '15:56', text: 'Привет', isAuthor: true },
        { date: '16:56', text: 'Привет', isAuthor: false },
        { date: '17:56', text: 'Привет', isAuthor: true },
        { date: '18:56', text: 'Привет', isAuthor: false },
        { date: '15:56', text: 'Привет', isAuthor: true },
        { date: '16:56', text: 'Привет', isAuthor: false },
        { date: '17:56', text: 'Привет', isAuthor: true },
        { date: '18:56', text: 'Привет', isAuthor: false },
    ]
}

export const ChatMessages = () => {
    return Handlebars.compile(tmpl)(currentChat)
}
