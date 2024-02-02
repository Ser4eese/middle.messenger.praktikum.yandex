/* global describe */
/* eslint no-undef: "error" */
import { assert } from 'chai';
import { test } from 'mocha';
import { Block } from './Block';

const template = '{{content}}';

class TestBlock extends Block {
    constructor(props: Record<string, unknown>) {
        super({ ...props }, 'div');
    }

    render() {
        return this.compile(template, this.props);
    }
}

const testBlock = new TestBlock({ content: 'test' });

describe('Block', () => {
    test('should render correctly', () => {
        assert.equal(testBlock.getContent()?.innerHTML, 'test');
    });

    test('should render with tag', () => {
        assert.equal(testBlock.getContent()?.tagName, 'DIV');
    });

    test('should render given props', () => {
        testBlock.setProps({
            content: 'Some important message for future',
        });

        assert.equal(testBlock.getContent()?.innerHTML, 'Some important message for future');
    });
});
