<template>
  <div
    class="w-full h-full home-page overflow-hidden p-5"
    :style="[isShowImage ? '' : isShowScroll]"
  >
    <Header></Header>

    <!-- Body -->
    <div class="w-full body-view-profile">
      <div class="flex w-full text-center text-white cursor-pointer">
        <div
          class="w-6/12 p-2"
          :style="[isActiveHeader ? colorActive : colorNoActive]"
          @click="onClickUpdate(true)"
        >
          Update
        </div>
        <div
          class="w-6/12 p-2"
          :style="[isActiveHeader ? colorNoActive : colorActive]"
          @click="onClickUpdate(false)"
        >
          Preview
        </div>
      </div>
      <MyPhotos :isShowHeader="isShowHeader"></MyPhotos>
    </div>

    <!--  -->
    <Footer></Footer>
  </div>
</template>

<script>
import MyPhotos from "../../components/user-profile/my-photos";
import storeUsers from "@/stores/user-profile/store-user";

import Footer from "../../components/common/footer";
import Header from "../../components/common/header";
export default {
  components: {
    MyPhotos,
    Footer,
    Header,
  },
  name: "view-profile",
  setup() {},

  data() {
    return {
      isShowImage: true,
      isShowScroll: {
        overflow: "scroll",
      },
      isShowHeader: false,
      isNoActive: false,

      colorActive: {
        color: "red",
        borderBottom: " 2px solid red",
      },
      colorNoActive: {
        color: "white",
      },
    };
  },

  computed: {
    isActiveHeader() {
      debugger;
      return storeUsers.state.isActiveColor;
    },
  },

  methods: {
    onClickUpdate(val) {
      debugger;
      storeUsers.commit("setIsActive", val);
    },
  },

  created() {
    storeUsers.dispatch("getListUserProfiles", "user-profiles");
  },
};
</script>

<style lang="css">
.home-page {
  background-color: #382e41;
}
.home-page::-webkit-scrollbar {
  display: none;
}
.bd-bottom {
  border-bottom: 1px solid #373e50;
}

.body-view-profile {
  height: 80%;
}
</style>
