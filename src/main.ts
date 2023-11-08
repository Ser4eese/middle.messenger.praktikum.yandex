import './components/registerPartials';
import ChangeData from './pages/ChangeData';
import ChangePassword from './pages/ChangePassword';
import ErrorPage from './pages/Error';
import Login from './pages/Login';
import Messages from './pages/Messages';
import NotFound from './pages/NotFound';
import Profile from './pages/Profile';
import SignUp from './pages/SignUp';

const ROUTER: Record<string, Record<string, any>> = {
    '/login': new Login(),
    '/signUp': new SignUp(),
    '/': new Messages(),
    '/profile': new Profile(),
    '/change-password': new ChangePassword(),
    '/change-data': new ChangeData(),
    '/not-found': new NotFound(),
    '/error': new ErrorPage(),
};

window.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('app');
    if (root != null) root.append(ROUTER[window.location.pathname].element);
});
