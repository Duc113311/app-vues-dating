<template>
  <div>
    <div class="mt-10 mb-6">
      <h2 class="text-2xl text-white">Show me</h2>
    </div>
    <div class="grid w-full text-white">
      <button
        class="bt-womans rounded-lg p-6 mb-4"
        id="bt-womans"
        value="1"
        @click="onShowGender(1)"
      >
        Woman
      </button>
      <button
        class="bt-mans rounded-lg p-6 mb-4"
        id="bt-mans"
        value="2"
        @click="onShowGender(2)"
      >
        Man
      </button>
      <button
        class="bt-everyone rounded-lg p-6"
        id="bt-everyone"
        value="3"
        @click="onShowGender(3)"
      >
        Everyone
      </button>
    </div>
  </div>
</template>

<script>
import storeUsers from "@/stores/user-profile/store-user";

export default {
  name: "show-gender",
  setup() {
    return;
  },
  data() {
    return {
      genders: 0,
    };
  },

  methods: {
    onShowGender(val) {
      this.genders = val;
      storeUsers.commit("setShowGender", val);
      if (this.genders === 1) {
        document.querySelector(".bt-womans").style.border = "2px solid red";
        document.querySelector(".bt-mans").style.border = "2px solid white";
        document.querySelector(".bt-everyone").style.border = "2px solid white";
      }
      if (this.genders === 2) {
        document.querySelector(".bt-mans").style.border = "2px solid red";
        document.querySelector(".bt-womans").style.border = "2px solid white";
        document.querySelector(".bt-everyone").style.border = "2px solid white";
      }
      if (this.genders === 3) {
        document.querySelector(".bt-everyone").style.border = "2px solid red";
        document.querySelector(".bt-womans").style.border = "2px solid white";
        document.querySelector(".bt-mans").style.border = "2px solid white";
      }
      document.querySelector(".btContinue").disabled = false;
      document.querySelector(".btContinue").style.backgroundColor = "red";
    },
  },

  mounted() {
    this.genders = storeUsers.state.showGender;
    if (this.genders === 1) {
      document.querySelector(".btContinue").disabled = false;
      document.querySelector(".btContinue").style.backgroundColor = "red";
      document.querySelector(".bt-womans").style.border = "2px solid red";
    } else if (this.genders === 2) {
      document.querySelector(".btContinue").disabled = false;
      document.querySelector(".btContinue").style.backgroundColor = "red";
      document.querySelector(".bt-mans").style.border = "2px solid red";
    } else if (this.genders === 3) {
      document.querySelector(".btContinue").disabled = false;
      document.querySelector(".btContinue").style.backgroundColor = "red";
      document.querySelector(".bt-everyone").style.border = "2px solid red";
    } else {
      document.querySelector(".btContinue").disabled = true;
      document.querySelector(".btContinue").style.backgroundColor = "#382e41";
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
