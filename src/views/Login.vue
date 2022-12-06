<template>
  <!-- header -->

  <div class="flex justify-center w-full h-full body-app overflow-hidden">
    <div class="h-screen w-full image-background">
      <div class="w-full h-full back-color">
        <!-- <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/login">Login</router-link>
      </nav> -->
        <div
          v-show="isShowIconApp"
          class="img-app w-full h-full flex justify-center"
        >
          <img
            class="w-40"
            src="../assets/images/ic_icon_app.svg"
            alt=""
            srcset=""
          />
        </div>
        <header class="site-header">
          <div class="wrapper site-header__wrapper">
            <a href="#" class="brand">Brand</a>
            <nav class="nav">
              <button class="nav__toggle" aria-expanded="false" type="button">
                menu
              </button>
              <ul class="nav__wrapper">
                <li class="nav__item"><a href="#">Home</a></li>
                <li class="nav__item"><a href="#">About</a></li>
                <li class="nav__item"><a href="#">Services</a></li>
                <li class="nav__item"><a href="#">Hire us</a></li>
                <li class="nav__item"><a href="#">Contact</a></li>
              </ul>
            </nav>
          </div>
        </header>
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
                  class="cursor-pointer bg-white text-base text-black w-80 rounded-lg px-6 py-6 mb-4"
                  @click="onLoginGoogle()"
                >
                  <img
                    src="@/assets/images/google_icon.svg"
                    class="mr-1"
                    alt=""
                  />
                  Log in with Google
                </el-button>

                <el-button
                  type="primary"
                  class="cursor-pointer bg-face text-base text-white w-80 rounded-lg px-6 py-6 mb-4"
                  @click="onLoginFacebook()"
                >
                  <img
                    src="@/assets/images/facebook_icon.svg"
                    class="mr-1"
                    alt=""
                  />Log in with Facebook</el-button
                >
                <el-button
                  type="danger"
                  class="cursor-pointer bg-phone text-base text-white w-80 rounded-lg px-6 py-6 mb-3"
                  @click="onClickPhoneNumber()"
                  ><img
                    src="@/assets/images/phone_number_icon.svg"
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
                  >By clicking "Login", you agree with our Terms. Learn how we
                  process your data our <a href="http://">Privacy policy</a> and
                  <a href="http://">Cookies Policy</a></span
                >
              </div>
            </div>
          </div>
        </div>

        <PhoneNumber
          v-if="isShowPhone"
          :isShowPhone="isShowPhone"
        ></PhoneNumber>

        <WelcomeDating
          v-if="isWellcome"
          :isShowWelcome="isWellcome"
        ></WelcomeDating>
        <div class="recapcha" id="recaptcha-container"></div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import { auth } from "@/configs/firebase";
import {
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
  getAuth,
} from "firebase/auth";
import PhoneNumber from "@/components/form-dialog/phone-number.vue";
import WelcomeDating from "@/components/form-dialog/welcome.vue";
import storeTokens from "@/stores/login/store-token";
import storeUsers from "@/stores/user-profile/store-user";
import TokenApps from "@/middleware/auth";
import { getAnalytics, logEvent } from "firebase/analytics";

// Set up actions
export default {
  name: "Login-auth",
  components: { PhoneNumber, WelcomeDating },
  setup() {
    const auth = getAuth();
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
      auth,
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
      document.getElementById("digit-1").value = document
        .getElementById("digit-1")
        .value.slice(0, 1);
    },
    // Login bằng Google
    async onLoginGoogle() {
      this.isWellcome = true;
      //
      const analytics = getAnalytics();
      logEvent(analytics, "login", { methodName: "google" });
      //
      const status = false;
      debugger;
      if (!status) {
        await signInWithPopup(this.auth, this.providerGoogle)
          .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            debugger;
            // Dùng userID để tạo ra Token
            const userID = result.user.uid;
            storeTokens.dispatch("postTokenByUserID", { id: userID });
            console.log("Đã vào");
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
        const isCheckProfile = await this.onCheckUserProfileExits();
        debugger;
        if (isCheckProfile) {
          this.$router.push("home");
        } else {
          this.isWellcome = true;
        }
      }
    },

    async onCheckUserIdExits() {
      debugger;
      const userId = await TokenApps.getToken("userId");
      debugger;
      if (userId) {
        await storeTokens.dispatch("checkUserIdExist", {
          id: userId,
        });
        return storeTokens.state.isUserId;
      }
    },

    // Check User-profile
    async onCheckUserProfileExits() {
      const userId = await TokenApps.getToken("userId");
      debugger;
      await storeUsers.dispatch("checkUserProfileExist", {
        id: userId,
      });
      return storeUsers.state.isUserProfile;
    },

    // Login Facebook
    onLoginFacebook() {
      debugger;
      // this.isShowPhone = true;
      // console.log(storeTokens.state.tokenAccount.accessToken);
      signInWithPopup(this.auth, this.providerFace)
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
    async onClickPhoneNumber() {
      const status = await this.onCheckUserIdExits();
      debugger;
      if (!status) {
        // Không tồn tại userID
        this.isShowPhone = true;
      } else {
        const isCheckProfile = await this.onCheckUserProfileExits();
        debugger;
        if (isCheckProfile) {
          this.$router.push("home");
        } else {
          this.isWellcome = true;
        }
      }
      // this.$router.push("/phone-number");
    },
  },

  created() {},

  mounted() {
    debugger;

    const status = this.onCheckUserIdExits();
    if (!status) {
      debugger;

      this.$router.push("/home");
    }
    // debugger;
    // console.log(access);
    // storeTokens.dispatch("checkUserIdExist");
    // storeTokens.dispatch("getAllData");
    console.log(storeTokens.state.isUserId);
  },
};
</script>

<style>
.image-background {
  background-image: url(../assets/images/background.webp);
  z-index: 99;
  padding-right: 0px !important;
  padding-left: 0px !important;
  background-size: cover;
  position: relative;
}
.back-color {
  background-color: rgba(0, 0, 0, 0.607);
}

.recapcha {
  display: none;
  justify-content: end;
  margin-bottom: 15px;
}

.img-app {
  background: #884971;
  opacity: 1;
}

*:focus {
  outline: none;
}
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
