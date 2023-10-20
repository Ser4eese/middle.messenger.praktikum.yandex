import { input } from './input.tpl.ts';
import { Block } from '../../utils/block.ts';
import { validate } from '../../utils/validation.ts';
import { IInputProps } from './input.props.ts';

export default class Input extends Block<IInputProps> {
    constructor(props: IInputProps) {
        super({
            ...props,
            style: 'input',
            events: {
                blur: (event: any) => {
                    const validateResult = validate(event.target.value, props.rules || []);
                    if (validateResult) {
                        this.setProps({
                            ...this.props,
                            error: validateResult,
                            value: event.target.value,
                        });
                    } else {
                        this.setProps({
                            ...this.props,
                            error: false,
                            value: event.target.value,
                        });
                    }
                },
            },
        });
    }

    render(): DocumentFragment {
        return this.compile(input, this.props);
    }
}
