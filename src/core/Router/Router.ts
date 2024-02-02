import { Route } from './Route';

export class Router {
    routes: Route[] = [];

    history = window.history;

    _currentRoute: Route | null = null;

    _rootQuery: string = 'app';

    // eslint-disable-next-line no-use-before-define
    __instance?: Router;

    constructor(rootQuery?: string) {
        if (this.__instance) {
            // eslint-disable-next-line no-constructor-return
            return this.__instance;
        }

        this.routes = [];
        this.history = window.history;
        this._currentRoute = null;
        if (rootQuery) this._rootQuery = rootQuery;
        this.__instance = this;
    }

    use(pathname: string, block: any) {
        const route = new Route(pathname, block, { rootQuery: this._rootQuery });
        this.routes.push(route);
        return this;
    }

    start() {
        // Реагируем на изменения в адресной строке и вызываем перерисовку
        window.onpopstate = (event: any) => {
            this._onRoute(event.currentTarget?.location.pathname);
        };
        this._onRoute(window.location.pathname);
    }

    _onRoute(pathname: string) {
        const route = this.getRoute(pathname);
        if (route && this._currentRoute) {
            this._currentRoute.leave();
        }

        if (route) {
            this._currentRoute = route;
            route.render();
        }
    }

    go(pathname: string) {
        this.history.pushState({}, '', pathname);
        this._onRoute(pathname);
    }

    back() {
        this.history.back();
    }

    forward() {
        this.history.forward();
    }

    getRoute(pathname: string) {
        return this.routes.find((route) => route.match(pathname));
    }

    destroy() {
        this.__instance = undefined;
    }
}

export const router = new Router();
