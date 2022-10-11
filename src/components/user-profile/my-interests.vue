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
        <template v-for="(item, key) in insterests" :key="item.id">
          <button
            @click="onSelectInterest(item, key)"
            class="oftion-interests mr-3 mb-3 p-3 text-white"
            size="large"
          >
            {{ item.name }}
          </button>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import storeUsers from "@/stores/user-profile/store-user";

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

      isActive: false,
    };
  },

  methods: {
    onSelectInterest(val, key) {
      debugger;

      // document.querySelector("oftion-interests")
      storeUsers.commit("setInterests", val.name);
      if (storeUsers.state.isActiveId) {
        document.getElementsByClassName("oftion-interests")[
          key
        ].style.backgroundColor = "red";
        const interestsData = storeUsers.state.userProfile.interests;
        if (interestsData.length < 5) {
          document.querySelector(".btContinue").disabled = true;
          document.querySelector(".btContinue").style.backgroundColor =
            "#382e41";
        } else {
          document.querySelector(".btContinue").disabled = false;
          document.querySelector(".btContinue").style.backgroundColor = "red";
        }
      } else {
        document.getElementsByClassName("oftion-interests")[
          key
        ].style.backgroundColor = "#382E41";
      }
    },
  },

  mounted() {
    const interestsData = storeUsers.state.userProfile.interests;
    if (interestsData.length < 5) {
      document.querySelector(".btContinue").disabled = true;
      document.querySelector(".btContinue").style.backgroundColor = "#382e41";
    } else {
      document.querySelector(".btContinue").disabled = false;
      document.querySelector(".btContinue").style.backgroundColor = "red";
    }
  },
};
</script>

<style lang="css">
.oftion-interests:hover {
  background-color: #5b566b;
  color: white;
  border: 1px solid white;
}

.oftion-interests {
  border: 1px solid white;
  border-radius: 8px;
}
.bg-active {
  background-color: red;
}
</style>
