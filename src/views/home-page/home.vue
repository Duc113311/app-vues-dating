<template>
  <div
    class="w-full h-full home-page overflow-hidden p-5"
    v-loading="loading"
    :style="[isShowImage ? '' : isShowScroll]"
    v-show="isShowPageSay"
  >
    <!-- Trang chủ -->

    <Header></Header>

    <div
      class="w-full body-page overflow-hidden relative rounded-lg"
      :style="[
        isShowImage
          ? `background-image: url('${urlImage}');height:84%;backgroundPosition: center`
          : `background-image: url('${urlImage}');height:45%;backgroundPosition: inherit`,
      ]"
    >
      <div class="avatar-img w-full">
        <!-- Title click -->
        <div class="flex justify-center content-center p-0.5 border-solid mt-3">
          <button
            v-for="data in btUrlImage"
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
                  {{ listUserData.firstName }}
                </h3>
                <img
                  src="../../assets/img/ic_infor.svg"
                  width="30"
                  @click="onDetailInfor()"
                  class="cursor-pointer"
                  srcset=""
                />
              </div>
              <span>Tell me about yourself</span><br />
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
          <div
            class="w-full grid cursor-pointer bt-option flex justify-center text-center content-center cursor-pointer"
          >
            <img src="../../assets/img/bt_back.svg" @click="onBackImage()" />
            <img src="../../assets/img/bt_nope.svg" @click="onNopeImage()" />
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
    <div class="relative w-full" v-show="!isShowImage">
      <div class="close-infor">
        <img src="../../assets/img/bt_close_infor.svg" alt="" srcset="" />
      </div>
      <div class="w-full p-3 title-body">
        <div class="grid w-full title-boy mb-4">
          <div class="w-70 text-white">
            <div class="flex mb-2">
              <h3 class="text-2xl font-semibold mr-2">
                {{ listUserData.firstName }}
              </h3>
              <img
                src="../../assets/img/ic_infor.svg"
                width="30"
                @click="onDetailInfor()"
                class="cursor-pointer"
                srcset=""
              />
            </div>
            <span>Tell me about yourself</span><br />
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
          <div class="w-30 like-count">
            <img
              class="cursor-pointer"
              src="../../assets/img/bt_like_count.svg"
              alt=""
              srcset=""
            />
          </div>
        </div>
      </div>
      <div class="w-full text-white title-body p-3">
        <h3 class="text-slate-500 mb-2">About me</h3>
        <h3>
          Gets hungry easily <br />
          Sleeps late and replies late
        </h3>
        <div class="flex content-center gap-2 mt-2">
          <button
            v-for="sexual in listSexuals"
            :key="sexual.index"
            class="p-2 rounded-lg bt-about"
          >
            {{ sexual }}
          </button>
        </div>
      </div>
      <div class="w-full text-white title-body p-3">
        <h3 class="text-slate-500 mb-3">Interests</h3>

        <div class="grid-temlp content-center">
          <button
            v-for="interest in listInterests"
            :key="interest.index"
            class="p-2 rounded-lg bt-about mr-2 mb-2"
          >
            {{ interest }}
          </button>
        </div>
      </div>
      <div class="w-full text-white title-body p-3">
        <h3 class="text-slate-500 mb-3">My Anthem</h3>

        <div class="grid grid-anthem content-center gap-2">
          <div class="title-music">
            <h2>All To Well (Taylor's Version)</h2>
            <div class="flex content-center">
              <img
                src="../../assets/img/ic_spotify.svg"
                class="mr-2"
                alt=""
                srcset=""
              />
              <h2>Taylor Swift</h2>
            </div>
          </div>
          <div>
            <!-- Video -->
          </div>
        </div>
      </div>
      <div class="w-full text-white title-body p-3">
        <div class="flex justify-center content-center">
          <img
            src="../../assets/img/ic_choose_people_dialog.svg"
            alt=""
            width="30"
            srcset=""
            class="pb-4 mr-2"
          />
          <div class="text-center">
            SHARE NGOC TRINH'S PROFILE <br />
            <span class="text-sm text-slate-400"
              >SEE WHAT A FREIEND THINHS</span
            >
          </div>
        </div>
      </div>
      <div class="w-full text-white title-body p-3">
        <div class="flex justify-center content-center">
          <img
            src="../../assets/img/ic_report.svg"
            alt=""
            width="30"
            srcset=""
            class="mr-2"
          />
          <div class="text-center">REPORT NGỌC TRINH</div>
        </div>
      </div>
    </div>

    <Footer v-show="isShowImage"></Footer>
    <div
      class="sticky bottom-0 content-center flex justify-center"
      v-show="!isShowImage"
    >
      <img
        src="../../assets/img/bt_nope.svg"
        alt=""
        srcset=""
        @click="onCancelDetail()"
      />
      <img src="../../assets/img/bt_super_like.svg" alt="" srcset="" />
      <img src="../../assets/img/bt_like.svg" alt="" srcset="" />
    </div>
  </div>

  <SayWatch @onWatchSay="onWatchSay" v-show="!isShowPageSay"></SayWatch>
</template>

<script>
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
    debugger;
    return {
      urls,
    };
  },

  data() {
    return {
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

      return storeUsers.state.listUserProfiles;
    },

    urlImage() {
      debugger;
      return storeUsers.state.urlImageData;
    },

    btUrlImage() {
      debugger;
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
      debugger;
      this.isShowImage = false;
    },

    onCancelDetail() {
      this.isShowImage = true;
    },

    onWatchSay(val) {
      debugger;
      this.isShowPageSay = val;
    },

    onClickNextImage(val) {
      debugger;
      storeUsers.commit("setUrlImageData", val.url);
    },

    onNopeImage() {
      debugger;
      this.numberNext = this.numberNext + 1;
      storeUsers.commit("setNextUserProfile", this.numberNext);
    },

    onBackImage() {
      this.numberNext = this.numberNext - 1;
      storeUsers.commit("setNextUserProfile", this.numberNext);
    },
  },
  created() {
    debugger;
    const param = {
      userId: localStorage.userId,
      latitude: localStorage.latitude,
      longitude: localStorage.longitude,
      page: 1,
      pageNumber: 50,
      startAge: localStorage.startAge,
      endAge: localStorage.endAge,
      showMeGender: localStorage.showGender,
      location: localStorage.locations,
    };
    storeUsers.dispatch("getListUserProfiles", param);
  },

  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 2000);
    debugger;
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
</style>
