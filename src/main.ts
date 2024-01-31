/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
import './components/registerPartials';
import { AuthController } from './controllers/AuthControllers';
import { router } from './core/Router/Router';
import { ChangeData } from './pages/ChangeData';
import { ChangePassword } from './pages/ChangePassword';
import ErrorPage from './pages/Error';
import Login from './pages/Login';
import Messages from './pages/Messages';
import NotFound from './pages/NotFound';
import { Profile } from './pages/Profile';
import SignUp from './pages/SignUp';

// eslint-disable-next-line no-shadow
export enum Routes {
    Login = '/',
    Register = '/sign-up',
    Messages = '/messenger',
    Profile = '/profile',
    ChangePassword = '/settings-password',
    ChangeData = '/settings',
    NotFound = '/not-found',
    ErrorPage = '/error',
}

window.addEventListener('DOMContentLoaded', async () => {
    router
        .use(Routes.Messages, Messages)
        .use(Routes.Register, SignUp)
        .use(Routes.Login, Login)
        .use(Routes.Profile, Profile)
        .use(Routes.ChangePassword, ChangePassword)
        .use(Routes.ChangeData, ChangeData)
        .use(Routes.NotFound, NotFound)
        .use(Routes.ErrorPage, ErrorPage);

    let isProtectedRoute = true;

    switch (window.location.pathname) {
    case Routes.Login:
    case Routes.Register:
        isProtectedRoute = false;
        break;
    default:
        break;
    }

    try {
        await AuthController.fetchUser();
        router.start();
        if (!isProtectedRoute) {
            router.go(Routes.Messages);
        }
    } catch (error) {
        router.start();
        if (isProtectedRoute) {
            router.go(Routes.Login);
        }
    }
});
