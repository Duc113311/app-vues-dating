<template>
  <!-- Preview profile -->
  <div class="w-full h-full p-2">
    <div
      class="w-full body-preview overflow-hidden relative rounded-lg"
      :style="[
        isShowImage
          ? `background-image: url('${urlImage}');height:84%;backgroundPosition: center`
          : `background-image: url('${urlImage}');height:94%;backgroundPosition: inherit`,
      ]"
    >
      <div class="avatar-img w-full">
        <!-- Title click -->
        <div class="flex justify-center content-center p-0.5 border-solid mt-3">
          <!-- <button
            v-for="data in btUrlImage"
            :key="data.id"
            class="bt-img p-0.5 rounded-lg mr-0.5"
            @click="onClickNextImage(data)"
          ></button> -->
          <button
            class="bt-img p-0.5 rounded-lg mr-0.5"
            @click="onClickNextImage(data)"
          ></button>
        </div>
        <div class="w-full p-2 title-page-preview absolute bottom-0 text-white">
          <div class="w-full title-boy mb-4">
            <h2 class="text-2xl">{{ listUserData.firstName }}</h2>
            <div class="w-full">
              <span
                v-for="interest in listUserData.interest"
                :key="interest.index"
                class="p-3"
                >{{ interest.name }}</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Preview-profile",
  setup() {
    const urlImage = require("@/assets/images/img-home1.jpg");
    debugger;
    return {
      urlImage,
    };
  },

  data() {
    return {
      listUserData: {
        firstName: "Lee min ho",
        interest: [
          {
            id: 1,
            name: "Horror movie",
          },
          {
            id: 2,
            name: "Swimming",
          },
          {
            id: 3,
            name: "Reading",
          },
        ],
      },
    };
  },
};
</script>

<style lang="css">
.body-preview {
  background-repeat: no-repeat;
  background-size: cover;
}

.bt-img {
  background-color: white;
  width: 70px;
}

.title-page-preview {
  height: 18%;
  background-color: #181c274f;
  background-image: linear-gradient(to top, #1e23334a, #230f1f7d);
  background-attachment: scroll;
}
</style>
