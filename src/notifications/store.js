import { v4 as uuidv4 } from 'uuid';

const ANIMATION_DURATION = 2000;

export const initialState = {
  stack: [],
};

export const types = {
  CLEAN: 'CLEAN',
  ENQUEUE: 'ENQUEUE',
  HIDE: 'HIDE',
  DROP: 'DROP',
};

export const cleanStore = () => ({ type: types.CLEAN, payload: {} });
export const hideNotification = (id) => ({ type: types.HIDE, payload: { id } });
export const dropNotification = (id) => ({ type: types.DROP, payload: { id } });
export const enqueueNotification = (payload, id) => ({
  type: types.ENQUEUE,
  payload: { ...payload, id, show: true },
});

export const actionCreators = {
  cleanStore,
  hideNotification,
  dropNotification,
  enqueueNotification,
};

export const reducer = (state = initialState, action) => {
  let stack;
  switch (action.type) {
    case types.CLEAN:
      return {
        ...initialState,
      };

    case types.ENQUEUE:
      stack = [...state.stack];
      stack.push(action.payload);

      return {
        ...state,
        stack,
      };

    case types.HIDE:
      stack = state.stack.map((item) => ({
        ...item,
        show: item.id !== action.payload.id,
      }));

      return {
        ...state,
        stack,
      };

    case types.DROP:
      stack = state.stack.filter((item) => item.id !== action.payload.id);

      return {
        ...state,
        stack,
      };

    default:
      return {
        ...state,
      };
  }
};

const drop = ({ dispatch }) => (id) => {
  dispatch(hideNotification(id));
  setTimeout(() => {
    dispatch(dropNotification(id));
  }, ANIMATION_DURATION);
};

const enqueue = ({ dispatch }, { defaultDisplayDuration }) => ({
  persist,
  displayDuration,
  ...payload
}) => {
  // Instantiate a new one
  const id = uuidv4();
  dispatch(enqueueNotification(payload, id));

  // Auto remove
  if (!persist) {
    setTimeout(() => {
      drop({ dispatch })(id);
    }, displayDuration || defaultDisplayDuration);
  }
};

export const functions = (store, config) => ({
  drop: drop(store),
  enqueue: enqueue(store, config),
});
