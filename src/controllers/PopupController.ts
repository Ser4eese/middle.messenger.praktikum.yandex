import { PopupTypes, store } from '../core/Store/store';

export class PopupController {
    static async open(type: PopupTypes) {
        store.set('popup', type);
    }

    static close() {
        store.set('popup', undefined);
    }
}
