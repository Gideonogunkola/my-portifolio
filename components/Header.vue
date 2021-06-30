<template>
  <div class="h-24 fixed w-full z-10 animated top-0" :class="myShadow">
    <div
      class="w-11/12 max-w-screen-xl m-auto h-24 flex justify-between items-center "
    >
      <div>
        <nuxt-link to="/" class="">
          <img :src="imageUrl" alt="logo" />
        </nuxt-link>
      </div>
      <div
        class="flex items-center justify-between w-2/3 md:w-2/4 lg:w-2/4 xl:w-1/4"
      >
        <div class="flex items-center">
          <div
            class="w-12 h-4 md:w-14 md:h-4 flex items-center bg-gray-300 rounded-full duration-500 ease-in-out cursor-pointer"
            @click="toggle"
            :class="{ 'bg-gray-500': toggleActive }"
          >
            <!-- Switch -->
            <div
              class="bg-pryColor w-6 h-6 md:w-7 md:h-7 rounded-full shadow-md transform duration-500 ease-in-out cursor-pointer"
              :class="{ 'translate-x-6 md:translate-x-7': toggleActive }"
            ></div>
          </div>
          <p class="text-xl md:text-xl pl-2">Mode</p>
        </div>

        <div>
          <div class="flex items-center" @click="navbar">
            <span
              class="iconify text-pryColor w-12 h-12 cursor-pointer"
              :data-icon="displayicon"
              data-inline="false"
            ></span>
            <p class=" hidden md:block text-xl">Menu</p>
          </div>
        </div>
      </div>
    </div>

    <!-- menu items -->
    <div>
      <transition name="myMenu">
        <section
          class="absolute top-0 w-full h-screen"
          :class="background"
          v-if="displayMenu"
        >
          <div
            class="w-11/12 xl:w-4/5 m-auto h-24 flex justify-between items-center "
          >
            <div>
              <nuxt-link to="/" class="">
                <img :src="imageUrl" alt="logo" />
              </nuxt-link>
            </div>
            <div
              class="flex items-center justify-between w-2/3 md:w-2/4 lg:w-2/4 xl:w-1/4"
            >
              <div class="flex items-center">
                <div
                  class="w-12 h-4 md:w-14 md:h-4 flex items-center bg-gray-300 rounded-full duration-500 ease-in-out cursor-pointer"
                  @click="toggle"
                  :class="{ 'bg-gray-500': toggleActive }"
                >
                  <!-- Switch -->
                  <div
                    class="bg-pryColor w-6 h-6 md:w-7 md:h-7 rounded-full shadow-md transform duration-500 ease-in-out cursor-pointer"
                    :class="{ 'translate-x-6 md:translate-x-7': toggleActive }"
                  ></div>
                </div>
                <p class="text-xl md:text-xl pl-2">Mode</p>
              </div>

              <div>
                <div class="flex items-center" @click="navbar">
                  <span
                    class="iconify text-pryColor w-12 h-12 cursor-pointer"
                    :data-icon="displayicon"
                    data-inline="false"
                  ></span>
                  <p class=" hidden md:block text-xl">Close</p>
                </div>
              </div>
            </div>
          </div>

          <div class="w-11/12 md:w-4/5 m-auto">
            <ul class="pt-4 md:pt-16 lg:pt-16 pb-24">
              <li class="menu"><nuxt-link to="/">Home</nuxt-link></li>
              <li class="menu">
                <nuxt-link to="/projects">My Works</nuxt-link>
              </li>
              <li class="menu"><nuxt-link to="/about">About Me</nuxt-link></li>
              <p class="pt-14 text-right font-bold text-2xl">Let's Talk</p>
              <p class="pt-3 text-right text-xl md:text-2xl">
                <a href="mailto:me@gideonogunkola.com">me@gideonogunkola.com</a>
              </p>
              <p class="pt-2 text-right text-xl md:text-2xl">
                <a href="mailto:ogunkolagideon@gmail.com"
                  >ogunkolagideon@gmail.com</a
                >
              </p>
              <p class="pt-2 text-right text-xl md:text-2xl">
                <a href="tel:+234 810 674 4642">+234 810 674 4642</a>2
              </p>
              <div>
                <a
                  href="https://wa.link/qkglzi"
                  class="flex justify-end items-center pt-2"
                  target="_blank"
                >
                  <span
                    class="iconify h-8 w-8"
                    data-icon="logos:whatsapp"
                    data-inline="false"
                  ></span>
                  <p class="text-right text-xl pl-2">WhatsApp</p>
                </a>
              </div>
            </ul>
          </div>
        </section>
      </transition>
    </div>
    <!-- Menu Itmes -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      toggleActive: false,
      displayMenu: false,
      displayShow: true
    };
  },
  methods: {
    toggle() {
      this.toggleActive = !this.toggleActive;
      this.$colorMode.preference =
        this.$colorMode.preference === "light" ? "dark" : "light";
      this.displayMenu = false;
    },
    navbar() {
      this.displayMenu = !this.displayMenu;
    }
  },
  computed: {
    imageUrl() {
      if (this.$colorMode.preference === "light") {
        return require(`~/assets/images/logo.svg`);
      } else {
        return require(`~/assets/images/logo2.svg`);
      }
    },
    displayicon() {
      if (this.displayMenu === true) {
        return "gg-close";
      } else {
        return "heroicons-solid:menu-alt-3";
      }
    },
    myShadow() {
      if (this.$colorMode.preference === "dark") {
        return "shadow-now";
      } else {
        return "shadow-md";
      }
    },
    background() {
      if (this.$colorMode.preference === "dark") {
        return "bg-secColor";
      } else {
        return "bg-white";
      }
    }
  },
  created() {
    if (this.$colorMode.preference === "light") {
      this.toggleActive = false;
    } else {
      this.toggleActive = true;
    }
  },
  watch: {
    $route() {
      this.displayMenu = false;
    }
  }
};
</script>

<style scoped>
.menu {
  @apply text-3xl md:text-4xl font-bold py-5 text-right;
}
.myMenu-enter-active,
.myMenu-leave-active {
  transition: opacity 0.8s;
}
.myMenu-enter,
.myMenu-leave-to {
  opacity: 0;
}
.nuxt-link-exact-active {
  color: #27aae1;
}
</style>
