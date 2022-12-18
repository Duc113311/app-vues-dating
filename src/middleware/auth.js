import Cookies from "js-cookie";

function getToken(token) {
  return Cookies.get(token);
}
function deleteToken(token) {
  debugger;
  return Cookies.remove(token);
}

function getAccessToken(userId) {
  return localStorage.getItem(userId);
}

export default {
  getToken,
  deleteToken,
  getAccessToken,
};
