import { createContext, useContext } from 'react';

import UserStore from './user';

export const rootStore = {
  userStore: new UserStore(),
};

const RootStoreContext = createContext(rootStore);

export const Provider = RootStoreContext.Provider;

export function useStore() {
  const store = useContext(RootStoreContext);
  if (store === null) {
    throw new Error('Store cannot be null, please add a context provider');
  }
  return store;
}
