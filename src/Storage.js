let token = null;
export function setToken(tokenSet) {
  localStorage.setItem('User-token', tokenSet);
  token = tokenSet;
}

export function getToken() {
  const tokenData = localStorage.getItem('User-token');
  return token || tokenData;
}
