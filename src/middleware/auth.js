import Cookies from "js-cookie";

function getToken(token) {
  return Cookies.get(token);
}

function deleteToken(token) {
  return Cookies.remove(token);
}

function getAccessToken(userId) {
  return localStorage.getItem(userId);
}

function getProviderId(providerId) {
  return localStorage.getItem(providerId);
}

export default {
  getToken,
  deleteToken,
  getAccessToken,
  getProviderId,
};
