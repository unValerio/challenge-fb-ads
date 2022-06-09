import { shallow } from 'enzyme';

import FacebookAd from './FacebookAd';

describe('Components - FacebookAd', () => {
  const ad = {
    "id": "0001",
    "productId": "002",
    "image": "https://admockups.com/images/fb-admockups-single-ad-image.jpg",
    "headline": "Try Ad Mockup Now! Its Free",
    "description": "Ad Mockups lets you create fast and easy mock...",
    "callToAction": "Download"
  };

  it('renders <FacebookAd />  without crashing', () => {
    const wrapper = shallow(<FacebookAd ad={ad} />);
    expect(wrapper.exists()).toBe(true);
  });
});
