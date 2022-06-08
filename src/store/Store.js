import Reflux from 'reflux';

import products from './products.json';

import { incrementAction } from './actions';

class Store extends Reflux.Store {
  constructor() {
    super();
    this.state = {
      products,
      ads: [
        {
          id: "asdf",
          productId: "002",
          headline: "Headline",
          description: "Description",
          callToAction: "Download",
        },
        {
          id: "zxcv",
          productId: "002",
          headline: "Headline2",
          description: "Description2",
          callToAction: "Download2",
        },
        {
          id: "hgf",
          productId: "003",
          headline: "Headline3",
          description: "Description3",
          callToAction: "Download3",
        }
      ]
    };

    this.listenTo(incrementAction, this.incrementItUp);
  }

  incrementItUp() {
    var newCount = this.state.count + 1;
    this.setState({ count: newCount });
  }
}

export default Store;
