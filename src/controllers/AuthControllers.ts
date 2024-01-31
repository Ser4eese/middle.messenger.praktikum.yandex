import { store } from '../core/Store/store';
import authApi, { ISigninData, ISignupData } from '../api/AuthApi';
import { router } from '../core/Router/Router';
import { Routes } from '../main';

export class AuthController {
    static async fetchUser() {
        const user = await authApi.getUser();
        store.set('user', user);
    }

    static async signin(data: ISigninData) {
        try {
            await authApi.signin(data);
            await this.fetchUser();
            router.go(Routes.Messages);
        } catch (e) {
            console.error(e, 'signin error');
        }
    }

    static async signup(data: ISignupData) {
        await authApi.signup(data);
        await this.fetchUser();
        router.go(Routes.Messages);
    }

    static async logout() {
        await authApi.logout();
        store.set('user', undefined);
        router.go(Routes.Login);
    }
}
