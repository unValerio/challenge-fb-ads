import { shallow } from 'enzyme';

import Box from './Box';

describe('Components - Box', () => {
  it('renders <Box />  without crashing', () => {
    const wrapper = shallow(<Box />);
    expect(wrapper.exists()).toBe(true);
  });
});
