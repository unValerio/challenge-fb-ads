import Reflux from 'reflux';

import data from './data.json';

import { createNewAd } from './actions';

class Store extends Reflux.Store {
  constructor() {
    super();
    this.state = data;

    this.listenTo(createNewAd, this.createNewAd);
  }

  createNewAd(newAd) {
    this.setState({
      ...this.state,
      ads: this.state.ads.concat(newAd),
    });
  }
}

export default Store;
