// import { ChatMessages } from "../../components/Chat/ChatMessages"
// import { ChatsList } from "../../components/Chat/ChatsList"
import { tmpl } from './Messages.tpl';
import { Block } from '../../core/Block/Block.ts';
import ChatList from '../../components/Chat/ChatsList/index.ts';
import ChatMessages from '../../components/Chat/ChatMessages/index.ts';
import { ChatController } from '../../controllers/ChatsControllers';

export default class Messages extends Block {
    constructor() {
        super({
            style: 'messages-container',
            children: {
                chatsList: new ChatList({}),
                chatMessages: new ChatMessages({}),
            },
        });
    }

    componentDidMount(_oldProps?: { [x: string]: any; } | undefined): void {
        ChatController.getChats();
    }

    render(): DocumentFragment {
        return this.compile(tmpl, this.props);
    }
}
