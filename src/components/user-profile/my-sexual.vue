<template>
  <div>
    <div class="mt-10">
      <h2 class="text-2xl text-white mb-2">My Sexual oritenation is</h2>
      <span class="text-slate-500">Select up to 3</span>
    </div>
    <div class="grid select-sexual mt-6 gap-4">
      <div class="w-full rounded-xl p-4 bg-sexual">
        <div class="flex content-center">
          <input
            class="w-6 h-6 mr-5 sexual"
            type="checkbox"
            id="cb-straight"
            name="fav_language"
            value="Straight"
            @click="checkFluency(0)"
          />
          <label class="text-base text-white" for="html">Straight</label>
        </div>
      </div>
      <div class="w-full rounded-xl p-4 bg-sexual">
        <div class="flex content-center">
          <input
            class="w-6 h-6 mr-5 sexual"
            type="checkbox"
            id="cb-gay"
            name="fav_language"
            value="Gay"
            @click="checkFluency(1)"
          />
          <label class="text-base text-white" for="html">Gay</label>
        </div>
      </div>
      <div class="w-full rounded-xl p-4 bg-sexual">
        <div class="flex content-center">
          <input
            class="w-6 h-6 mr-5 sexual"
            type="checkbox"
            id="cb-lesbian"
            name="fav_language"
            value="Lesbian"
            @click="checkFluency(2)"
          />
          <label class="text-base text-white" for="html">Lesbian</label>
        </div>
      </div>
      <div class="w-full rounded-xl p-4 bg-sexual">
        <div class="flex content-center">
          <input
            class="w-6 h-6 mr-5 sexual"
            type="checkbox"
            id="cb-bisexual"
            name="fav_language"
            value="Bisexual"
            @click="checkFluency(3)"
          />
          <label class="text-base text-white" for="html">Bisexual</label>
        </div>
      </div>
      <div class="w-full rounded-xl p-4 bg-sexual">
        <div class="flex content-center">
          <input
            class="w-6 h-6 mr-5 sexual"
            type="checkbox"
            id="cb-asexual"
            name="fav_language"
            value="Asexual"
            @click="checkFluency(4)"
          />
          <label class="text-base text-white" for="html">Asexual</label>
        </div>
      </div>
      <div class="w-full rounded-xl p-4 bg-sexual">
        <div class="flex content-center">
          <input
            class="w-6 h-6 mr-5 sexual"
            type="checkbox"
            id="cb-demisexual"
            name="fav_language"
            value="Demisexual"
            @click="checkFluency(5)"
          />
          <label class="text-base text-white" for="html">Demisexual</label>
        </div>
      </div>
      <div class="w-full rounded-xl p-4 bg-sexual">
        <div class="flex content-center">
          <input
            class="w-6 h-6 mr-5 sexual"
            type="checkbox"
            id="cb-pansexual"
            name="fav_language"
            value="Pansexual"
            @click="checkFluency(6)"
          />
          <label class="text-base text-white" for="html">Pansexual</label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import storeUsers from "@/stores/user-profile/store-user";

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

  methods: {
    checkFluency(val) {
      debugger;

      const lengthSexual = storeUsers.state.userProfile.sexuals.length;
      var checkedValue = document.getElementsByClassName("sexual")[val].value;

      console.log(checkedValue);
      this.sexuals.push(checkedValue);
      if (lengthSexual < 3) {
        storeUsers.commit("setSexuals", checkedValue);
      } else {
        document.getElementsByClassName("sexual")[val].checked = false;
      }

      debugger;
    },
  },
};
</script>

<style lang="css">
.bg-sexual {
  background-color: #05101b47;
}
</style>
