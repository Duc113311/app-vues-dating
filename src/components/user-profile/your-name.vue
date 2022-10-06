<template>
  <div>
    <div class="mt-10">
      <h2 class="text-2xl text-white">My name is</h2>
    </div>
    <div class="mt-6">
      <el-input
        class="your-name mb-3"
        v-model="txtFirstName"
        placeholder="Your name"
        @keyup="onChangeInput"
      />
      <span class="text-slate-500 mt-3"
        >This is how it will appear in HeartLink, and you will not able to
        change it</span
      >
    </div>
  </div>
</template>

<script>
// import storeTokens from "@/stores/login/store-token";
// import { ref, watch } from "vue";
import storeUsers from "@/stores/user-profile/store-user";
export default {
  name: "Your-Name",

  setup() {
    return {};
  },

  data() {
    return {
      txtFirstName: "",
    };
  },

  methods: {
    onChangeInput() {
      debugger;
      // storeTokens.commit("increment", this.txtFirstName);
      if (this.txtFirstName !== "") {
        storeUsers.commit("setUserProfile", this.txtFirstName);
        document.querySelector(".btContinue").disabled = false;
        document.querySelector(".btContinue").style.backgroundColor = "red";
      } else {
        document.querySelector(".btContinue").disabled = true;
        document.querySelector(".btContinue").style.backgroundColor = "#382e41";
      }
    },
  },

  mounted() {
    this.txtFirstName = storeUsers.state.userProfile.firstName;
    if (this.txtFirstName !== "") {
      document.querySelector(".btContinue").disabled = false;
      document.querySelector(".btContinue").style.backgroundColor = "red";
    } else {
      document.querySelector(".btContinue").disabled = true;
      document.querySelector(".btContinue").style.backgroundColor = "#382e41";
    }
    debugger;
  },
};
</script>

<style lang="css">
.el-input__wrapper {
  background-color: #696a7d;
}
.your-name .el-input__inner {
  background-color: #696a7d;
  --el-input-inner-height: 45px !important;
  font-size: larger !important;
  padding: 10px;
  color: white;
}
</style>
