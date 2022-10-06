<template>
  <div>
    <div class="mt-10 mb-6">
      <h2 class="text-2xl text-white">I am a</h2>
    </div>
    <div class="grid w-full text-white">
      <button
        class="bt-woman rounded-lg p-6 mb-4"
        id="bt-woman"
        value="1"
        @click="onGender(1)"
      >
        Woman
      </button>
      <button
        class="bt-man rounded-lg p-6"
        id="bt-man"
        value="2"
        @click="onGender(2)"
      >
        Man
      </button>
    </div>
  </div>
</template>

<script>
import storeUsers from "@/stores/user-profile/store-user";

export default {
  name: "Im-Sex",
  setup() {
    return;
  },
  data() {
    return {
      gender: 0,
    };
  },

  methods: {
    onGender(val) {
      debugger;
      this.gender = val;
      if (this.gender === 1) {
        document.querySelector(".bt-woman").style.border = "2px solid red";
        document.querySelector(".bt-man").style.border = "2px solid white";
      }
      if (this.gender === 2) {
        document.querySelector(".bt-man").style.border = "2px solid red";
        document.querySelector(".bt-woman").style.border = "2px solid white";
      }
    },
  },

  mounted() {
    this.gender = storeUsers.state.userProfile.gender;
    if (this.gender === 1) {
      document.querySelector(".bt-woman").style.border = "2px solid red";
    }
    if (this.gender === 2) {
      document.querySelector(".bt-man").style.border = "2px solid red";
    }
  },
};
</script>

<style lang="css">
.el-button + .el-button {
  margin-left: 0px !important;
}
.rounded-lg {
  border: 2px solid white;
}
</style>
