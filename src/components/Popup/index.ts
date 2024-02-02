import { withStore } from '../../core/Store/withStore';
import { Block, DefaultProps } from '../../core/Block/Block';
import { popup } from './Popup.tpl';
import { IState } from '../../core/Store/store';
import ButtonText from '../ButtonText/index';
import { PopupController } from '../../controllers/PopupController';
import { CreateChat } from '../CreateChat/index';
import UserEdit from '../UserEdit/index';
import UserDelete from '../UserDelete/index';

class PopupDefault extends Block {
    constructor(props: DefaultProps) {
        super({
            ...props,
            children: {
                popupContent: new CreateChat({}),
                addUser: new UserEdit({}),
                deleteUser: new UserDelete({}),
                closeButton: new ButtonText({
                    text: 'X',
                    events: {
                        click: () => {
                            PopupController.close();
                        },
                    },
                }),
            },
        }, 'div');
    }

    render(): DocumentFragment {
        return this.compile(popup, this.props);
    }
}

const mapStateToProps = (state: IState) => {
    return {
        popupType: state.popup,
    };
};

const Popup = withStore(mapStateToProps)(PopupDefault);

export default Popup;
