<template>
  <div
    class="w-11/12 max-w-screen-xl text-xl md:text-2xl h-screen mx-auto flex justify-center items-center"
  >
    <div class="text-center ">
      <h1 class=" font-bold text-9xl text-pryColor">404</h1>
      <div v-if="error.statusCode === 404">
        <p>
          Ooooooooops! The page you are looking for doesn't exist 😉
        </p>
      </div>
      <div class="" v-else>
        <p>An error occured. Please try again later 🤗</p>
      </div>

      <p class="pt-4">
        Go back to
        <nuxt-link to="/"
          ><span class=" text-pryColor">home page </span></nuxt-link
        >
      </p>
    </div>
  </div>
</template>

<script>
export default {
  layout: "basic",
  props: ["error"]
};
</script>

<style></style>
