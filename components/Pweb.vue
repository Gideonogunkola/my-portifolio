<template>
  <div class="mx-auto text-xl md:text-2xl">
    <transition name="myMenu">
      <div class="grid gap-14 grid-col-1 md:grid-cols-2 xl:grid-cols-3 mt-14">
        <div v-for="(project, index) in projects" :key="index">
          <nuxt-link
            :to="{ name: 'projects-slug', params: { slug: project.slug } }"
          >
            <div
              class=" mx-auto h-auto flex flex-col lg:w-96 lg:h-96 rounded-3xl cursor-pointer parent"
            >
              <img
                class=" w-full rounded-3xl"
                :src="require(`~/assets/images/${project.img}`)"
                alt="project-image"
              />
              <div class="child hidden lg:block">
                <h1 class="text-2xl md:text-3xl font-semibold">
                  {{ project.title }}
                </h1>
                <p>{{ project.description }}</p>
                <p class=" text-xl md:text-2xl font-medium pt-6 md:pt-8">
                  {{ project.category }}
                </p>
              </div>
            </div>
            <div
              class="w-full pb-8 pl-8 pt-14 pr-8 lg:hidden rounded-b-3xl -mt-6 "
              :class="myShadow"
            >
              <h1 class="text-2xl md:text-3xl font-semibold">
                {{ project.title }}
              </h1>
              <p>{{ project.description }}</p>
              <p class=" text-xl md:text-2xl font-medium pt-6 md:pt-8">
                {{ project.category }}
              </p>
            </div>
          </nuxt-link>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: []
    };
  },
  async fetch() {
    this.projects = await this.$content("projects")
      .only(["title", "description", "category", "slug", "img", "tab"])
      .where({ tab: "web" })
      .sortBy("CreatedAt", "asc")
      .fetch();
  },

  computed: {
    myShadow() {
      if (this.$colorMode.preference === "dark") {
        return "shadow-now bg-blue";
      } else {
        return "shadow-md";
      }
    }
  }
};
</script>

<style scoped>
.myMenu-enter-active,
.myMenu-leave-active {
  transition: opacity 0.8s;
}
.myMenu-enter,
.myMenu-leave-to {
  opacity: 0;
}

@media screen and (min-width: 1000px) {
  .parent {
    position: relative;
  }
  .parent::after {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background-color: #27a9e1cb;
    opacity: 0;
    border-radius: 1.5rem;
    transition: all 500ms ease-out;
  }
  .child {
    position: absolute;
    bottom: 3.5rem;
    left: 2.5rem;
    opacity: 0;
    z-index: 9;
  }
  .parent:hover::after,
  .parent:hover .child {
    opacity: 1;
  }
}
</style>
