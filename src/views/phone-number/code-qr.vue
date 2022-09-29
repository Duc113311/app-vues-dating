<template>
  <div class="w-full h-full user-profile p-5 grid">
    <div>
      <div class="text-3xl mb-6">
        <i class="fas fa-chevron-left" @click="onBackForm()"></i>
      </div>
      <div v-if="isShowCode === 0">
        <MyNumber></MyNumber>
      </div>
      <div v-if="isShowCode === 1">
        <MyCode></MyCode>
      </div>
    </div>

    <div>
      <div class="flex justify-center mt-3">
        <el-button
          type="danger"
          class="text-base text-white w-72 rounded-lg p-5 color-button"
          @click="onClickContinueCode()"
          >Continue</el-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import MyNumber from "../../components/login-phone/my-number";
import MyCode from "@/components/login-phone/my-code.vue";
export default {
  components: { MyNumber, MyCode },
  name: "CodeQR",

  setup() {
    return;
  },
  data() {
    return {
      isShowCode: 0,
    };
  },

  methods: {
    onBackForm() {
      this.$router.go(-1);
    },

    onClickContinueCode() {
      this.isShowCode = this.isShowCode + 1;
    },
  },
};
</script>

<style lang="css">
.user-profile {
  background-color: #382e41;
  grid-template-rows: 25fr 4fr;
}
.text-color {
  color: #6587a5;
}
</style>
