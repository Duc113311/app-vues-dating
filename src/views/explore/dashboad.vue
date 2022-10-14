<template>
  <div
    class="w-full h-full home-page overflow-hidden p-5"
    :style="[isShowImage ? '' : isShowScroll]"
  >
    <Header></Header>
    <!-- body -->
    <div class="w-full body-explore">
      <div class="w-full image-verified"></div>
      <div class="w-full text-white text-lg">
        Let's find people same with your vibe...
      </div>
      <div class="w-full grid gap-2 grid-explore">
        <img
          class="imgae-explore w-full rounded-lg h-60"
          src="@/assets/images/image_coffee.png"
          alt=""
          srcset=""
        />
        <img
          class="imgae-explore w-full rounded-lg h-60"
          src="@/assets/images/image_date.png"
          alt=""
          srcset=""
        />
        <img
          class="imgae-explore w-full rounded-lg h-60"
          src="@/assets/images/image_firend.png"
          alt=""
          srcset=""
        />
        <img
          class="imgae-explore w-full rounded-lg h-60"
          src="@/assets/images/image_looking.png"
          alt=""
          srcset=""
        />
      </div>
    </div>
    <Footer></Footer>

    <!-- Explore -->
  </div>
</template>

<script>
import Footer from "../../components/common/footer";
import Header from "../../components/common/header";
export default {
  components: {
    Footer,
    Header,
  },
  name: "dashboad-explore",
  setup() {
    return;
  },

  data() {
    return {
      isShowScroll: {
        overflow: "scroll",
      },
      isShowImage: true,
    };
  },
};
</script>

<style lang="css">
.home-page {
  background-color: #382e41;
}
.body-explore {
  height: 84%;
}

.image-verified {
  background-repeat: no-repeat;
  background-image: url(@/assets/images/image_verified.png);
  height: 23%;
  width: 100%;
  background-position: center;
  background-size: contain;
}

.grid-explore {
  grid-template-columns: 1fr 1fr;
}
.home-page::-webkit-scrollbar {
  display: none;
}
</style>
