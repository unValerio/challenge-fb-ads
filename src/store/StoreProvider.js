import { createContext } from "react";
import Reflux from 'reflux';

import * as actions from './actions';
import Store from './Store';

export const StoreContext = createContext();

class StoreProvider extends Reflux.Component {
  constructor(props) {
    super(props);
    this.store = Store;
  }

  render() {
    return (
      <StoreContext.Provider value={{ store: this.state, actions }}>
        {this.props.children}
      </StoreContext.Provider>
    )
  }
}

export default StoreProvider;

