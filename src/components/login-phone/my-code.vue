<template>
  <div>
    <div class="number-code">
      <h2 class="mb-2 text-xl text-white">My code is</h2>
      <div class="mt-2 text-color">Please enter Code sent to</div>
      <div class="text-code flex justify-center mt-8 mb-8">
        <input
          type="tel"
          pattern="[0-9.]+"
          class="one-code text-center"
          autocomplete="tel"
          name="phone"
          v-model="valCodeQR"
        />
        <input
          type="tel"
          pattern="[0-9.]+"
          class="one-code text-center"
          autocomplete="tel"
          name="phone"
          v-model="valCodeQR"
        />
        <input
          type="tel"
          pattern="[0-9.]+"
          class="one-code text-center"
          autocomplete="tel"
          name="phone"
          v-model="valCodeQR"
        />
        <input
          type="tel"
          pattern="[0-9.]+"
          class="one-code text-center"
          autocomplete="tel"
          name="phone"
          v-model="valCodeQR"
        />
        <input
          type="tel"
          pattern="[0-9.]+"
          class="one-code text-center"
          autocomplete="tel"
          name="phone"
          v-model="valCodeQR"
        />
        <input
          type="tel"
          pattern="[0-9.]+"
          class="one-code text-center"
          autocomplete="tel"
          name="phone"
          v-model="valCodeQR"
        />
      </div>
      <div class="mb-4">
        <a href="#" @click="onPhoneNumber()">Update contact info</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "MyCode",

  setup() {
    return;
  },

  data() {
    return {};
  },
  methods: {
    onPhoneNumber() {
      debugger;
    },
  },
};
</script>

<style lang="css">
.one-code {
  width: 48px;
  border-radius: 4px;
  background-color: #ffffff;
  font-size: 1.5rem;
  font-weight: 700;
  height: 48px;
  touch-action: manipulation;
  padding-left: 8px;
  padding-right: 8px;
  vertical-align: middle;
  margin-right: 5px;
}
</style>
