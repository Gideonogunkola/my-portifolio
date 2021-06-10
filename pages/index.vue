  <template>
  <div class="w-11/12 md:w-4/5 mx-auto text-xl md:text-2xl">
    <div>
      <!-- Preloader Begins -->
      <!-- <Preloader v-if="show" /> -->
      <!-- Preloader Ends -->
      <!-- Hero Section Begins -->
      <section class="hero-section h-screen">
        <div class="grid grid-col-1 lg:grid-cols-2 gap-10 h-screen">
          <div class="h-full flex items-center justify-center pt-44 lg:pt-24">
            <div>
              <div class="flex items-center justify-start">
                <p>{{ greetings }} 👋</p>
              </div>

              <Typewriter
                :words="[
                  'UX Designer',
                  'Frontend Developer',
                  'Visual Designer',
                ]"
              />

              <p class="pt-6 w-11/12 leading-9">
                I'm a UX Designer and Frontend Developer who
                builds products that solve real-time problems through
                user-centric design.
              </p>

              <div class="flex pt-8">
                <BtnPry text=" My Works" href="/projects" />
                <BtnSec
                  text=" Let's talk"
                  href="/contact"
                  class="pl-6 md:pl-8"
                />
              </div>
            </div>
          </div>
          <div
            class="
              h-screen
              flex
              justify-end
              items-start
              mt-12
              lg:mt-0
              lg:items-end
            "
          >
            <img
              class="lg:h-4/5 w-auto"
              src="@/assets/images/Gideon Ogunkola 1.png"
              alt="Gideon Ogunkola"
            />
          </div>
        </div>
      </section>
      <!-- Hero Section Ends -->

      <!--  Project Section Begins  -->
      <section class="projects mt-100 lg:mt-0 sm:mt-200">
        <div class="title lg:pt-16">
          <h1 class="common">My Works</h1>
          <p class="text-center pt-4 pb-12 lg:pb-24">Some selected projects</p>
        </div>

        <div class="grid gap-14 grid-col-1 md:grid-cols-2 xl:grid-cols-3">
          <!-- individual Project -->
            <div v-for="(project, index) in projects" :key="index">
              <nuxt-link
                :to="{ name: 'projects-slug', params: { slug: project.slug } }"
              >
                <div
                  class="
                    mx-auto
                    h-auto
                    flex flex-col
                    lg:w-96
                    lg:h-96
                    rounded-3xl
                    cursor-pointer
                    parent
                  "
                >
                  <img
                    class="w-full"
                    :src="require(`~/assets/images/${project.img}`)"
                    alt="project-image"
                  />
                  <div class="child">
                    <h1 class="text-2xl md:text-3xl font-semibold">
                      {{ project.title }}
                    </h1>
                    <p>{{ project.description }}</p>
                    <p class="text-xl md:text-2xl font-medium pt-6 md:pt-8">
                      {{ project.category }}
                    </p>
                  </div>
                </div>
                <div
                  class="
                    w-full
                    pb-8
                    pl-8
                    pt-14
                    pr-8
                    lg:hidden
                    rounded-b-3xl
                    -mt-6
                  "
                  :class="myShadow"
                >
                  <h1 class="text-2xl md:text-3xl font-semibold">
                    {{ project.title }}
                  </h1>
                  <p>{{ project.description }}</p>
                  <p class="text-xl md:text-2xl font-medium pt-6 md:pt-8">
                    {{ project.category }}
                  </p>
                </div>
              </nuxt-link>
          </div>
          <!-- individual Project Ends -->
        </div>

        <div
          class="
            flex
            justify-between
            mx-auto
            items-center
            h-32
            w-32
            cursor-pointer
          "
        >
          <nuxt-link to="/projects">
            <p class="text-center">See More</p>
          </nuxt-link>
          <nuxt-link to="/projects">
            <span
              class="iconify h-8 w-auto"
              data-icon="bi:arrow-right"
              data-inline="false"
            ></span>
          </nuxt-link>
        </div>
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
                w-52
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
                w-52
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
                w-52
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
                w-52
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
                  I tansfrom the solutions into a high fidelity prototype.
                </p>
              </div>
            </div>
            <div
              class="
                border-2
                h-72
                w-52
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
      <section class="contact">
        <div>
          <div class="title">
            <h1 class="common">Let's Talk</h1>
            <p class="text-center pt-4 pb-12 lg:pb-24">
              I am available for your next project
            </p>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
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
                <p class="pl-6">me@gideonogunkola.com</p>
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
                <p class="pl-6">ogunkolagideon@gmail.com</p>
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
                <p class="pl-6">+234 810 674 4642</p>
              </div>
            </div>

            <div>
              <Form />
            </div>
          </div>
        </div>
      </section>
      <!-- Contact-section Ends -->
    </div>
  </div>
</template>

<script>
export default {
   async asyncData({ $content, params }) {
    const projects = await $content("projects", params.slug)
      .limit(6)
      .only(["title", "description", "category", "slug", "img"])
      .sortBy("CreatedAt", "asc")
      .fetch();
    return { projects };
  },
  data() {
    return {
      greetings: "<Hello there!/>",
      title: "Gideon Ogunkola | UX Designer | Frontend Developer",
      load: false,
    };
  },

  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: "description",
          name: "UX Designer | Frontend Developer",
          content:
            "Gideon is a professional UX Designer and Frontend Developer",
        },
      ],
    };
  },

  computed:{
    myShadow(){
          if(this.$colorMode.preference === 'dark' ){
             return  "shadow-now bg-blue" 
          }else{
              return "shadow-md" 
          }

      },
    myText(){
          if(this.$colorMode.preference === 'dark' ){
             return  "text-secColor" 
          }else{
              return "text-white" 
          }
      },
  }
};
</script>


<style scoped>
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
 .parent{
  position: relative;
}
.parent::after{
  content: '';
  position: absolute;
  height: 100%;
  width:100%;
  top:0;
  left:0;
  background-color: #27a9e1cb;
  opacity:0;
  border-radius: 1.5rem ;
  transition: all 500ms ease-out;
}
.child{
  position: absolute;
  bottom: 3.5rem;
  left: 2.5rem;
  opacity: 0;
  z-index: 9;
}
.parent:hover::after,
.parent:hover .child{
  opacity: 1;
}
</style>
