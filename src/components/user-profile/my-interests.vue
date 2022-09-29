<template>
  <div>
    <div class="mt-10">
      <h2 class="text-2xl text-white mb-2">My interests are</h2>
      <span class="text-slate-500"
        >Let everyone know what you're passionate about, by adding it to your
        profile</span
      >
    </div>
    <div class="w-full mt-4">
      <div>
        <el-button
          v-for="item in insterests"
          :key="item.index"
          class="oftion-interests mr-3 mb-3 p-5 text-white"
          size="large"
          >{{ item.name }}</el-button
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyInterests",
  setup() {
    return;
  },
  data() {
    return {
      insterests: [
        {
          id: 1,
          name: "Horror movie",
        },
        {
          id: 2,
          name: "Free diving",
        },
        {
          id: 3,
          name: "Swimming",
        },
        {
          id: 4,
          name: "Try new things",
        },
        {
          id: 5,
          name: "Vlogging",
        },
        {
          id: 6,
          name: "Reading",
        },
        {
          id: 7,
          name: "Ice Cream",
        },
        {
          id: 8,
          name: "Music",
        },
        {
          id: 8,
          name: "Fashion",
        },
        {
          id: 8,
          name: "Video game",
        },
        {
          id: 8,
          name: "Traveling",
        },
        {
          id: 8,
          name: "Art",
        },
        {
          id: 8,
          name: "Friends",
        },
        {
          id: 8,
          name: "Television",
        },
        {
          id: 8,
          name: "Volleyball",
        },
        {
          id: 8,
          name: "Riding",
        },
        {
          id: 8,
          name: "Football",
        },
        {
          id: 8,
          name: "Soccer",
        },
        {
          id: 8,
          name: "Sports",
        },
      ],
    };
  },

  methods: {},
};
</script>

<style lang="css">
.oftion-interests:hover {
  background-color: #5b566b;
  color: white;
}
</style>
