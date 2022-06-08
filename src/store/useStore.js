import { useContext } from 'react';

import { StoreContext } from './StoreProvider';

const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error(`Can't use "useStore" without a StoreProvider!`);
  }
  return context;
};

export default useStore;
