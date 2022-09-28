<template>
  <div>
    <div class="mt-10">
      <h2 class="text-2xl text-white mb-2">My Sexual oritenation is</h2>
      <span class="text-slate-500">Select up to 3</span>
    </div>
    <div class="grid select-sexual mt-6 gap-4">
      <div class="w-full rounded-xl p-4 bg-sexual">
        <div class="flex content-center">
          <input
            class="w-6 h-6 mr-5"
            type="radio"
            id="html"
            name="fav_language"
            value="HTML"
          />
          <label class="text-base text-white" for="html">Straight</label>
        </div>
      </div>
      <div class="w-full rounded-xl p-4 bg-sexual">
        <div class="flex content-center">
          <input
            class="w-6 h-6 mr-5"
            type="radio"
            id="html"
            name="fav_language"
            value="HTML"
          />
          <label class="text-base text-white" for="html">Gay</label>
        </div>
      </div>
      <div class="w-full rounded-xl p-4 bg-sexual">
        <div class="flex content-center">
          <input
            class="w-6 h-6 mr-5"
            type="radio"
            id="html"
            name="fav_language"
            value="HTML"
          />
          <label class="text-base text-white" for="html">Lesbian</label>
        </div>
      </div>
      <div class="w-full rounded-xl p-4 bg-sexual">
        <div class="flex content-center">
          <input
            class="w-6 h-6 mr-5"
            type="radio"
            id="html"
            name="fav_language"
            value="HTML"
          />
          <label class="text-base text-white" for="html">Bisexual</label>
        </div>
      </div>
      <div class="w-full rounded-xl p-4 bg-sexual">
        <div class="flex content-center">
          <input
            class="w-6 h-6 mr-5"
            type="radio"
            id="html"
            name="fav_language"
            value="HTML"
          />
          <label class="text-base text-white" for="html">Asexual</label>
        </div>
      </div>
      <div class="w-full rounded-xl p-4 bg-sexual">
        <div class="flex content-center">
          <input
            class="w-6 h-6 mr-5"
            type="radio"
            id="html"
            name="fav_language"
            value="HTML"
          />
          <label class="text-base text-white" for="html">Demisexual</label>
        </div>
      </div>
      <div class="w-full rounded-xl p-4 bg-sexual">
        <div class="flex content-center">
          <input
            class="w-6 h-6 mr-5"
            type="radio"
            id="html"
            name="fav_language"
            value="HTML"
          />
          <label class="text-base text-white" for="html">Pansexual</label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "My-Sexual",
  setup() {
    return;
  },
};
</script>

<style lang="css">
.bg-sexual {
  background-color: #05101b47;
}
</style>
