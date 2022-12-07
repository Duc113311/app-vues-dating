<template>
  <div class="static">
    <div
      v-show="isShowIconApp"
      class="absolute z-20 img-app w-full h-full flex justify-center"
    >
      <img
        class="w-40"
        src="./assets/images/ic_icon_app.svg"
        alt=""
        srcset=""
      />
    </div>
    <div class="tracking-wide absolute z-10 w-full h-full">
      <router-view />
    </div>
  </div>
</template>

<script>
import { fireStoreCore, collection, getDocs } from "./configs/firebase";
import TokenApps from "@/middleware/auth";
import storeTokens from "@/stores/login/store-token";
import storeUsers from "@/stores/user-profile/store-user";

export default {
  components: {},
  setup() {
    async function getUser() {
      const citiesCol = collection(fireStoreCore, "users");
      const citySnapshot = await getDocs(citiesCol);
      const cityList = citySnapshot.docs.map((doc) => doc.data());
      console.log(cityList);
      return cityList;
    }
    getUser();
  },
  data() {
    return {
      isShowIconApp: true,
    };
  },

  created() {
    setTimeout(() => {
      this.isShowIconApp = false;
    }, 1000);
  },
  async mounted() {
    debugger;

    // Check xem đã đăng nhập vào chưa?
    const userId = TokenApps.getToken("userId");
    if (userId) {
      await storeTokens.dispatch("checkUserIdExist", {
        id: userId,
      });
      const isUserToken = storeTokens.state.isUserId;

      // Nếu tồn tại vào check tiếp trong bảng users
      if (isUserToken) {
        await storeUsers.dispatch("checkUserProfileExist", {
          id: userId,
        });
        const isUserProfile = storeUsers.state.isUserProfile;

        // Nếu tồn tại vào check users
        if (isUserProfile) {
          return this.$router.push("/home");
        } else {
          return this.$router.push("/profile");
        }
      }
    }
    return this.$router.push("");
  },
};
</script>

<style scoped>
.image-background {
  background-image: url(./assets/images/background.webp);
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

* {
  margin: 0;

  padding: 0;

  box-sizing: border-box;
}

body {
  font-family: cursive;
}

a {
  text-decoration: none;
}

li {
  list-style: none;
}
</style>
