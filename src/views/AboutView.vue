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
      errors: [],
    };
  },

  setup() {
    function TestAxios() {
      debugger;
      axios
        .get(
          `http://localhost:5000/heartlink-dating-project/us-central1/app/base/v1/users`
        )
        .then((response) => {
          this.posts = response.data;
        })
        .catch((e) => {
          this.errors.push(e);
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
