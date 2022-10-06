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
            type="checkbox"
            id="cb-straight"
            name="fav_language"
            value="Straight"
          />
          <label class="text-base text-white" for="html">Straight</label>
        </div>
      </div>
      <div class="w-full rounded-xl p-4 bg-sexual">
        <div class="flex content-center">
          <input
            class="w-6 h-6 mr-5"
            type="checkbox"
            id="cb-gay"
            name="fav_language"
            value="Gay"
          />
          <label class="text-base text-white" for="html">Gay</label>
        </div>
      </div>
      <div class="w-full rounded-xl p-4 bg-sexual">
        <div class="flex content-center">
          <input
            class="w-6 h-6 mr-5"
            type="checkbox"
            id="cb-lesbian"
            name="fav_language"
            value="Lesbian"
          />
          <label class="text-base text-white" for="html">Lesbian</label>
        </div>
      </div>
      <div class="w-full rounded-xl p-4 bg-sexual">
        <div class="flex content-center">
          <input 
            class="w-6 h-6 mr-5 rounded-lg"
            type="checkbox"
            id="cb-bisexual"
            name="fav_language"
            value="Bisexual"
          />
          <label class="text-base text-white" for="html">Bisexual</label>
        </div>
      </div>
      <div class="w-full rounded-xl p-4 bg-sexual">
        <div class="flex content-center">
          <input
            class="w-6 h-6 mr-5"
            type="checkbox"
            id="cb-asexual"
            name="fav_language"
            value="Asexual"
          />
          <label class="text-base text-white" for="html">Asexual</label>
        </div>
      </div>
      <div class="w-full rounded-xl p-4 bg-sexual">
        <div class="flex content-center">
          <input
            class="w-6 h-6 mr-5"
            type="checkbox"
            id="cb-demisexual"
            name="fav_language"
            value="Demisexual"
          />
          <label class="text-base text-white" for="html">Demisexual</label>
        </div>
      </div>
      <div class="w-full rounded-xl p-4 bg-sexual">
        <div class="flex content-center">
          <input
            class="w-6 h-6 mr-5"
            type="checkbox"
            id="cb-pansexual"
            name="fav_language"
            value="Pansexual"
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
