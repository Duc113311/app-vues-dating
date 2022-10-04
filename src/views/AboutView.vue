<template>
  <ul v-if="posts && posts.length">
    <li v-for="(post, index) in posts" :key="post.id">
      <p>
        <strong>{{ index }}.{{ post.title }}</strong>
      </p>
      <p>{{ post.body }}</p>
    </li>
  </ul>

  <ul v-if="errors && errors.length">
    <li v-for="(error, index) in errors" :key="error.id">
      {{ index }}{{ error.message }}
    </li>
  </ul>
  <div>Hihheiei</div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      posts: [],
      userID: 982,
      errors: [],
    };
  },

  setup() {
    function TestAxios() {
      debugger;
      const userID = "2LwGxBY06zWaIR7VcTIgSglhMMf4";
      axios
        .post(
          `http://localhost:5000/heartlink-dating-project/us-central1/app/login/v1/create-token/${userID}`
        )
        .then((response) => {
          this.posts = response.data;
        })
        .catch((e) => {
          console.log(e);
        });
    }
    TestAxios();
    return {};
  },

  // lấy dữ liệu khi component được tạo thành công
  created() {
    this.TestAxios();
  },
};
</script>
