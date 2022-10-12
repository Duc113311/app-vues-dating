<template>
  <div class="w-full h-full home-page p-5 overflow-hidden">
    <template>
      <div class=" " :style="cssProps" />
    </template>
    <img class="like-pointer" src="../../assets/img/bt_like.svg" />
    <img class="nope-pointer" src="../../assets/img/bt_back.svg" />
    <img class="super-pointer" src="../../assets/img/bt_super_like.svg" />
    <img class="rewind-pointer" ssrc="../../assets/img/bt_boost.svg" />
  </div>
</template>

<script>
export default {
  name: "Test-tinder",
  setup() {
    return;
  },

  data() {
    return {
      queue: [],
      offset: 0,
      history: [],
      cssProps: {
        backgroundImage: `url(${require("../../assets/images/img-home1.jpg")})`,
      },
    };
  },
};
</script>

<style lang="css">
.home-page {
  background-color: #382e41;
}
</style>
