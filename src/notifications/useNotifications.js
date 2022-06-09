import { useContext } from 'react';

import { NotificationContext } from './NotificationProvider';

const useNotifications = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error(`Can't use "useNotifications" without a NotificationProvider!`);
  }
  return context;
};

export default useNotifications;
