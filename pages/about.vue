<template>
  <div class="w-11/12 md:w-4/5 mx-auto text-xl md:text-2xl">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div class="content-area lg:mt-24 flex items-center justify-center lg:items-center">
        <img
          class=" img w-auto"
          src="~/assets/images/Gideon Ogunkola 2.png"
          alt="Gideon Ogunkola"
        />
      </div>
      <div
        class="content-area -mt-28 mb-36 lg:mb-0 lg:mt-24 flex  lg:items-center"
      >
        <div>
          <h1 class="common">About Me</h1>
          <p class="leading-9 mt-8 mb-8">
            I am a UX designer and frontend Developer who is passionate about
            design for inclusion and acessibility. I admire woking on diverse
            projects that make people happy through simplified interaction
            visual design. I build progressive web App using Vue.js(Nuxt.js). I
            am an expert in the use design applications such as Photoshop, Illustrator, InDesign, Adobe XD, and Figma
          </p>
          <div>
            <Btn3 text="My Resume" href="https://drive.google.com/file/d/1jJct4E3D6y2WM5hJh0DkSEDItFYvqujr/view" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.content-area {
  height: calc(100vh - theme("spacing.24"));
}
.img {
  height: 70%;
}
@media screen and (max-width: 700px) {
  .img {
    height: 45%;
    width: auto;
  }
}
.common {
  @apply pt-2 text-center lg:text-left text-3xl leading-tight md:text-4xl lg:text-4xl font-bold md:leading-none xl:pt-0;
}
</style>
