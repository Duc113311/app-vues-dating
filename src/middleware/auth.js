import Cookies from "js-cookie";

export default function getToken(token) {
  return Cookies.get(token);
}
