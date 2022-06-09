import { createContext, useReducer, useCallback, useEffect } from "react";

import { reducer, functions, initialState } from './store';
import './notifications.css';

export const NotificationContext = createContext();

const NotificationProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { enqueue, drop } = functions({ dispatch }, { defaultDisplayDuration: 2000 });

  const enqueueNotification = useCallback(enqueue, []);
  const dropNotification = useCallback(drop, []);

  return (
    <NotificationContext.Provider value={{ enqueueNotification, dropNotification }}>
      <div className="notification-host">
        {state.stack.map((notification) => (
          <div className={`notification-item ${notification.show ? "fade-in" : "fadeiut"}`} key={notification.id}>
            <div className="notification-alert"
              onClose={() => dropNotification(notification.id)}
            >
              {notification.message}
            </div>
          </div>
        ))}
      </div>
      {children}
    </NotificationContext.Provider >
  );
};

export default NotificationProvider;

