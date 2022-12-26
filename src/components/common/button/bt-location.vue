<template>
  <div class="w-full pl-10 pr-10 flex justify-center items-center">
    <el-button
      type="danger"
      :loading="isLoading"
      id="btContinueCode"
      class="text-base btContinueCode cursor-pointer text-white w-full rounded-lg p-6 color-button"
      @click="onClickContinues"
      >Allow Location</el-button
    >
  </div>
</template>

<script>
import storeUsers from "@/stores/user-profile/store-user";
import TokenApps from "@/middleware/auth";
import userProfiles from "@/stores/user-profile/store-user";

export default {
  name: "bt-location",
  data() {
    return {
      isLoading: false,
      isNumber: 0,
      latitude: "",
      longitude: "",
      isShowAvoid: false,
    };
  },

  computed: {},

  methods: {
    async onHideWellcome(val) {
      this.isShowAvoid = val;
      this.$router.push({ path: "/home" });
    },

    async showPosition(position) {
      if (position.coords) {
        storeUsers.commit("setLocation", position.coords);
      }
      const userId = TokenApps.getAccessToken("userId");
      const providerId = TokenApps.getProviderId("providerId");
      const dataUser = userProfiles.state.userProfile;
      dataUser.userId = userId;
      dataUser.providerId = providerId;

      console.log(dataUser);
      await userProfiles.dispatch("postUserProfile", dataUser);
      this.$emit("onShowAvoid", true);
    },
    /**
     * Sự kiện click để tiếp tục
     */
    onClickContinues() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.showPosition);
      }
    },
  },
};
</script>

<style lang="css">
.color-button {
  background-color: #fd5d65;
  border: 1px solid #fd5d65 !important;
}

.color-button:hover,
.color-button:active,
.color-button:focus {
  background-color: #fd5d65;
}
</style>
