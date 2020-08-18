const TOKEN_NAME = "token";

export const useAuthToken = () => {

  const token = localStorage.getItem(TOKEN_NAME);

  const setAuthToken = (authToken) => localStorage.setItem(TOKEN_NAME, authToken);
  
  const removeAuthToken = () => localStorage.removeItem(TOKEN_NAME);
  
  return [token, setAuthToken, removeAuthToken];
};