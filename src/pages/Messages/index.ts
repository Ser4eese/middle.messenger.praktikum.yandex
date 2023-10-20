// import { ChatMessages } from "../../components/Chat/ChatMessages"
// import { ChatsList } from "../../components/Chat/ChatsList"
import { tmpl } from './Messages.tpl';
import { Block } from '../../utils/block.ts';
import ChatList from '../../components/Chat/ChatsList/index.ts';
import ChatMessages from '../../components/Chat/ChatMessages/index.ts';

export default class Messages extends Block {
    constructor() {
        super({
            style: 'messages-container',
            children: {
                chatsList: new ChatList(),
                chatMessages: new ChatMessages({ name: 'Test' }),
            },
        });
    }

    render(): DocumentFragment {
        return this.compile(tmpl, this.props);
    }
}
