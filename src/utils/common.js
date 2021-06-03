const userKey = 'sienx-user';

export const setLocalUser = (data) => {
  localStorage.setItem(userKey, data);
};

export const removeLocalUser = () => {
  localStorage.removeItem(userKey);
};

export const getLocalUser = () => {
  return localStorage.getItem(userKey);
};
