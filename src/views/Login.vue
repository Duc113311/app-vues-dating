<template>
  <!-- header -->
  <div
    class="form-login justify-center flex content-center h-full items-center"
  >
    <div>
      <div>
        <div class="flex justify-center">
          <img
            src="../assets/images/app_icon_512x512.png"
            width="100"
            height="100"
            alt=""
            srcset=""
          />
        </div>
        <div class="block text-center justify-center mt-3 text-white">
          <h2 class="text-2xl">Warm Welcome</h2>
          <h2 class="text-xl">We hope you have a sweet time here</h2>
        </div>
      </div>
      <!-- Body -->
      <div class="h-30 justify-center flex p-10">
        <div class="grid">
          <el-button
            class="bg-white text-base text-black w-72 rounded-lg p-5 mb-4"
            @click="onLoginGoogle()"
          >
            <img src="../assets/images/google_icon.svg" class="mr-1" alt="" />
            Log in with Google
          </el-button>

          <el-button
            type="primary"
            class="bg-blue-500 text-base text-white w-72 rounded-lg p-5 mb-4"
            @click="onLoginFacebook()"
          >
            <img
              src="../assets/images/facebook_icon.svg"
              class="mr-1"
              alt=""
            />Log in with Facebook</el-button
          >
          <el-button
            type="danger"
            class="bg-red-400 text-base text-white w-72 rounded-lg p-5 mb-3"
            @click="onClickPhoneNumber(true)"
            ><img
              src="../assets/images/phone_number_icon.svg"
              class="mr-1"
              alt=""
            />Log in with Phone number</el-button
          >
        </div>

        <!-- <button
          class="p-2 bg-sky-500 text-cyan-50 rounded-sm"
          @click="onLoginGoogle()"
        >
          Login with Google
        </button>
        <button
          @click="onLoginFacebook()"
          class="mt-3 p-2 bg-sky-500 text-cyan-50 rounded-sm"
        >
          Login with Facebook
        </button>
        <button
          @click="onLoginPhoneNumber()"
          class="mt-3 p-2 bg-sky-500 text-cyan-50 rounded-sm"
        >
          Login with PhoneNumber
        </button> -->
      </div>

      <div class="mt-5 items-center content-center text-white ml-5 mr-3">
        <div>
          <h2 class="text-base text-center">Trouble logging in?</h2>
          <span class="text-base text-gray-400"
            >By clicking "Login", you agree with our Terms. Learn how we process
            your data our <a href="http://">Privacy policy</a> and
            <a href="http://">Cookies Policy</a></span
          >
        </div>
      </div>
    </div>
  </div>

  <el-dialog
    class="dialog-phone"
    v-model="centerDialogVisible"
    width="90%"
    align-center
  >
    <h2 class="mb-2 text-xl text-white">My number is</h2>
    <input
      id="phone"
      type="tel"
      pattern="[0-9]"
      class="txt-phone w-full"
      name="phone"
    />
    <div class="recapcha" id="recaptcha-container"></div>
    <div class="mt-2 text-color">
      <span
        >When you tap "Continue", Heartlink will send a text with verificatrion
        code. Message and data rates maty apply.</span
      >
      <span>The verifed phone number can be used to log in.</span>
      <a href="http://">Learn what happens when your number changes</a>
    </div>

    <div class="mt-4 flex justify-center">
      <el-button
        type="danger"
        class="text-base text-white w-72 rounded-lg p-5 color-button"
        @click="onClickPhoneNumber(true)"
        >Continue</el-button
      >
    </div>
  </el-dialog>
</template>

<script>
// @ is an alias to /src
import {
  auth,
  signInWithPopup,
  provider,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "../configs/firebase";

export default {
  name: "Login-auth",
  components: {},
  setup() {},
  data() {
    return {
      centerDialogVisible: false,
    };
  },

  methods: {
    /**
     * Login Google
     */
    onLoginGoogle() {
      debugger;
      console.log("Da vào day");
      // var email = "nguyenvanducdev@gmail.com";
      // var password = "12345678";
      debugger;
      signInWithPopup(auth, provider)
        .then((result) => {
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;

          debugger;
          // The signed-in user info.
          const user = result.user;
          console.log(token);
          console.log("User>>Goole>>>>", user);
          window.localStorage.setItem("accessToken", JSON.stringify(token));
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          // The AuthCredential type that was used.
          console.log(errorMessage);
          console.log(provider);
          console.log(errorCode);
        });
    },

    /**
     * Login facebook
     */
    onLoginFacebook() {
      debugger;
      signInWithPopup(auth, provider)
        .then((result) => {
          debugger;
          const user = result.user;

          // This gives you a Facebook Access Token. You can use it to access the Facebook API.
          const credential = FacebookAuthProvider.credentialFromResult(result);
          const accessToken = credential.accessToken;
          console.log(user);
          console.log("accessToken- face", accessToken);
          // ...
        })
        .catch((error) => {
          debugger;
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          console.log(errorCode);
          console.log(errorMessage);

          // ...
        });
    },

    /**
     * Login Phone Number
     */
    onClickPhoneNumber(val) {
      debugger;
      this.centerDialogVisible = val;
    },
  },
};
</script>

<style>
.el-button + .el-button {
  margin-left: 0px !important;
}

#phone,
.btn {
  padding-top: 6px;
  padding-bottom: 6px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.btn {
  color: #ffffff;
  background-color: #428bca;
  border-color: #357ebd;
  font-size: 14px;
  outline: none;
  cursor: pointer;
  padding-left: 12px;
  padding-right: 12px;
}

.btn:focus,
.btn:hover {
  background-color: #3276b1;
  border-color: #285e8e;
}

.btn:active {
  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
}

.alert {
  padding: 15px;
  margin-top: 10px;
  border: 1px solid transparent;
  border-radius: 4px;
}

.alert-info {
  border-color: #bce8f1;
  color: #31708f;
  background-color: #d9edf7;
}

.alert-error {
  color: #a94442;
  background-color: #f2dede;
  border-color: #ebccd1;
}

.dialog-phone {
  background-color: #332b3e !important;
}

.text-color {
  color: #6587a5;
}

.color-button {
  background-color: #2e465c;
  border: 1px solid #2e465c !important;
}
</style>
