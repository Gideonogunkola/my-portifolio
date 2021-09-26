<template>
  <div class="text-xl md:text-2xl">
    <Header :class="background" />
    <Nuxt class="" />
    <Footer class="mt-24" />
  </div>
</template>

<script>
export default {
  computed: {
    background() {
      if (this.$colorMode.preference === "dark") {
        return "bg-secColor";
      } else {
        return "bg-white";
      }
    }
  }
};
</script>

<style>
@font-face {
  font-family: "begum";
  src: url("~/assets/css/begum.woff") format("woff1"),
    url("~/assets/css/begum.woff2") format("woff2");
}
html {
  font-family: "begum", serif;
  -webkit-tap-highlight-color: transparent;
}
body {
  margin: 0;
}
.dark-mode {
  @apply text-white bg-secColor;
}

.light-mode {
  @apply text-secColor bg-white;
}

/* width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 20px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #08a0df;
  border-radius: 5px;
}
.typewriter-msg {
  color: #27aae1;
}
a:active {
  background-color:transparent !important;
}
a:focus {
  background-color: transparent !important;
}
</style>
