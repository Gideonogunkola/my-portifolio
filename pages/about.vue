<template>
  <div class="w-11/12  max-w-screen-xl mx-auto text-xl md:text-2xl text-ligColor dark:text-darColor">
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
          <h1 class="common">Meet Me</h1>
          <p class="leading-9 mt-8 mb-8">
            I am a data-driven visual and UX designer with frontend developement expertise who is
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
              href="https://drive.google.com/file/d/17l0Fo61MsllpXpaiXfVBOFc_JF4MbN9S/view?usp=sharing"
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
