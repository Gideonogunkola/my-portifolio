<template>
  <div class="w-11/12 max-w-screen-xl mx-auto text-xl md:text-2xl">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div
        class="content-area1 mt-20 lg:mt-24 flex items-center justify-center lg:items-center"
      >
        <img
          class=" w-auto h-auto"
          src="~/assets/images/Gideon Ogunkola 2.png"
          alt="Gideon Ogunkola"
        />
      </div>
      <div class="content-area mt-20 lg:mb-0 lg:mt-24 flex  lg:items-center">
        <div>
          <h1 class="common">About Me</h1>
          <p class="leading-9 mt-8 mb-8">
            I am a data-driven UX designer and frontend developer who is
            passionate about design for inclusion and acessibility. I am
            cheerful, energetic and love working on diverse projects that make
            people happy through simplified designs.
            <br />
            <br />
            When I am not designing or coding, you find me reading
            entrepreneurship books or playing video games.
          </p>
          <div class="flex md:justify-center lg:justify-start">
            <Btn3
              text="My Resume"
              href="https://drive.google.com/file/d/1hLm4C_ZyQjAc1tkwr3D8BEpxko3ueB37/view"
            />
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
.content-area,
.content-area1 {
  height: calc(100vh - theme("spacing.24"));
}
.img {
  height: 70%;
}
@media screen and (max-width: 700px) {
  .content-area {
    height: calc(100vh - theme("spacing.20"));
  }
  .content-area1 {
    height: 100%;
  }
}
.common {
  @apply pt-2 text-center lg:text-left text-3xl leading-tight md:text-4xl lg:text-4xl font-bold md:leading-none xl:pt-0;
}
</style>
