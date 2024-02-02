/* eslint-disable no-unused-vars */

import queryStringify from './../../utils/queryStringify';

export enum Methods {
    Get = 'Get',
    Post = 'Post',
    Put = 'Put',
    Patch = 'Patch',
    Delete = 'Delete',
}
type HTTPMethod = <R = unknown>(url: string, options?: unknown) => Promise<R>
export class HTTPTransport {
    static API_URL = 'https://ya-praktikum.tech/api/v2';

    protected endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = `${HTTPTransport.API_URL}${endpoint}`;
    }

    // eslint-disable-next-line default-param-last
    get: HTTPMethod = (path = '/', options?: unknown) => {
        return this.request(this.endpoint + (options ? `${path}${queryStringify(options)}` : path));
    };

    post: HTTPMethod = (path: string, data?: unknown) => {
        return this.request(this.endpoint + path, {
            method: Methods.Post,
            data,
        });
    };

    put: HTTPMethod = (path: string, data: unknown) => {
        return this.request(this.endpoint + path, {
            method: Methods.Put,
            data,
        });
    };

    patch: HTTPMethod = (path: string, data: unknown) => {
        return this.request(this.endpoint + path, {
            method: Methods.Patch,
            data,
        });
    };

    delete: HTTPMethod = (path: string, data?: unknown) => {
        return this.request(this.endpoint + path, {
            method: Methods.Delete,
            data,
        });
    };

    request = <R>(
        url: string,
        options: any = { method: Methods.Get },
        timeout = 5000,
    ):Promise<R> => {
        const { method, data } = options;

        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();

            xhr.open(method, url);
            xhr.withCredentials = true;

            xhr.onreadystatechange = () => {
                if (xhr.readyState === XMLHttpRequest.DONE) {
                    if (xhr.status < 400) {
                        resolve(xhr.response);
                    } else {
                        reject(xhr.response);
                    }
                }
            };

            xhr.onabort = reject;
            xhr.onerror = reject;

            xhr.timeout = timeout;
            xhr.ontimeout = reject;

            if (!(data instanceof FormData)) {
                xhr.setRequestHeader('Content-Type', 'application/json');
            }

            xhr.withCredentials = true;
            xhr.responseType = 'json';

            if (data instanceof FormData) {
                xhr.send(data);
            } else if (method === Methods.Get || !data) {
                xhr.send();
            } else {
                xhr.send(JSON.stringify(data));
            }
        });
    };
}
