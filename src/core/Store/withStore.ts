import { Block } from '../Block/Block';
import { IState, StoreEvents, store } from './store';

export const withStore = <T extends Record<string, any>>(mapStateToProps:
    (data: IState) => any) => {
    return (Component: typeof Block<T>) => {
        return class extends Component {
            constructor(props: any) {
                super({ ...props, ...mapStateToProps(store.getState()) });
                store.on(StoreEvents.UPDATE, () => {
                    const newProps = mapStateToProps(store.getState());
                    this.setProps(newProps);
                });
            }
        };
    };
};
