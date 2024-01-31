import { API } from './api';

export interface ISignupData {
    first_name: string,
    second_name: string,
    login: string,
    email: string,
    password: string,
    phone: string
}

export interface ISigninData {
    login: string,
    password: string
}

export interface IUser {
    id: number,
    first_name: string,
    second_name: string,
    display_name: string,
    phone: string,
    login: string,
    avatar: string,
    email: string
}

class AuthApi extends API {
    constructor() {
        super('/auth');
    }

    signup(data: ISignupData) {
        return this.http.post('/signup', data);
    }

    signin(data: ISigninData) {
        return this.http.post('/signin', data);
    }

    logout() {
        return this.http.post('/logout');
    }

    getUser(): Promise<IUser> {
        return this.http.get('/user');
    }
}

export default new AuthApi();
