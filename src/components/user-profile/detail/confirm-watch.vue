<template>
  <div class="bg-confirm rounded-lg w-full">
    <div class="flex justify-center content-center items-center w-full h-full">
      <div>
        <div class="w- flex justify-center overflow-hidden">
          <div class="img-avatar-bd">
            <img src="@/assets/images/img-home.jpg" alt="" />
          </div>
        </div>

        <div class="flex justify-center content-center text-white mt-3">
          <h2 class="mr-2">You are sending Ngoc Trinh</h2>
          <img src="@/assets/img/ic_home_tab.svg" alt="" />
        </div>

        <div class="w-full mt-9 cursor-pointer">
          <button class="bg-red-400 text-white p-3 w-full rounded-lg">
            Confirm
          </button>
        </div>
      </div>
    </div>
    <!--  -->
  </div>
</template>

<script>
export default {
  name: "confirm-watch",
  setup() {
    return;
  },
  data() {
    return {};
  },
};
</script>

<style lang="css">
.bg-confirm {
  background-color: #434a5d;
}
.img-avatar-bd {
  padding: 7px;
  border: 3px solid #fc5c64;
  border-radius: 80px;
}
.img-avatar-bd img {
  width: 100px;
  height: 100px;
  border-radius: 50px;
}
</style>
