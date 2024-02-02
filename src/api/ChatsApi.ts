import { IUser } from './AuthApi';
import { API } from './api';

export interface IChat {
    id: number,
    title: string,
    avatar: string,
    unread_count: number,
    created_by: number,
    last_message: {
        user: IUser,
        time: string,
        content: string
    }
}
interface IDeletedChatResponse {
    userId: number,
    result: {
        id: number,
        title: string,
        avatar: string,
        created_by: number
    }
}
interface IGetChatsProps {
    /**
    * The number of items to skip before starting to collect the result set
    */
    offset?: number,
    /**
     * The numbers of items to return
     */
    limit?: number,
    /**
     * Chat's title to filter by
     */
    title?: string,
}

interface IGetChatUsersQuery extends IGetChatsProps {
    /**
     * User's '{first_name} {second_name}' to filter
     */
    name: string
}

interface IFile {
    id: number,
    user_id: number,
    path: string,
    filename: string,
    content_type: string,
    content_size: number,
    upload_date: string
}

interface IGetFileResponse {
        id: number,
        user_id: number,
        chat_id: number,
        time: string,
        type: string,
        content: number,
        file: IFile
}

export interface IChatUser {
        id: number,
        first_name: string,
        second_name: string,
        display_name: string,
        login: string,
        avatar: string,
        role: string
}

class ChatsApi extends API {
    constructor() {
        super('/chats');
    }

    getChats(_query: IGetChatsProps): Promise<IChat[]> {
        return this.http.get('');
    }

    createChat(title: string) {
        return this.http.post('', { title });
    }

    deleteChat(chatId: number): Promise<IDeletedChatResponse> {
        return this.http.delete('', { chatId });
    }

    getChatsFiles(id: number): Promise<IGetFileResponse[]> {
        return this.http.get(`/${id}/files`);
    }

    getArchiveChat(_query: IGetChatsProps): Promise<IChat[]> {
        return this.http.get('/archive');
    }

    archiveChat(chatId: number): Promise<{result: IChat, userId: number}> {
        return this.http.post('/archive', { chatId });
    }

    unarchiveChat(chatId: number): Promise<{result: IChat, userId: number}> {
        return this.http.post('/unarchive', { chatId });
    }

    getChatUsers(id: number, _query?: IGetChatUsersQuery): Promise<IChatUser[]> {
        return this.http.get(`/${id}/users`);
    }

    getChatMessageCount(id: number): Promise<{unread_count: number}> {
        return this.http.get(`/new/${id}`);
    }

    addChatUsers(users: number[], chatId: number) {
        return this.http.put('/users', { users, chatId });
    }

    deleteChatUsers(users: number[], chatId: number) {
        return this.http.delete('/users', { users, chatId });
    }

    getChatTokens(id: number): Promise<{token: string}> {
        return this.http.post(`/token/${id}`);
    }

    uploadChatAvatar(chatId: number, avatar: File): Promise<IChat> {
        const formData = new FormData();
        formData.append('chatId', `${chatId}`);
        formData.append('avatar', avatar);
        return this.http.put('/avatar', formData);
    }
}

export default new ChatsApi();
