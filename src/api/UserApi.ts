import { IUser } from './AuthApi';
import { API } from './api';

export interface IChangePassword {
    oldPassword: string,
    newPassword: string
}

class UserApi extends API {
    constructor() {
        super('/user');
    }

    changeUserProfile(data: IUser): Promise<IUser> {
        return this.http.put('/profile', data);
    }

    changeUserAvatar(data: FormData): Promise<IUser> {
        return this.http.put('/profile/avatar', data);
    }

    changePassword(data: IChangePassword) {
        return this.http.put('/password', data);
    }

    getUser(id: number): Promise<IUser> {
        return this.http.get(`/${id}`);
    }

    searchUserByLogin(login: string): Promise<IUser> {
        return this.http.post('/search', { login });
    }
}

export default new UserApi();
