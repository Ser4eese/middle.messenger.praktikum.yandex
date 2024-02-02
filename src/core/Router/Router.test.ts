/* global describe, afterEach, it */
/* eslint no-undef: "error" */
import { expect } from 'chai';
import * as sinon from 'sinon';
import { router } from './Router';

describe('Router', () => {
    global.window.history.back = () => {
        if (typeof window.onpopstate === 'function') {
            window.onpopstate({ currentTarget: window } as unknown as PopStateEvent);
        }
    };
    global.window.history.forward = () => {
        if (typeof window.onpopstate === 'function') {
            window.onpopstate({ currentTarget: window } as unknown as PopStateEvent);
        }
    };

    afterEach(() => {
        router.destroy();
    });

    const getContentFake = sinon.fake.returns(document.createElement('div'));

    const BlockMock = class {
        getContent = getContentFake;
    };

    it('use() return Router instance', () => {
        const result = router.use('/', BlockMock);
        expect(result).to.eq(router);
    });

    it('render page on start', () => {
        router.use('/', BlockMock).start();
        expect(getContentFake.callCount).to.eq(1);
    });

    it('route forward', () => {
        router.use('/', BlockMock).start();
        router.forward();
        expect(getContentFake.callCount).to.greaterThanOrEqual(1);
    });

    it('route back', () => {
        router.use('/', BlockMock).start();
        router.back();
        expect(getContentFake.callCount).to.greaterThanOrEqual(1);
    });

    it('route and render messages page', () => {
        router.use('/messages', BlockMock).start();
        router.go('/messages');
        expect(window.location.href).to.eq('http://localhost:3000/messages');
    });
});
