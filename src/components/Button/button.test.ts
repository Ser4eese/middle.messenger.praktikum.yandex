import { expect } from 'chai';
import Button from './index';


describe('Button', () => {
    it('should render', () => {
        new Button({ text: 'Отправить' });
    });

    it('element is button', () => {
        const button = new Button({ text: 'Отправить' });
        const element = button.element;
        expect(element).to.be.instanceof(window.HTMLButtonElement);
    });

    it('should render text', () => {
        const text = 'Отправить';
        const button = new Button({ text: 'Отправить' });
        const element = button.element;
        expect(element.innerHTML).to.contain(text);
    });

    it('should click', () => {
        let isClick = false;
        const button = new Button({
            text: 'Отправить', events: {
                click: () => {
                    isClick = true
                }
            }
        });
        const element = button.element;
        element.click();
        expect(isClick).to.be.eq(true);
    });
});