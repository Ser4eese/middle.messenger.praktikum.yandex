import { store } from '../core/Store/store';
import chatsApi from '../api/ChatsApi';
import MessagesController from './MessageControllers';

export class ChatController {
    static async getUsers(id: number) {
        const data = await chatsApi.getChatUsers(id);
        store.set('users', data);
    }

    static async getChats() {
        const chats = await chatsApi.getChats({});
        chats.map(async (chat) => {
            const token = await this.getToken(chat.id);
            await MessagesController.connect(chat.id, token);
        });

        chats.map((chat) => {
            if (chat?.last_message?.time) {
                // eslint-disable-next-line no-param-reassign
                chat.last_message.time = `${new Date(
                    chat.last_message.time,
                ).toLocaleTimeString()}`;
            }
            return chat;
        });
        store.set('chats', chats);
    }

    static async create(title: string) {
        await chatsApi.createChat(title);
        this.getChats();
    }

    static async getToken(id: number) {
        const { token } = await chatsApi.getChatTokens(id);
        return token;
    }

    static async selectCurrentChat(id: string) {
        store.set('currentChat', +id);
    }

    static async addUserToChat(chatId: number, userId: number) {
        await chatsApi.addChatUsers([userId], chatId);
    }

    static async deleteUserToChat(chatId: number, userId: number) {
        await chatsApi.deleteChatUsers([userId], chatId);
    }
}
