<template>
  <div class="gd-location items-center h-full">
    <div class="text-center h-full el-location">
      <div class="flex justify-center items-center">
        <img
          src="@/assets/images/art_location.svg"
          width="180"
          height="180"
          alt=""
          srcset=""
        />
      </div>
      <div class="mt-10">
        <h2 class="text-xl text-white">Enable Location</h2>
      </div>
      <div class="mt-6 text-base text-slate-500">
        You will need to enable your location order to use HeartLinks
      </div>
    </div>

    <div>
      <div class="angle-up">
        <div class="text-2xl mb-5 text-white flex justify-center items-center">
          <i class="fas fa-angle-up" @click="onAngleUp()"></i>
        </div>
      </div>

      <BtLocation></BtLocation>

      <div
        class="w-full text-base text-white mt-5 angle-down pl-10 pr-10 flex justify-center items-center"
        @click="onTellMore()"
      >
        Tell me more
        <i class="text-2xl ml-3 fas fa-angle-down" @click="onAngleDown()"></i>
      </div>
    </div>
    <div v-show="isShowMeet" class="meet-people h-full">
      <div class="flex items-center h-full">
        <div class="text-center">
          <div class="flex justify-center items-center">
            <img
              src="@/assets/images/art_meet_people.svg"
              width="180"
              height="180"
              alt=""
              srcset=""
            />
          </div>
          <div class="mt-10">
            <h2 class="text-xl text-white">MEET PEOPLE NEARBY</h2>
          </div>
          <div class="mt-6 text-base text-slate-500">
            You location will be used to show potential matches near you.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BtLocation from "../common/button/bt-location";
export default {
  components: { BtLocation },
  name: "my-location",

  setup() {
    return {};
  },

  data() {
    return {
      txtFirstName: "",
      isShowMeet: false,
    };
  },

  methods: {
    onTellMore() {
      debugger;
      this.isShowMeet = true;
      document.getElementsByClassName("el-location")[0].style.display = "none";
      document.getElementsByClassName("angle-up")[0].style.display = "block";
      document.getElementsByClassName("angle-down")[0].style.display = "none";
      document.getElementsByClassName("meet-people")[0].style.display = "block";
    },

    onAngleUp() {
      this.isShowMeet = false;
      document.getElementsByClassName("meet-people")[0].style.display = "block";
    },
  },

  mounted() {
    debugger;
    document.getElementsByClassName("angle-up")[0].style.display = "none";
  },
};
</script>

<style lang="css"></style>
