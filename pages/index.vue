<template>
  <div
    class="w-11/12 max-w-screen-xl mx-auto  pt-20 lg:pt-24"
  >
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-y-32 md:gap-y-20 ">
      <!-- first-grid -->
      <div
        class="content-area mt-14 md:mt-0 flex md:justify-center items-center md:text-center lg:text-left"
      >
        <div class="">
          <div class="">
            <div>
              <p>
                <code>{{ greetings }}</code> 👋
              </p>
            </div>
            <div
              class="pt-6 text-black dark:text-white text-4xl md:text-5xl xl:text-6xl font-bold"
            >
              <typewriter
                :speed="200"
                :full-erase="false"
                :start-delay="200"
                :words="[
                  'UX Designer.',
                  'Web Developer.',
                  'Visual Designer.'
                ]"
                :erase-delay="300"
                class="leading-before-tight"
              >
                I'm Gideon O. <br />
                A
              </typewriter>
            </div>
            <p class="pt-6 w-11/12 leading-9">
               I build products that solve real-time problems through human-centered design.
            </p>

            <div class="flex pt-10 md:justify-center lg:justify-start">
              <BtnPry text=" My Works" href="/projects" />
              <BtnSec text=" Let's talk" href="/contact" class="pl-6 md:pl-8" />
            </div>
          </div>
        </div>
      </div>

      <!-- second-grid -->
      <div
        class="content-area1 pt-4 pd:mt-0 flex lg:items-center md:justify-center lg:justify-end"
      >
        <img
          class="w-auto h-auto lg:h-high"
          src="@/assets/images/Gideon Ogunkola 1.png"
          alt="Gideon Ogunkola"
        />
      </div>
    </div>
    <!--  Project Section Begins  -->
    <section class="projects">
      <div class="title -pt-10 lg:pt-16">
        <h1 class="common">My Works</h1>
        <p class="text-center pt-4 pb-10 lg:pb-12">Some selected projects</p>
      </div>

      <!-- testing -->
      <Navbarcontent />
      <!-- testing -->
    </section>
    <!-- Project Section Ends -->

    <!-- My Process Begins -->
    <section>
      <div>
        <div class="title">
          <h1 class="common">My Process</h1>
          <p class="text-center pt-4 pb-12 lg:pb-24">
            How I come about my solution
          </p>
        </div>
        <div class="flex md:justify-between justify-center flex-wrap">
          <div
            class="
                border-2
                h-72
                w-60
                border-blue-500
                rounded-3xl
                flex
                items-center
                mb-8
                xl:mb-0
              "
          >
            <div class="w-4/5 mx-auto">
              <h3 class="text-2xl font-semibold">Empathize</h3>
              <p class="leading-9 pt-4">
                I understand the users and the problems i’m trying to solve.
              </p>
            </div>
          </div>
          <div
            class="
                border-2
                h-72
                w-60
                border-green-500
                rounded-3xl
                flex
                items-center
                mb-8
                xl:mb-0
              "
          >
            <div class="w-4/5 mx-auto">
              <h3 class="text-2xl font-semibold">Define</h3>
              <p class="leading-9 pt-4">
                I clearly state the users problems that need solutions
              </p>
            </div>
          </div>
          <div
            class="
                border-2
                h-72
                w-60
                border-yellow-500
                rounded-3xl
                flex
                items-center
                mb-8
                xl:mb-0
              "
          >
            <div class="w-4/5 mx-auto">
              <h3 class="text-2xl font-semibold">Ideate</h3>
              <p class="leading-9 pt-4">
                I brainstorm all possible ideas to solve the problems.
              </p>
            </div>
          </div>
          <div
            class="
                border-2
                h-72
                w-60
                border-purple-500
                rounded-3xl
                flex
                items-center
                mb-8
                xl:mb-0
              "
          >
            <div class="w-4/5 mx-auto">
              <h3 class="text-2xl font-semibold">Prototype</h3>
              <p class="leading-9 pt-4">
                I transform the solutions into a low fidelity prototype.
              </p>
            </div>
          </div>
          <div
            class="
                border-2
                h-72
                w-60
                border-red-500
                rounded-3xl
                flex
                items-center
                mb-8
                xl:mb-0
              "
          >
            <div class="w-4/5 mx-auto">
              <h3 class="text-2xl font-semibold">Test</h3>
              <p class="leading-9 pt-4">
                I conduct a usability testing, iterate, and then deliver.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- My Process Ends -->

    <!-- Contact-section Begins -->
    <section class="contact mt-10">
      <div>
        <div class="title">
          <h1 class="common">Let's Talk</h1>
          <p class="text-center pt-4 pb-12 lg:pb-24">
            I am available for your next project
          </p>
        </div>

        <div
          class="grid grid-cols-1 lg:grid-cols-2 gap-10 md:justify-items-center lg:justify-items-start"
        >
          <div>
            <p class="pb-6 lg:pb-10 text-xl md:text-2xl font-bold">
              My Contact Details
            </p>
            <div class="flex items-center pb-6 md:pb-10">
              <div
                class="
                    h-14
                    w-14
                    md:h-20
                    md:w-20
                    rounded-full
                    bg-pryColor
                    flex
                    justify-center
                    items-center
                  "
                :class="myText"
              >
                <span
                  class="iconify"
                  data-icon="whh:emailalt"
                  data-inline="false"
                ></span>
              </div>
              <p class="pl-1 md:pl-4">ogunkolagideon@gmail.com</p>
            </div>
            <div class="flex items-center pb-6 md:pb-10">
              <div
                class="
                    h-14
                    w-14
                    md:h-20
                    md:w-20
                    rounded-full
                    bg-pryColor
                    flex
                    justify-center
                    items-center
                  "
                :class="myText"
              >
                <span
                  class="iconify"
                  data-icon="whh:emailalt"
                  data-inline="false"
                ></span>
              </div>
              <p class="pl-1 md:pl-4">gideonogunkola@gmail.com</p>
            </div>
            <div class="flex items-center pb-6 md:pb-10">
              <div
                class="
                    h-14
                    w-14
                    md:h-20
                    md:w-20
                    rounded-full
                    bg-pryColor
                    flex
                    justify-center
                    items-center
                  "
                :class="myText"
              >
                <span
                  class="iconify h-7 w-auto"
                  data-icon="fluent:call-24-filled"
                  data-inline="false"
                ></span>
              </div>
              <p class="pl-1 md:pl-4">+234 810 674 4642</p>
            </div>
          </div>

          <div>
            <Form></Form>
          </div>
        </div>
      </div>
    </section>
    <!-- Contact-section Ends -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      greetings: "<Hello there!/>",
      title: "Gideon Ogunkola. | UX Designer | Frontend Developer",
      load: false
    };
  },

  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: "description",
          name: "UX Designer | Frontend Developer",
          content: "Gideon is a professional UX Designer and Frontend Developer"
        }
      ]
    };
  },

  computed: {
    myShadow() {
      if (this.$colorMode.preference === "dark") {
        return "shadow-now bg-blue";
      } else {
        return "shadow-md";
      }
    },
    myText() {
      if (this.$colorMode.preference === "dark") {
        return "text-secColor";
      } else {
        return "text-white";
      }
    }
  }
};
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
    height: 100%;
  }
  .content-area1 {
    height: 100%;
  }
}

.common {
  @apply pt-28 text-3xl leading-tight md:text-4xl lg:text-4xl font-bold md:leading-none text-center xl:pt-36;
}
.caption-enter-active,
.caption-leave-active {
  transition: opacity 1s;
}
.caption-enter,
.caption-leave-to {
  opacity: 0;
}
</style>
