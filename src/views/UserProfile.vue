<template>
  <div class="w-full h-full user-profile p-5 grid">
    <div>
      <div class="text-3xl">
        <i class="fas fa-chevron-left" @click="onBackForm()"></i>
      </div>
      <div v-if="isNumber === 0">
        <YourName> </YourName>
      </div>
      <div v-if="isNumber === 1">
        <BirthDay></BirthDay>
      </div>
      <div v-if="isNumber === 2">
        <AmSex></AmSex>
      </div>
      <div v-if="isNumber === 3">
        <MySexual></MySexual>
      </div>
      <div v-if="isNumber === 4">
        <MyInterests></MyInterests>
      </div>
      <div v-if="isNumber === 5">
        <MyPhotos></MyPhotos>
      </div>
    </div>
    <!--  -->
    <div>
      <div class="flex justify-center">
        <input
          class="w-6 h-6 mr-2"
          type="radio"
          id="html"
          name="fav_language"
          value="HTML"
        />
        <label class="text-base text-white" for="html"
          >Show my gender on my profile</label
        ><br />
      </div>
      <div class="flex justify-center mt-3">
        <el-button
          type="danger"
          class="text-base text-white w-72 rounded-lg p-5 color-button"
          @click="onClickContinue()"
          >Continue</el-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import MyPhotos from "../components/user-profile/my-photos";
import MyInterests from "../components/user-profile/my-interests";
import MySexual from "../components/user-profile/my-sexual";
import AmSex from "../components/user-profile/am-sex";
import YourName from "../components/user-profile/your-name.vue";
import BirthDay from "../components/user-profile/birth-day.vue";
export default {
  name: "UserProfile",
  components: {
    MyPhotos,
    MyInterests,
    MySexual,
    AmSex,
    YourName,
    BirthDay,
  },
  setup() {
    return;
  },

  data() {
    return {
      isNumber: 0,
    };
  },
  methods: {
    onClickContinue() {
      this.isNumber = this.isNumber + 1;
    },

    /**
     * Tạo Token sau khi login thành công
     * @param {*} param0
     * @param {*} param1
     */
    onBackForm() {
      this.isNumber = this.isNumber - 1;
    },
  },
};
</script>

<style lang="css">
.user-profile {
  background-color: #382e41;
  grid-template-rows: 25fr 4fr;
}
</style>
