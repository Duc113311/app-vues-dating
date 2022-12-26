<template>
  <div
    class="w-full h-full home-page overflow-hidden p-5"
    v-loading="loading"
    :style="[isShowImage ? '' : isShowScroll]"
    v-show="isShowPageSay"
  >
    <!-- Trang chủ -->

    <Header></Header>

    <div class="w-full body-page-home tinder">
      <div class="tinder--cards w-full h-full">
        <div
          class="tinder--card"
          v-for="(item, index) in listUserData"
          :key="item.userId + index"
        >
          <div
            class="w-full body-page overflow-hidden relative rounded-lg"
            :id="item.userId"
            :style="[
              isShowImage
                ? `background-image: url('${item.avatars[0].urlName}');height:100%;backgroundPosition: center`
                : `background-image: url('${item.avatars[0].urlName}');height:45%;backgroundPosition: inherit`,
            ]"
          >
            <div class="avatar-img w-full overflow-hidden">
              <!-- Title click -->
              <div
                class="flex justify-center content-center p-0.5 border-solid mt-3"
              >
                <button
                  v-for="data in item.avatars"
                  :key="data.id"
                  class="bt-img p-0.5 rounded-lg mr-0.5"
                  @click="onClickNextImage(data)"
                ></button>
              </div>
              <div
                class="w-full p-2 title-page absolute bottom-0"
                v-show="isShowImage"
              >
                <div class="grid w-full title-boy mb-4">
                  <div class="w-70 text-white">
                    <div class="flex">
                      <h3 class="text-2xl font-semibold mr-2">
                        {{ item.firstName }}
                      </h3>
                      <img
                        src="../../assets/img/ic_infor.svg"
                        width="30"
                        @click="onDetailInfor()"
                        class="cursor-pointer"
                        srcset=""
                      />
                    </div>
                    <span>{{ item.about }}</span
                    ><br />
                    <div class="flex">
                      <img
                        class="cursor-pointer"
                        src="../../assets/img/ic_location.svg"
                        alt=""
                        srcset=""
                      />
                      <span> 2km away</span>
                    </div>
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
              </div>
              <div
                class="absolute bottom-0 left-0 right-0 items-center w-full mb-3 grid cursor-pointer bt-option flex justify-center text-center content-center cursor-pointer"
              >
                <img
                  src="../../assets/img/bt_back.svg"
                  @click="onBackImage()"
                />
                <img
                  src="../../assets/img/bt_nope.svg"
                  @click="onNopeImage()"
                />
                <img src="../../assets/img/bt_super_like.svg" />
                <img
                  src="../../assets/img/bt_like.svg"
                  @click="onWatchSay(false)"
                />
                <img src="../../assets/img/bt_boost.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Footer v-show="isShowImage"></Footer>
  </div>

  <SayWatch @onWatchSay="onWatchSay" v-show="!isShowPageSay"></SayWatch>
</template>

<script>
import Hammer from "hammerjs";

import Footer from "../../components/common/footer";
import Header from "../../components/common/header";
import storeUsers from "@/stores/user-profile/store-user";
import SayWatch from "../../components/user-profile/detail/say-watch";
export default {
  components: {
    Footer,
    Header,
    SayWatch,
  },
  name: "HomePage",
  setup() {
    const urls = require("@/assets/images/img-home1.jpg");

    return {
      urls,
    };
  },

  data() {
    return {
      listUsers: [
        {
          id: 1,
          name: "Demo card 1",
          url: "https://placeimg.com/600/300/people",
        },
        {
          id: 2,
          name: "Demo card 2",
          url: "https://placeimg.com/600/300/animals",
        },
        {
          id: 3,
          name: "Demo card 3",
          url: "https://placeimg.com/600/300/nature",
        },
        {
          id: 4,
          name: "Demo card 4",
          url: "https://placeimg.com/600/300/tech",
        },
        {
          id: 5,
          name: "Demo card 5",
          url: "https://placeimg.com/600/300/arch",
        },
      ],
      cssProps: {
        height: `84%`,
        backgroundPosition: "center",
        backgroundImage: `url(${this.urls})`,
      },
      cssPropsAny: {
        height: `45%`,
        backgroundPosition: "inherit",
        backgroundImage: `url(${require("../../assets/images/img-home1.jpg")})`,
      },
      isShowScroll: {
        overflow: "scroll",
      },
      isShowPageSay: true,
      isShowImage: true,
      urlImageObject: null,
      numberNext: 0,
      loading: true,
    };
  },

  computed: {
    listUserData() {
      debugger;
      console.log(storeUsers.state.listUserProfiles);
      return storeUsers.state.listUserProfiles;
    },

    urlImage() {
      return storeUsers.state.urlImageData;
    },

    btUrlImage() {
      const imageLength = storeUsers.state.numberImage;
      return imageLength;
    },

    listSexuals() {
      return storeUsers.state.listSexuals;
    },

    listInterests() {
      return storeUsers.state.listInterests;
    },
  },
  methods: {
    onDetailInfor() {
      this.isShowImage = false;
    },

    onCancelDetail() {
      this.isShowImage = true;
    },

    onWatchSay(val) {
      this.isShowPageSay = val;
    },

    onClickNextImage(val) {
      storeUsers.commit("setUrlImageData", val.urlName);
    },

    onNopeImage() {
      this.numberNext = this.numberNext + 1;
      storeUsers.commit("setNextUserProfile", this.numberNext);
    },

    onBackImage() {
      this.numberNext = this.numberNext - 1;
      storeUsers.commit("setNextUserProfile", this.numberNext);
    },
  },
  created() {
    const param = {
      userId: localStorage.userId,
      page: 1,
      pageNumber: 50,
    };
    storeUsers.dispatch("getListUserProfiles", param);
  },
  beforeMount() {
    debugger;
  },

  beforeUpdate() {
    debugger;
    var tinderContainer = document.querySelector(".tinder");
    var allCards = document.querySelectorAll(".tinder--card");

    allCards.forEach(function (el) {
      var hammertime = new Hammer(el);

      hammertime.on("pan", function (event) {
        el.classList.add("moving");
        console.log(event);
      });

      hammertime.on("pan", function (event) {
        if (event.deltaX === 0) return;
        if (event.center.x === 0 && event.center.y === 0) return;

        tinderContainer.classList.toggle("tinder_love", event.deltaX > 0);
        tinderContainer.classList.toggle("tinder_nope", event.deltaX < 0);

        var xMulti = event.deltaX * 0.03;
        var yMulti = event.deltaY / 80;
        var rotate = xMulti * yMulti;

        event.target.style.transform =
          "translate(" +
          event.deltaX +
          "px, " +
          event.deltaY +
          "px) rotate(" +
          rotate +
          "deg)";
      });

      hammertime.on("panend", function (event) {
        el.classList.remove("moving");
        tinderContainer.classList.remove("tinder_love");
        tinderContainer.classList.remove("tinder_nope");

        var moveOutWidth = document.body.clientWidth;
        var keep =
          Math.abs(event.deltaX) < 80 || Math.abs(event.velocityX) < 0.5;

        event.target.classList.toggle("removed", !keep);

        if (keep) {
          event.target.style.transform = "";
        } else {
          var endX = Math.max(
            Math.abs(event.velocityX) * moveOutWidth,
            moveOutWidth
          );
          var toX = event.deltaX > 0 ? endX : -endX;
          var endY = Math.abs(event.velocityY) * moveOutWidth;
          var toY = event.deltaY > 0 ? endY : -endY;
          var xMulti = event.deltaX * 0.03;
          var yMulti = event.deltaY / 80;
          var rotate = xMulti * yMulti;

          event.target.style.transform =
            "translate(" +
            toX +
            "px, " +
            (toY + event.deltaY) +
            "px) rotate(" +
            rotate +
            "deg)";
        }
      });
    });
  },

  mounted() {
    debugger;
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  },
};
</script>

<style lang="css">
.home-page {
  background-color: #382e41;
}
.home-page::-webkit-scrollbar {
  display: none;
}

.body-page-home {
  height: 84%;
  border: 1px solid white;
}

.title-logo {
  height: 8%;
}

.body-page {
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
  grid-template-columns: auto auto auto auto auto;
  gap: 35px;
}

.title-page {
  background-color: #181c274f;
  background-image: linear-gradient(to top, #1e23334a, #230f1f7d);
  background-attachment: scroll;
  height: 24%;
}

.footer-body {
  height: calc(100% - 91%);
  justify-content: center;
  gap: 70px;
  align-items: center;
  border-top: 1px solid #373e50;
  margin-top: 10px;
}
.close-infor {
  position: absolute;
  top: -25px;
  right: 13px;
}
.like-count {
  position: absolute;
  top: 80px;
  right: 9px;
}

.title-body {
  border-bottom: 1px solid #373e50;
}

.bt-about {
  border: 1px solid white;
}

.grid-temlp {
  grid-template-columns: 1fr 1fr 1fr;
}

.grid-anthem {
  grid-template-columns: 3fr 1fr;
}

.tinder {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  position: relative;
  opacity: 1;
  transition: opacity 0.1s ease-in-out;
}

.tinder--cards {
  flex-grow: 1;
  text-align: center;
  display: flex;
  justify-content: center;
  z-index: 1;
}
.tinder--card {
  display: inline-block;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  overflow: hidden;
  position: absolute;
  will-change: transform;
  transition: all 0.3s ease-in-out;
  cursor: -webkit-grab;
  cursor: -moz-grab;
  cursor: grab;
}
</style>
