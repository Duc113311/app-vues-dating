<template>
  <div
    class="w-full h-full home-page overflow-hidden p-5"
    :style="[isShowImage ? '' : isShowScroll]"
    v-show="isShowPageSay"
  >
    <Header></Header>

    <div class="w-full page-body tinder">
      <div class="tinder--cards">
        <div
          v-for="(item, index) in listUsers"
          :key="index"
          class="tinder--card"
        >
          <img :src="item.url" />
          <h3>{{ item.name }}</h3>
          <p>This is a demo for Tinder like swipe cards</p>
        </div>
      </div>
    </div>

    <Footer></Footer>
  </div>
</template>

<script>
import Hammer from "hammerjs";
import Footer from "../../components/common/footer";
import Header from "../../components/common/header";
export default {
  components: {
    Footer,
    Header,
  },
  name: "home-page",

  data() {
    return {
      isShowScroll: {
        overflow: "scroll",
      },
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
      isShowPageSay: true,
      isShowImage: true,
    };
  },

  mounted() {
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
};
</script>

<style lang="css">
.home-page {
  background-color: #382e41;
}
.home-page::-webkit-scrollbar {
  display: none;
}

.page-body {
  height: 80%;
  border: 1px solid white;
}

.tinder {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  position: relative;
  opacity: 1;
  transition: opacity 0.1s ease-in-out;
}

.loaded.tinder {
  opacity: 1;
}

.tinder--status {
  position: absolute;
  top: 50%;
  margin-top: -30px;
  z-index: 2;
  width: 100%;
  text-align: center;
  pointer-events: none;
}

.tinder--status i {
  font-size: 100px;
  opacity: 0;
  transform: scale(0.3);
  transition: all 0.2s ease-in-out;
  position: absolute;
  width: 100px;
  margin-left: -50px;
}

.tinder_love .fa-heart {
  opacity: 0.7;
  transform: scale(1);
}

.tinder_nope .fa-remove {
  opacity: 0.7;
  transform: scale(1);
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
  max-width: 100%;
  height: 100%;
  background: #ffffff;
  padding-bottom: 40px;
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
