import { HTTPTransport } from '../core/HTTPTransport/HTTPTransport';

export abstract class API {
    protected http: HTTPTransport;

    protected constructor(endpoint: string) {
        this.http = new HTTPTransport(endpoint);
    }
}
