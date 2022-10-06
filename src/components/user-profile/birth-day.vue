<template>
  <div>
    <div class="mt-10">
      <h2 class="text-2xl text-white">My birthday is</h2>
    </div>
    <div class="mt-6">
      <el-input
        class="birthdate mb-3 text-white"
        v-model="birthday"
        type="date"
        placeholder="dd/mm/yyyy"
        min="1977-01-01"
        max="2030-01-01"
        @keyup="onChangeInput"
      />
      <span class="text-slate-500 mt-3">Your age will be public</span>
    </div>
  </div>
</template>

<script>
import storeUsers from "@/stores/user-profile/store-user";

export default {
  name: "Birth-Day",
  setup() {
    return;
  },
  data() {
    return {
      birthday: "",
    };
  },

  methods: {
    onChangeInput() {
      if (this.birthday !== "") {
        storeUsers.commit("setBirthday", this.birthday);
        document.querySelector(".btContinue").disabled = false;
        document.querySelector(".btContinue").style.backgroundColor = "red";
      } else {
        document.querySelector(".btContinue").disabled = true;
        document.querySelector(".btContinue").style.backgroundColor = "#382e41";
      }
    },
  },

  mounted() {
    this.birthday = storeUsers.state.userProfile.birthday;
    debugger;
    if (this.birthday !== "") {
      document.querySelector(".btContinue").disabled = false;
      document.querySelector(".btContinue").style.backgroundColor = "red";
    } else {
      document.querySelector(".btContinue").disabled = true;
      document.querySelector(".btContinue").style.backgroundColor = "#382e41";
    }
  },
};
</script>

<style lang="css">
.birthdate .el-input__inner {
  background-color: #696a7d;
  --el-input-inner-height: 45px !important;
  font-size: larger !important;
  padding: 10px;
  color: white;
}
</style>
