import { store } from '../core/Store/store';
import chatsApi from '../api/ChatsApi';
import MessagesController from './MessageControllers';

export class ChatController {
    static async getUsers(id: number) {
        try {
            const data = await chatsApi.getChatUsers(id);
            store.set('users', data);
        } catch (e) {
            if (e instanceof Error && 'reason' in e) console.error(e.reason);
            console.error(e);
        }
    }

    static async getChats() {
        try {
            const chats = await chatsApi.getChats({});
            chats.map(async (chat) => {
                const token = await this.getToken(chat.id);
                if (token) await MessagesController.connect(chat.id, token);
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
        } catch (e) {
            if (e instanceof Error && 'reason' in e) console.error(e.reason);
            console.error(e);
        }
    }

    static async create(title: string) {
        try {
            await chatsApi.createChat(title);
            this.getChats();
        } catch (e) {
            if (e instanceof Error && 'reason' in e) console.error(e.reason);
            console.error(e);
        }
    }

    static async getToken(id: number) {
        try {
            const { token } = await chatsApi.getChatTokens(id);
            return token;
        } catch (e) {
            if (e instanceof Error && 'reason' in e) console.error(e.reason);
            console.error(e);
            return undefined;
        }
    }

    static async selectCurrentChat(id: string) {
        store.set('currentChat', +id);
    }

    static async addUserToChat(chatId: number, userId: number) {
        try {
            await chatsApi.addChatUsers([userId], chatId);
        } catch (e) {
            if (e instanceof Error && 'reason' in e) console.error(e.reason);
            console.error(e);
        }
    }

    static async deleteUserToChat(chatId: number, userId: number) {
        try {
            await chatsApi.deleteChatUsers([userId], chatId);
        } catch (e) {
            if (e instanceof Error && 'reason' in e) console.error(e.reason);
            console.error(e);
        }
    }

    static async uploadChatAvatar(data: File, chatId: number) {
        try {
            const result = await chatsApi.uploadChatAvatar(chatId, data);
            store.set('chats', store.getState().chats.map((chat) => {
                if (chat.id === result.id) return result;
                return chat;
            }));
        } catch (e) {
            if (e instanceof Error && 'reason' in e) console.error(e.reason);
            console.error(e);
        }
    }
}
