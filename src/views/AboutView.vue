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
      axios
        .get(`http://jsonplaceholder.typicode.com/posts`)
        .then((response) => {
          debugger;

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
  created() {},
};
</script>
