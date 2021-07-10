<template>
  <div>
    <nuxt-link :to="href">
      <div
        tabindex="0"
        role="button"
        aria-pressed="false"
        class="h-16 w-36 lg:h-normal md:w-44 lg:w-48 rounded-3xl border-pryColor border-2 bg-pryColor 
        hover:bg-transparent hover:text-pryColor flex justify-center items-center cursor-pointer duration-300 ease-linear"
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
        return "text-secColor";
      } else {
        return "text-white";
      }
    }
  }
};
</script>
