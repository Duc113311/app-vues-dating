<template>
  <div
    class="w-full absolute bottom-0 right-0 footer-body flex justify-center content-center text-center cursor-pointer"
  >
    <div>
      <img src="@/assets/img/ic_home_tab.svg" @click="onClickHome()" />
    </div>
    <div>
      <img src="@/assets/img/ic_explore_tab.svg" @click="onClickExplore()" />
    </div>
    <div>
      <img src="@/assets/img/ic_message_tab.svg" @click="onClickMessage()" />
    </div>
    <div>
      <img src="@/assets/img/ic_profile_tab.svg" @click="onClickProfile()" />
    </div>
  </div>
</template>

<script>
export default {
  name: "footer-page",

  setup() {
    return;
  },

  data() {
    return {};
  },

  methods: {
    onClickHome() {
      this.$router.push("/home");
    },

    onClickExplore() {
      this.$router.push("/explore");
    },

    onClickProfile() {
      this.$router.push("/view-profile");
    },
  },
};
</script>

<style lang="css">
.footer-body {
  height: calc(100% - 91%);
  justify-content: center;
  gap: 70px;
  align-items: center;
  border-top: 1px solid #373e50;
  margin-top: 10px;
}
</style>
