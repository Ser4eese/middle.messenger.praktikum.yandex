import { Block } from '../../core/Block/Block.ts';
import { validate } from '../../utils/validation.ts';
import { IProfileInputProps } from './profileInput.props.ts';
import { profileInput } from './profileInput.tpl.ts';

export default class ProfileInput extends Block<IProfileInputProps> {
    constructor(props: IProfileInputProps) {
        super({
            ...props,
            style: 'profile__item',
            events: {
                blur: (event: any) => {
                    if (!event.target) return;
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
        return this.compile(profileInput, this.props);
    }
}
