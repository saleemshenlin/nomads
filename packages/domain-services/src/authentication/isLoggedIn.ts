import store from 'store2';
import isNil from 'lodash/isNil';

import localStorageUserKey from './lib/localStorageUserKey';

export default () => {
  const user = store.get(localStorageUserKey);
  const { accessToken: token } = user;
  const isTokenValid = !isNil(token);
  return isTokenValid;
};
