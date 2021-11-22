<template>
  <div
    class="w-11/12  max-w-screen-xl mx-auto text-xl md:text-2xl mt-24"
  >
    <div class=" pt-10 md:pt-20">
      <div class="lg:top-6">   
        <h2 class="text-4xl md:text-6xl font-semibold mt-8 text-black dark:text-white">
          {{ projects.title }}
        </h2>
        <p class=" pt-2">{{ projects.description }}</p>

        <!-- <p class=" text-xl md:text-2xl font-medium pt-2">
          {{ projects.category }}
        </p> -->
         <!-- <img
          class=" mx-auto w-screen h-auto lg:w-full"
          :src="require(`~/assets/images/${projects.img}`)"
          alt="Gideon Ogunkola's projects"
        /> -->
      </div>
      <div class=" mt-14">
        <nuxt-content
          class="prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto"
          :document="projects"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const projects = await $content("projects", params.slug).fetch();
    if (!projects) {
      throw new Error(`${this.path} not found`);
    }
    return { projects };
  }
};
</script>

<style scoped>
.nuxt-content h2 {
  font-weight: bold;
  font-size: 28px;
}
.nuxt-content h3 {
  font-weight: bold;
  font-size: 22px;
}
.nuxt-content p {
  margin-bottom: 20px;
}
</style>
