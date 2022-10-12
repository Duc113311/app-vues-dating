<template>
  <div class="w-full h-full home-page p-5 overflow-hidden">
    <!-- Trang chủ -->
    <div
      class="flex justify-center content-center items-center text-red-400 title-logo"
    >
      <img src="../../assets/img/ic_home_tab.svg" class="w-5 mr-1" alt="" />
      <span class="text-lg font-semibold">dating</span>
    </div>

    <div
      class="w-full body-page overflow-hidden relative rounded-lg"
      :style="cssProps"
    >
      <div class="avatar-img w-full">
        <!-- Title click -->
        <div class="flex justify-center content-center p-0.5 border-solid mt-2">
          <button class="bt-img p-0.5 rounded-lg mr-0.5"></button>
          <button class="bt-img p-0.5 rounded-lg mr-0.5"></button>
          <button class="bt-img p-0.5 rounded-lg mr-0.5"></button>
        </div>
        <div class="w-full p-2 title-page absolute bottom-0">
          <div class="grid w-full title-boy mb-4">
            <div class="w-70 text-white">
              <h3 class="text-2xl font-semibold">Ngọc Trinh, 25</h3>
              <span>Tell me about yourself</span><br />
              <span>location: 2km away</span>
            </div>
            <div class="w-30">
              <img
                class="cursor-pointer"
                src="../../assets/img/bt_like_count.svg"
                alt=""
                srcset=""
              />
            </div>
          </div>
          <div
            class="w-full grid cursor-pointer bt-option flex justify-center text-center content-center cursor-pointer"
          >
            <img src="../../assets/img/bt_back.svg" alt="" srcset="" />
            <img src="../../assets/img/bt_nope.svg" alt="" srcset="" />
            <img src="../../assets/img/bt_super_like.svg" alt="" srcset="" />
            <img src="../../assets/img/bt_like.svg" alt="" srcset="" />
            <img src="../../assets/img/bt_boost.svg" alt="" srcset="" />
          </div>
        </div>
      </div>
    </div>

    <div
      class="w-full footer-body flex justify-center content-center text-center cursor-pointer"
    >
      <div>
        <img src="../../assets/img/ic_home_tab.svg" alt="" />
      </div>
      <div>
        <img src="../../assets/img/ic_explore_tab.svg" alt="" />
      </div>
      <div>
        <img src="../../assets/img/ic_message_tab.svg" alt="" />
      </div>
      <div>
        <img src="../../assets/img/ic_profile_tab.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  setup() {
    return;
  },

  data() {
    return {
      cssProps: {
        backgroundImage: `url(${require("../../assets/images/img-home1.jpg")})`,
      },
    };
  },
  methods: {},

  mounted() {},
};
</script>

<style lang="css">
.home-page {
  background-color: #382e41;
}

.title-logo {
  height: 8%;
}

.body-page {
  height: 84%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.title-boy {
  grid-template-columns: 5fr 1fr;
}

.bt-img {
  background-color: white;
  width: 70px;
}

.bt-option {
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: 10px;
}

.title-page {
  background-color: #181c274f;
  background-image: linear-gradient(to top, #1e23334a, #230f1f7d);
  background-attachment: scroll;
}

.footer-body {
  height: calc(100% - 91%);
  justify-content: center;
  gap: 70px;
  align-items: center;
  border-top: 1px solid #373e50;
  margin-top: 10px;
}
</style>
