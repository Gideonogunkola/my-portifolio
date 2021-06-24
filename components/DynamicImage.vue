<template>
  <div>
    <img class="lg:max-w-4/5 m-auto" :src="dynamicImage">
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