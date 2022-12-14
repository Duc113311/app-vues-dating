function validateEmail(email) {
  debugger;
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

export default {
  validateEmail,
};
