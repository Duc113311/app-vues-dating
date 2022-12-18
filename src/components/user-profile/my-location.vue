<template>
  <div class="text-center">
    <div class="flex justify-center items-center">
      <img
        src="@/assets/images/art_location.svg"
        width="100"
        height="100"
        alt=""
        srcset=""
      />
    </div>
    <div class="mt-10">
      <h2 class="text-2xl text-white">Enable Location</h2>
    </div>
    <div class="mt-6">
      You will need to enable your location order to use HeartLink
    </div>
  </div>
</template>

<script>
export default {
  name: "my-location",

  setup() {
    return {};
  },

  data() {
    return {
      txtFirstName: "",
    };
  },

  methods: {},

  mounted() {
    debugger;
  },
};
</script>

<style lang="css"></style>
