/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-shadow
enum Methods {
    Get = 'Get',
    Post = 'Post',
    Put = 'Put',
    Patch = 'Patch',
    Delete = 'Delete',
  }

export class HTTPTransport {
    static API_URL = 'https://ya-praktikum.tech/api/v2';

    protected endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = `${HTTPTransport.API_URL}${endpoint}`;
    }

    get<Response>(path = '/'): Promise<Response> {
        return this.request<Response>(this.endpoint + path);
    }

    post<Response = void>(path: string, data?: unknown): Promise<Response> {
        return this.request<Response>(this.endpoint + path, {
            method: Methods.Post,
            data,
        });
    }

    put<Response = void>(path: string, data: unknown): Promise<Response> {
        return this.request<Response>(this.endpoint + path, {
            method: Methods.Put,
            data,
        });
    }

    patch<Response = void>(path: string, data: unknown): Promise<Response> {
        return this.request<Response>(this.endpoint + path, {
            method: Methods.Patch,
            data,
        });
    }

    delete<Response>(path: string, data?: unknown): Promise<Response> {
        return this.request<Response>(this.endpoint + path, {
            method: Methods.Delete,
            data,
        });
    }

    request<Response>(
        url: string,
        options: any = { method: Methods.Get },
        timeout = 5000,
    ): Promise<Response> {
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
    }
}
