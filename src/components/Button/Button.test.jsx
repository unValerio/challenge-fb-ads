import { shallow } from 'enzyme';

import Button from './Button';

describe('Components - Button', () => {
  it('renders <Button />  without crashing', () => {
    const wrapper = shallow(<Button />);
    expect(wrapper.exists()).toBe(true);
  });
});
