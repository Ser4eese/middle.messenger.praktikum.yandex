/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
import { IUser } from '../../api/AuthApi';
import { set } from '../../utils/set';
import EventBus from '../EventBus/EventBus';
import { IChat, IChatUser } from '../../api/ChatsApi';
import { Message } from '../../controllers/MessageControllers';

export enum StoreEvents {
  UPDATE = 'Updated',
}

export enum PopupTypes {
    CREATE_CHAT = 'createChat',
    ADD_USER = 'addUser',
    DELETE_USER = 'deleteUser',
}

export interface IState {
    user?: IUser,
    chats: IChat[],
    popup: undefined | PopupTypes,
    currentChat: number | undefined,
    messages: Record<number, Message[]>,
    users: IChatUser[],
    findUsers: IChatUser[]
}

class Store extends EventBus {
    private state: IState = {
        chats: [],
        popup: undefined,
        currentChat: undefined,
        messages: {},
        users: [],
        findUsers: [],
    };

    getState() {
        return this.state;
    }

    public set(path: string, value: unknown) {
        try {
            set(this.state, path, value);
            this.emit(StoreEvents.UPDATE, this.getState());
        } catch (e) {
            console.error(e);
        }
    }
}

export const store = new Store();
