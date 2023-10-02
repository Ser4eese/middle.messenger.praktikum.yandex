import './components/registerPartials'
import { ChangeData } from './pages/ChangeData';
import { ChangePassword } from './pages/ChangePassword';
import { ErrorPage } from './pages/Error';
import { Login } from "./pages/Login";
import { Messages } from './pages/Messages';
import { NotFound } from './pages/NotFound';
import { Profile } from './pages/Profile';
import { SignUp } from './pages/SignUp';

const ROUTER: Record<string, string> = {
    '/login': Login(),
    '/signUp': SignUp(),
    '/': Messages(),
    '/profile': Profile(),
    '/change-password': ChangePassword(),
    '/change-data': ChangeData(),
    '/not-found': NotFound(),
    '/error': ErrorPage(),
}

window.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('app');
    console.log(window.location.pathname)
    if (root) root.innerHTML = ROUTER[window.location.pathname] || NotFound()
})