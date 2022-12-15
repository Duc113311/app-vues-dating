<template>
  <div>
    <div class="mt-10">
      <h2 class="text-2xl text-white mb-2">My interests are</h2>
      <span class="text-slate-500"
        >Let everyone know what you're passionate about, by adding it to your
        profile</span
      >
    </div>
    <div class="w-full mt-4 overflow-y-auto list-interest">
      <div>
        <template
          v-for="(item, index) in listDataInterests"
          :key="item + index"
        >
          <button
            @click="onSelectInterest(index)"
            :id="index"
            class="oftion-interests mr-3 mb-3 p-3 text-white"
            size="large"
          >
            {{ item }}
          </button>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import storeUsers from "@/stores/user-profile/store-user";
import storeCommon from "@/stores/common/store-common";

export default {
  name: "MyInterests",
  setup() {
    return;
  },
  data() {
    return {
      isActive: false,
    };
  },

  computed: {
    listDataInterests() {
      debugger;
      return storeCommon.state.listDataInterests;
    },
  },

  methods: {
    onSelectInterest(val) {
      debugger;

      // document.querySelector("oftion-interests")
      storeUsers.commit("setInterests", val);
      const interestsData = storeUsers.state.userProfile.interests;

      if (storeUsers.state.isActiveId) {
        debugger;
        document.getElementById(val).style.backgroundColor = "red";
        if (interestsData.length < 5) {
          debugger;

          document.querySelector(".btContinue").disabled = true;
          document.querySelector(".btContinue").style.backgroundColor =
            "#382e41";
        } else {
          document.querySelector(".btContinue").disabled = false;
          document.querySelector(".btContinue").style.backgroundColor = "red";
        }
      } else {
        debugger;

        document.getElementById(val).style.backgroundColor = "#382E41";
        if (interestsData.length < 5) {
          document.querySelector(".btContinue").disabled = true;
          document.querySelector(".btContinue").style.backgroundColor =
            "#382e41";
        }
      }
    },
  },

  created() {
    debugger;
    storeCommon.dispatch("getListDataInterests", {
      entityName: "interests",
      entityId: "en",
    });
  },

  mounted() {
    const interestsData = storeUsers.state.userProfile.interests;

    for (let index = 0; index < interestsData.length; index++) {
      const element = interestsData[index];
      debugger;
      document.getElementById(element).style.backgroundColor = "red";
    }
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

.list-interest {
  height: calc(100vh - 370px);
}
.list-interest::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.list-interest {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
