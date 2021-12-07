<template>
  <div>
    <NuxtImg
      class="w-full h-auto"
      :src="dynamicImage"
      alt="Gideon Ogunkola's project"
    />
  </div>
</template>

<script>
export default {
  name: "DynamicImage",

  props: {
    filename: {
      type: String,
      required: true
    }
  },

  computed: {
    dynamicImage() {
      return require(`~/assets/images/${this.filename}`);
    }
  }
};
</script>
