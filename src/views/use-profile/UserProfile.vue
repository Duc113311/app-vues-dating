<template>
  <div class="w-full h-full user-profile p-5 grid">
    <div>
      <div class="text-2xl text-white">
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
</template>

<script>
import MyPhotos from "../../components/user-profile/my-photos";
import MyInterests from "../../components/user-profile/my-interests";
import MySexual from "../../components/user-profile/my-sexual";
import AmSex from "../../components/user-profile/am-sex";
import YourName from "../../components/user-profile/your-name.vue";
import BirthDay from "../../components/user-profile/birth-day.vue";

import userProfiles from "@/stores/user-profile/store-user";
import TokenApps from "@/middleware/auth";

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
    };
  },
  methods: {
    async onClickContinue() {
      debugger;
      if (this.isNumber === 5) {
        const userId = TokenApps.getToken("userId");
        const dataUser = userProfiles.state.userProfile;
        dataUser.userId = userId;
        console.log(dataUser);
        await userProfiles.dispatch("postUserProfile", dataUser);
        await this.$router.push("/home");
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
