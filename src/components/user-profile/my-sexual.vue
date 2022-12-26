<template>
  <div>
    <div class="mt-10">
      <h2 class="text-2xl text-white mb-2">My Sexual oritenation is</h2>
      <span class="text-slate-500">Select up to 3</span>
    </div>
    <div class="grid select-sexual mt-6 gap-4">
      <div
        v-for="(el, index) in listDataSexuals"
        :key="el + index"
        class="w-full rounded-xl p-4 bg-sexual"
      >
        <div class="flex content-center">
          <input
            class="w-6 h-6 mr-5 sexual"
            type="checkbox"
            :id="index"
            value="Straight"
            @click="checkFluency(index)"
          />
          <label class="text-base text-white" for="html">{{ el }}</label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import storeUsers from "@/stores/user-profile/store-user";
import storeCommon from "@/stores/common/store-common";

export default {
  name: "My-Sexual",
  setup() {
    return;
  },

  data() {
    return {
      sexuals: [],
    };
  },

  computed: {
    listDataSexuals() {
      return storeCommon.state.listDataSexuals;
    },
  },

  methods: {
    checkFluency(val) {
      // var checkedValue = document.getElementsByClassName("sexual")[val].value;

      storeUsers.commit("setSexuals", val);

      const lengthSexual = storeUsers.state.userProfile.sexuals.length;

      if (storeUsers.state.isCheckBox) {
        document.getElementById(val).checked = false;
      }
      if (lengthSexual === 3) {
        document.querySelector(".btContinue").disabled = false;
        document.querySelector(".btContinue").style.backgroundColor = "red";
      }
      console.log(lengthSexual);
    },
  },

  async created() {
    await storeCommon.dispatch("getListDataSexuals", {
      entityName: "sexuals",
      entityId: "en",
    });
  },
  mounted() {
    const lengthSexual = storeUsers.state.userProfile.sexuals.length;
    const dataSexuals = storeUsers.state.userProfile.sexuals;
    for (let index = 0; index < dataSexuals.length; index++) {
      const element = dataSexuals[index];
      document.getElementById(element).checked = true;
    }
    if (lengthSexual < 3) {
      document.querySelector(".btContinue").disabled = true;
      document.querySelector(".btContinue").style.backgroundColor = "#382e41";
    } else {
      document.querySelector(".btContinue").disabled = false;
      document.querySelector(".btContinue").style.backgroundColor = "red";
    }
  },
};
</script>

<style lang="css">
.bg-sexual {
  background-color: #05101b47;
}
</style>
