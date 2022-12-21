<template>
  <div class="w-full h-full user-profile p-5 grid">
    <div>
      <div v-if="isNumber !== 7" class="text-2xl text-white">
        <i class="fas fa-chevron-left" @click="onBackForm()"></i>
      </div>
      <div v-if="isNumber === 0">
        <YourName :firstName="userData.firstName"> </YourName>
      </div>
      <div v-if="isNumber === 1">
        <BirthDay :birthday="userData.birthday"></BirthDay>
      </div>
      <div v-if="isNumber === 2">
        <AmSex :gender="userData.gender"></AmSex>
      </div>
      <div v-if="isNumber === 3">
        <ShowGender></ShowGender>
      </div>
      <div v-if="isNumber === 4">
        <MyInterests></MyInterests>
      </div>
      <div v-if="isNumber === 5">
        <MySexual></MySexual>
      </div>
      <div v-if="isNumber === 6">
        <MyPhotos :isShowHeader="isShowHeader"></MyPhotos>
      </div>
      <div
        class="flex h-full justify-center items-center"
        v-if="isNumber === 7"
      >
        <MyLocation></MyLocation>
      </div>
    </div>
    <!--  -->
    <div v-if="isNumber !== 7">
      <div class="flex justify-center mt-3">
        <button
          id="btContinue"
          class="text-base cursor-pointer btContinue border-collapse text-white w-72 rounded-lg p-5 color-button"
          @click="onClickContinue()"
        >
          Continue
        </button>
      </div>
    </div>
  </div>

  <DialogAvoidSomeone v-if="isShowAvoid" @onHideWellcome="onHideWellcome">
  </DialogAvoidSomeone>
</template>

<script>
import ShowGender from "../../components/user-profile/show-gender";
import MyLocation from "../../components/user-profile/my-location";
import DialogAvoidSomeone from "../../components/common/wellcome/dialog-avoid-someone";
import MyPhotos from "../../components/user-profile/my-photos";
import MyInterests from "../../components/user-profile/my-interests";
import MySexual from "../../components/user-profile/my-sexual";
import AmSex from "../../components/user-profile/am-sex";
import YourName from "../../components/user-profile/your-name.vue";
import BirthDay from "../../components/user-profile/birth-day.vue";

import userProfiles from "@/stores/user-profile/store-user";
import TokenApps from "@/middleware/auth";
import { analytics, logEvent } from "../../configs/firebase.js";

export default {
  name: "UserProfile",
  components: {
    ShowGender,
    MyLocation,
    DialogAvoidSomeone,
    MyPhotos,
    MyInterests,
    MySexual,
    AmSex,
    YourName,
    BirthDay,
  },
  setup() {
    const userData = {
      userId: "",
      providerId: "",
      phoneNumber: "",
      firstName: "",
      birthday: "",
      gender: 0,
    };
    return {
      userData,
    };
  },

  data() {
    return {
      isNumber: 0,
      isShowHeader: true,
      isShowAvoid: false,
    };
  },
  methods: {
    async onHideWellcome(val) {
      this.isShowAvoid = val;
      debugger;
      await this.onViewHomeRouter;
    },
    async onViewHomeRouter() {
      debugger;

      await this.$router.push("/home");
    },
    async onClickContinue() {
      debugger;

      if (this.isNumber === 7) {
        this.isShowAvoid = true;

        debugger;
        const userId = TokenApps.getAccessToken("userId");
        const dataUser = userProfiles.state.userProfile;
        dataUser.userId = userId;
        console.log(dataUser);
        logEvent(analytics, "btn_user_create_infor", dataUser);
        await userProfiles.dispatch("postUserProfile", dataUser);
      } else {
        this.isNumber = this.isNumber + 1;
      }
    },

    /**
     * Tạo Token sau khi login thành công
     * @param {*} param0
     * @param {*} param1
     */
    onBackForm() {
      debugger;
      if (this.isNumber !== 0) {
        this.isNumber = this.isNumber - 1;
      } else {
        this.$router.go(-1);
      }
    },
  },
  mounted() {
    document.querySelector(".btContinue").disabled = true;
    document.querySelector(".btContinue").style.backgroundColor = "#382e41";
  },
};
</script>

<style lang="css">
.user-profile {
  background-color: #382e41;
  grid-template-rows: 25fr 4fr;
}

.btContinue {
  border: 1px solid #5a4b67;
}
</style>
