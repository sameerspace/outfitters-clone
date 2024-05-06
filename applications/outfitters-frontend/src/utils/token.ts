const TOKEN_KEY = 'auth_key';

export const setToken = (token: string) =>
  window?.localStorage.setItem(TOKEN_KEY, token);
export const getToken = (): string | null =>
  window?.localStorage.getItem(TOKEN_KEY);
export const clearToken = () => window?.localStorage.removeItem(TOKEN_KEY);
