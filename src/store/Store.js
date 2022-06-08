import Reflux from 'reflux';

import data from './data.json';

import { createNewAd, updateAd } from './actions';

class Store extends Reflux.Store {
  constructor() {
    super();
    this.state = data;

    this.listenTo(createNewAd, this.createNewAd);
    this.listenTo(updateAd, this.updateAd);
  }

  createNewAd(newAd) {
    this.setState({
      ...this.state,
      ads: this.state.ads.concat(newAd),
    });
  }

  updateAd(adId, ad) {
    const ads = this.state.ads.filter((ad) => ad.id !== adId);

    this.setState({
      ...this.state,
      ads: ads.concat(ad),
    });
  }
}

export default Store;
