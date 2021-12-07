<template>
  <div class="h-20 lg:h-24 fixed w-full z-10 animated top-0 text-ligColor dark:text-darColor" :class="myShadow">
    <div
      class="w-11/12 max-w-screen-xl m-auto h-20 lg:h-24 flex justify-between items-center "
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
          <label class="switch">
            <input type="checkbox" v-model="checked" @input="toggle" />
            <span class="slider round"></span>
          </label>
          <p class="text-xl md:text-xl pl-3">Mode</p>
        </div>

        <div>
          <div
            class="flex items-center focus:border-transparent"
            tabindex="0"
            role="button"
            aria-pressed="false"
            @click="navbar"
          >
            <span
              class="iconify text-pryColor w-12 h-12 cursor-pointer focus:outline-none"
              :data-icon="displayicon"
              role="button"
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
            class="w-11/12 max-w-screen-xl m-auto h-20 lg:h-24 flex justify-between items-center "
          >
            <div role>
              <nuxt-link to="/" class="">
                <NuxtImg :src="imageUrl" alt="logo" />
              </nuxt-link>
            </div>
            <div
              class="flex items-center justify-between w-2/3 md:w-2/4 lg:w-2/4 xl:w-1/4"
            >
              <div class="flex items-center">
                <label class="switch">
                  <input type="checkbox" v-model="checked" @input="toggle" />
                  <span class="slider round"></span>
                </label>
                <p class="text-xl md:text-xl pl-3">Mode</p>
              </div>

              <div>
                <div
                  class="flex items-center border-transparent focus:border-transparent focus:outline-none"
                  tabindex="0"
                  role="button"
                  aria-pressed="false"
                  @click="navbar"
                >
                  <span
                    class="iconify text-pryColor w-12 h-12 cursor-pointer focus:outline-none"
                    :data-icon="displayicon"
                    role="button"
                    data-inline="false"
                  ></span>
                  <p class=" hidden md:block text-xl">Close</p>
                </div>
              </div>
            </div>
          </div>

          <div class="w-11/12 md:w-4/5 m-auto">
            <ul class="pt-8 md:pt-16 lg:pt-16 pb-24">
              <li class="menu"><nuxt-link to="/">Home</nuxt-link></li>
              <li class="menu">
                <nuxt-link to="/projects">My Works</nuxt-link>
              </li>
              <li class="menu"><nuxt-link to="/about">About Me</nuxt-link></li>
              <p class="pt-14 text-center font-bold text-2xl">Let's Talk</p>
              <p class="pt-3 text-center text-xl md:text-2xl">
                <a href="mailto:me@gideonogunkola.com"
                  >ogunkolagideon@gmail.com</a
                >
              </p>
              <p class="pt-2 text-center text-xl md:text-2xl">
                <a href="tel:+234 810 674 4642">+234 810 674 4642</a>2
              </p>
              <div>
                <a
                  href="https://wa.link/qkglzi"
                  class="flex justify-center items-center pt-2"
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
      checked: null,
      displayMenu: false,
      displayShow: true
    };
  },
  methods: {
    toggle() {
      this.$colorMode.preference =
        this.$colorMode.value === "light" ? "dark" : "light";
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
  mounted() {
    if ((this.checked = true)) {
      this.$colorMode.preference === "dark";
    } else {
      this.$colorMode.preference === "false";
    }
    if (this.$colorMode.preference === "dark") {
      this.checked === true;
    } else {
      this.checked === false;
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
  @apply text-4xl md:text-5xl font-bold py-5 text-center;
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
.switch {
  position: relative;
  display: inline-block;
  width: 56px;
  height: 18px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 30px;
  width: 30px;
  left: -3px;
  bottom: -5px;
  background-color: #27aae1;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #404040;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196f3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(34px);
  -ms-transform: translateX(34px);
  transform: translateX(34px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}

@media screen and (max-width: 700px) {
  .slider:before {
    position: absolute;
    content: "";
    height: 25px;
    width: 25px;
    left: -5px;
    bottom: -4px;
    background-color: #27aae1;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  .switch {
    position: relative;
    display: inline-block;
    width: 48px;
    height: 16px;
  }
}
</style>
