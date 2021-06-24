<template>
  <div>
    <nuxt-link :to="href">
      <div
        class="h-16 w-36 lg:h-normal lg:w-48 md:w-44 rounded-3xl text-pryColor border-pryColor
            duration-300 ease-linear hover:bg-pryColor border-2 flex justify-center items-center cursor-pointer "
        :class="myText"
      >
        {{ text }}
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    text: String,
    href: {
      type: String,
      default: null
    }
  },
  computed: {
    myText() {
      if (this.$colorMode.preference === "dark") {
        return "hover:text-secColor";
      } else {
        return "hover:text-white";
      }
    }
  }
};
</script>
