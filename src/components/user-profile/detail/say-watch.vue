<template>
  <div class="w-full relative image-say" :style="imageSay">
    <div
      class="grid grid-send"
      :class="[isShowConfirm ? 'grid-send' : 'grid-confirm']"
    >
      <div class="w-full mt-4">
        <img src="../../../assets/img/ic_closed.svg" alt="" srcset="" />
      </div>
      <div class="w-full">
        <div class="flex justify-center content-center p-0.5 border-solid mt-3">
          <button class="bt-img p-0.5 rounded-lg mr-0.5"></button>
          <button class="bt-img p-0.5 rounded-lg mr-0.5"></button>
          <button class="bt-img p-0.5 rounded-lg mr-0.5"></button>
        </div>
      </div>

      <div class="w-full text-center flex justify-center content-center h-full">
        <div class="text-infor">
          <h3 class="text-4xl">THEY</h3>
          <h3 class="text-6xl">LIKE YOU</h3>
          <h3 class="text-7xl">TOO!</h3>
        </div>
      </div>

      <div v-show="isShowConfirm" class="w-full">
        <div class="w-full flex justify-center">
          <div class="flex justify-center dad-input">
            <input
              type="text"
              v-model="txtValueMes"
              placeholder="Say something nice"
              class="text-send text-red-600"
              id=""
            />
            <button class="bt-send" @click="onSendMes">SEND</button>
          </div>
        </div>

        <div class="flex justify-center gap-2 content-center mt-3">
          <div class="style-icon">😉</div>
          <div class="style-icon">👋</div>
          <div class="style-icon flex justify-center">
            <img src="@/assets/img/ic_home_tab.svg" alt="" srcset="" />
          </div>
          <div class="style-icon">😍</div>
        </div>
      </div>
      <confirm-watch v-show="!isShowConfirm"></confirm-watch>
    </div>
  </div>
</template>

<script>
import confirmWatch from "./confirm-watch.vue";
export default {
  components: { confirmWatch },
  name: "say-watch",
  setup() {
    return;
  },

  data() {
    return {
      txtValueMes: "",
      imageSay: {
        height: `100%`,
        backgroundPosition: "center",
        backgroundImage: `url(${require("../../../assets/images/img-home2.jpg")})`,
      },
      isShowConfirm: true,
    };
  },

  methods: {
    onSendMes() {
      this.isShowConfirm = false;
    },
  },
};
</script>

<style lang="css">
.image-say {
  background-repeat: no-repeat;
  background-size: cover;
  padding: 10px;
}
.grid-send {
  grid-template-rows: 1fr 0fr 18fr 3fr;
}
.grid-confirm {
  grid-template-rows: 1fr 0fr 12fr 9fr;
}

.text-infor {
  margin-top: 90px;
  font-style: italic;
  font-weight: bold;
  text-align: justify;
  color: yellow;
}

.dad-input {
  width: 90%;
  border-radius: 24px;
  overflow: hidden;
}
.text-send {
  width: 80%;
  padding: 9px 22px;
}
.bt-send {
  width: 20%;
  background-color: white;
  color: red;
  font-weight: bold;
}
.style-icon {
  background-color: #464a53;
  width: 79px;
  align-items: center;
  text-align: center;
  border-radius: 10px;
  padding: 7px;
  font-size: 23px;
}
</style>
