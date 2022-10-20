<template>
  <div class="w-full h-full relative home-page-detail overflow-hidden">
    <Header></Header>

    <!-- Body -->
    <div class="w-full body-view-profile overflow-hidden">
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
      <EditProfile v-if="isActiveHeader"></EditProfile>
      <Preview v-else></Preview>
    </div>

    <!--  -->
    <Footer></Footer>
  </div>
</template>

<script>
import Preview from "../../components/user-profile/view/preview";
import EditProfile from "../../components/user-profile/update/edit-profile";
import storeUsers from "@/stores/user-profile/store-user";

import Footer from "../../components/common/footer";
import Header from "../../components/common/header";
export default {
  components: {
    Preview,
    EditProfile,
    Footer,
    Header,
  },
  name: "view-profile",
  setup() {},

  data() {
    return {
      isShowImage: false,
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

      firstName: "Đức",
      ratioAbout: "+22%",
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
    storeUsers.dispatch("getListUserProfiles", "users");
  },
};
</script>

<style lang="css">
.home-page-detail {
  background-color: #382e41;
}
.body-profile::-webkit-scrollbar {
  display: none;
}
.bd-bottom {
  border-bottom: 1px solid #373e50;
}

.body-profile {
  height: 95%;
}

.body-view-profile {
  height: 80%;
}
</style>
