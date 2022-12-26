<template>
  <div>
    <div class="mt-10" v-show="isShowHeader">
      <h2 class="text-2xl text-white mb-2">My Photos are</h2>
      <span class="text-slate-500">Add at least 2 photos to continue</span>
    </div>

    <!-- Image -->
    <div>
      <div class="mt-4 grid grid-cols-3 gap-4">
        <template v-for="fileList in fileListValue" :key="fileList.id">
          <div class="wrapper relative">
            <div class="file-upload">
              <input type="file" @change="toggleUpload($event, fileList)" />
              <i class="fa fa-plus rounded-full p-1.5 text-white icon-plus"></i>
            </div>
            <div
              class="img-avatar overflow-hidden"
              v-bind:id="'avatar' + fileList.id"
              v-loading="loading"
              :target="fileList.id"
            >
              <div
                src=""
                alt=""
                width="100"
                height="100"
                srcset=""
                class="my-avatar"
                v-bind:id="fileList.id"
              />
            </div>
            <div
              class="img-close"
              @click="removeUpload(fileList.id)"
              v-bind:id="'close' + fileList.id"
            >
              <img src="../../assets/images/icon-cancel.png" alt="" srcset="" />
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import storeUsers from "@/stores/user-profile/store-user";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

export default {
  name: "MyPhotos",
  setup() {},
  data() {
    return {
      fileListValue: [
        {
          id: 1,
          url: "image1",
        },
        {
          id: 2,
          url: "image2",
        },
        {
          id: 3,
          url: "image3",
        },
        {
          id: 4,
          url: "image4",
        },
        {
          id: 5,
          url: "image5",
        },
        {
          id: 6,
          url: "image6",
        },
        {
          id: 7,
          url: "image7",
        },
        {
          id: 8,
          url: "image8",
        },
        {
          id: 9,
          url: "image9",
        },
      ],
      loading: false,
      showUpload: true,
      file: "",
      dialogImageUrl: "",
      isShowImage: false,
    };
  },

  props: ["isShowHeader"],
  methods: {
    async toggleUpload(event, data) {
      this.loading = true;
      const image = event.target.files[0];
      console.log(data);
      const idUrl = data.id;
      // const reader = new FileReader();
      // reader.readAsDataURL(image);
      // reader.onload = (e) => {
      //   console.log(e);
      //   console.log(this.dialogImageUrl);
      // };
      this.isShowImage = true;

      const storage = getStorage();
      const storageRef = ref(storage, "dating/" + image.name);
      await uploadBytes(storageRef, image).then((snapshot) => {
        console.log("Uploaded a blob or file!");
        console.log(snapshot);
      });

      await getDownloadURL(storageRef, image)
        .then((url) => {
          this.dialogImageUrl = url;
          const dataImage = {
            id: idUrl,
            url: url,
          };
          storeUsers.commit("setListAvatar", dataImage);
          // Or inserted into an <img> element
          const img = document.getElementById(idUrl);
          const avatar = document.getElementById("avatar" + idUrl);
          const close = document.getElementById("close" + idUrl);
          // img.setAttribute("src", url);
          setTimeout(() => {
            this.loading = false;
          }, 1000);
          let bg = "url('" + url + "')";

          img.style.backgroundImage = bg;
          avatar.style.display = "block";
          close.style.display = "block";
        })
        .catch((error) => {
          console.log(error);
        });

      // Check
      const imageNumber = storeUsers.state.userProfile.avatars.length;
      if (imageNumber < 1) {
        document.querySelector(".btContinue").disabled = true;
        document.querySelector(".btContinue").style.backgroundColor = "#382e41";
      } else {
        document.querySelector(".btContinue").disabled = false;
        document.querySelector(".btContinue").style.backgroundColor = "red";
      }
    },

    removeUpload(val) {
      const img = document.getElementById(val);
      const avatar = document.getElementById("avatar" + val);
      const close = document.getElementById("close" + val);
      const dataImage = {
        id: val,
      };
      storeUsers.commit("setListAvatar", dataImage);
      img.style.backgroundImage = "bg";
      avatar.style.display = "none";
      close.style.display = "none";
    },
  },
  mounted() {
    const image = storeUsers.state.userProfile.avatars;
    for (let index = 0; index < image.length; index++) {
      const element = image[index];
      const img = document.getElementById(element.id);
      const avatar = document.getElementById("avatar" + element.id);
      const close = document.getElementById("close" + element.id);
      // img.setAttribute("src", url);
      setTimeout(() => {
        this.loading = false;
      }, 1000);
      let bg = "url('" + element.url + "')";

      img.style.backgroundImage = bg;
      avatar.style.display = "block";
      close.style.display = "block";
    }
    if (document.querySelector(".btContinue")) {
      if (image.length < 1) {
        document.querySelector(".btContinue").disabled = true;
        document.querySelector(".btContinue").style.backgroundColor = "#382e41";
      } else {
        document.querySelector(".btContinue").disabled = false;
        document.querySelector(".btContinue").style.backgroundColor = "red";
      }
    }
  },
};
</script>

<style lang="css">
.avatar-uploader {
  width: 110px;
  height: 140px;
  border: 1px solid #b8b3c0;
  display: flex;
  justify-content: center;
  padding: 7px;
  background-color: white;
  border-radius: 10px;
}
.avatar-uploader .el-upload {
  border: 2px dashed rgb(167, 70, 70);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
  width: 100%;
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #fd5d65;
  width: 178px;
  height: 178px;
  text-align: center;
}

.icon-plus {
  font-size: 28px;
  background-color: #fd5d65;
}

.wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.wrapper .file-upload {
  height: 165px;
  width: 200px;
  border-radius: 10px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 4px solid #ffffff;
  overflow: hidden;
  background-color: white;
  background-size: 100% 200%;
  transition: all 1s;
  color: #ffffff;
  font-size: 100px;
}
input[type="file"] {
  height: 177px;
  width: 113px;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  cursor: pointer;
}

.img-avatar {
  height: 165px;
  width: 100%;
  border-radius: 10px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-size: 100% 200%;
  transition: all 1s;
  color: #ffffff;
  font-size: 100px;
  display: none;
}

.img-close {
  width: 26px;
  position: absolute;
  top: -8px;
  overflow: hidden;
  right: -10px;
  display: none;
}

.show-theme {
  display: none;
}
.hide-theme {
  display: block;
}
.my-avatar {
  width: 100%;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.el-loading-spinner {
  top: 0 !important;
  margin-top: 0 !important;
  width: 100% !important;
  text-align: center !important;
  position: absolute !important;
}
</style>
