import { store } from '../core/Store/store';
import { router } from '../core/Router/Router';
import { Routes } from '../main';
import userApi, { IChangePassword } from '../api/UserApi';
import { IUser } from '../api/AuthApi';

export class UserController {
    static async changeUserProfile(data: IUser) {
        const user = await userApi.changeUserProfile(data);
        store.set('user', user);
        router.go(Routes.Profile);
    }

    static async changeUserAvatar(avatar : File) {
        const formData = new FormData();
        formData.append('avatar', avatar);
        const user = await userApi.changeUserAvatar(formData);
        store.set('user', user);
    }

    static async changePassword(data: IChangePassword) {
        await userApi.changePassword(data);
        router.go(Routes.Profile);
    }

    static async getUser(id: number): Promise<IUser> {
        return userApi.getUser(id);
    }

    static async searchUserByLogin(login: string): Promise<IUser> {
        const users = await userApi.searchUserByLogin(login);
        store.set('findUsers', users);
        return users;
    }
}
