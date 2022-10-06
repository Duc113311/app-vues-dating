script
<template>
  <!-- header -->
  <div
    class="form-login justify-center flex content-center h-full items-center"
  >
    <div>
      <div>
        <div class="flex justify-center mb-8">
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
          <h2 class="text-xl mt-2">We hope you have a sweet time here</h2>
        </div>
      </div>
      <!-- Body -->
      <div class="h-30 justify-center flex p-10">
        <div class="grid">
          <el-button
            class="bg-white text-base text-black w-80 rounded-lg px-6 py-6 mb-4"
            @click="onLoginGoogle()"
          >
            <img src="../assets/images/google_icon.svg" class="mr-1" alt="" />
            Log in with Google
          </el-button>

          <el-button
            type="primary"
            class="bg-face text-base text-white w-80 rounded-lg px-6 py-6 mb-4"
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
            class="bg-phone text-base text-white w-80 rounded-lg px-6 py-6 mb-3"
            @click="onClickPhoneNumber(true)"
            ><img
              src="../assets/images/phone_number_icon.svg"
              class="mr-1"
              alt=""
            />Log in with Phone number</el-button
          >
        </div>
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

  <PhoneNumber v-if="isShowPhone" :isShowPhone="isShowPhone"></PhoneNumber>

  <WelcomeDating v-if="isWellcome" :isShowWelcome="isWellcome"></WelcomeDating>
</template>

<script>
// @ is an alias to /src
import { auth } from "../configs/firebase";
import {
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import PhoneNumber from "@/components/form-dialog/phone-number.vue";
import WelcomeDating from "@/components/form-dialog/welcome.vue";
import storeTokens from "@/stores/login/store-token";
import getToken from "@/middleware/auth";
// Set up actions
export default {
  name: "Login-auth",
  components: { PhoneNumber, WelcomeDating },
  setup() {
    // Set giá trị Login Google & Facebook
    const providerGoogle = new GoogleAuthProvider();
    const providerFace = new FacebookAuthProvider();
    providerFace.addScope("user_birthday");
    providerFace.setCustomParameters({
      display: "popup",
    });

    return {
      providerGoogle,
      providerFace,
    };
  },
  data() {
    return {
      userDatas: [],
      isShowPhone: false,
      isWellcome: false,
    };
  },

  methods: {
    onClick() {
      debugger;

      document.getElementById("digit-1").value = document
        .getElementById("digit-1")
        .value.slice(0, 1);
    },
    // Login bằng Google
    async onLoginGoogle() {
      const status = await this.onCheckUserIdExits();
      debugger;
      if (!status) {
        await signInWithPopup(auth, this.providerGoogle)
          .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);

            // Dùng userID để tạo ra Token
            const userID = result.user.uid;
            storeTokens.dispatch("postTokenByUserID", { id: userID });
            this.isWellcome = true;
            console.log(credential);
            console.log("User>>Goole>>>>", userID);
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            // The AuthCredential type that was used.
            console.log(errorMessage);
            console.log(errorCode);
          });
      } else {
        this.isWellcome = true;
      }
    },

    async onCheckUserIdExits() {
      const userId = await getToken("userId");
      debugger;
      await storeTokens.dispatch("checkUserIdExist", {
        id: userId,
      });
      return storeTokens.state.isUserId;
    },
    // Login Facebook
    onLoginFacebook() {
      debugger;
      // this.isShowPhone = true;
      // console.log(storeTokens.state.tokenAccount.accessToken);
      signInWithPopup(auth, this.providerFace)
        .then((result) => {
          const user = result.user;
          debugger;
          // This gives you a Facebook Access Token. You can use it to access the Facebook API.
          const credential = FacebookAuthProvider.credentialFromResult(result);
          const accessToken = credential.accessToken;
          console.log(user);
          console.log("accessToken- face", accessToken);
          // ...
        })
        .catch((error) => {
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
    onClickPhoneNumber() {
      this.isShowPhone = true;

      // this.$router.push("/phone-number");
    },
  },

  created() {
    const status = this.onCheckUserIdExits();
    if (!status) {
      this.isWellcome = true;
    }
    // debugger;
    // const access = getToken("userId");
    // console.log(access);
    // storeTokens.dispatch("checkUserIdExist");
    // storeTokens.dispatch("getAllData");
    console.log(storeTokens.state.isUserId);
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

.text-2xl {
  font-size: 1.8rem !important;
  font-weight: 600;
}
.el-button > span {
  font-size: 20px;
}

.bg-face {
  background-color: #0085fe;
}
.bg-phone {
  background-color: #fd5d65;
}

/* màn hình điện thoại */
</style>
