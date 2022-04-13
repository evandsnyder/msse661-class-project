const AUTH_API = `${BASE_API_URL}/auth`;
const USER_API = `${BASE_API_URL}/user`;

register = (formData) => {
  return _post(`${AUTH_API}/register`, formData);
}

login = (formData) => {
  return _post(`${AUTH_API}/login`, formData);
}

const logout = () => {
  clearStorage('isAuth');
  clearStorage('access_token');
  clearStorage('refresh_token');
};