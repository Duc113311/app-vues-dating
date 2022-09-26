<template>
  <div class="h-screen w-full image-background">
    <div class="w-full h-full back-color">
      <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/login">Login</router-link>
    </nav> -->
      <router-view />
    </div>
  </div>
</template>
<script>
import { fireStoreCore, collection, getDocs } from "./configs/firebase";
export default {
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
};
</script>

<style scoped>
.image-background {
  background-image: url(./assets/images/background.webp);
  width: 100%;
  padding-right: 0px !important;
  padding-left: 0px !important;
  background-size: cover;
  position: relative;
}
.back-color {
  background-color: rgba(0, 0, 0, 0.607);
}
</style>
