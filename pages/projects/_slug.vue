<template>
  <div class="w-11/12 xl:w-4/5 mx-auto text-xl md:text-2xl mt-24 lg:h-screen">
    <div class="pt-14 grid grid-cols-1 lg:grid-cols-3 lg:gap-14 lg:h-screen" >
        <div class="rounded-3xl lg:sticky lg:top-0">
            <img class=" mx-auto w-screen h-auto lg:w-full" :src="require(`~/assets/images/${projects.img}`)" alt="projects">
            <h2 class="text-2xl md:text-3xl font-semibold mt-8">{{ projects.title }}</h2>
            <p>{{ projects.description }}</p>
            <p class=" text-xl md:text-2xl font-medium pt-6 md:pt-8">{{projects.category}}</p>
        </div>
        <div class=" mt-8 lg:mt-0 col-span-2 lg:h-4/5 lg:overflow-y-auto">
            <nuxt-content class="prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto"
             :document="projects"/>
        </div>
       
    </div>
      
  </div>
</template>

<script>
export default {
    async asyncData({$content, params}){
        const projects = await $content('projects', params.slug).fetch()
      if (!projects) {
      throw new Error(`${this.path} not found`)
    }
        return{projects}
    },
   
}
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