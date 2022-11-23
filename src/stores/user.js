import { observable, action } from 'mobx';
import { useStore } from 'stores';

class UserStore {
  // @observable user = getUserAdmin() || null;
  @observable authentication = null;

  @action
  successfulAuthentication = value => {
    this.authentication = value;
  };

  @action
  failureAuthentication = () => {
    this.authentication = null;
    this.user = null;
    // removeUserAdmin();
  };
}

export const useUser = () => {
  const { userStore } = useStore();
  return userStore;
};
export default UserStore;
