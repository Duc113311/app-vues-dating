import Cookies from "js-cookie";

function getToken(token) {
  return Cookies.get(token);
}
function deleteToken(token) {
  debugger;
  return Cookies.remove(token);
}

export default {
  getToken,
  deleteToken,
};
