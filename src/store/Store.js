import Reflux from 'reflux';

import data from './data.json';

import { createNewAd, updateAd, deleteAd } from './actions';

class Store extends Reflux.Store {
  constructor() {
    super();
    this.state = data;

    this.listenTo(createNewAd, this.createNewAd);
    this.listenTo(updateAd, this.updateAd);
    this.listenTo(deleteAd, this.deleteAd);
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

  deleteAd(adId) {
    const ads = this.state.ads.filter((ad) => ad.id !== adId);

    this.setState({
      ...this.state,
      ads,
    });
  }
}

export default Store;
