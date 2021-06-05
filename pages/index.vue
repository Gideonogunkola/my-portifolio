  <template>
  <div class="w-11/12 md:w-4/5 mx-auto text-base md:text-xl">
    <div>
<!-- Preloader Begins -->
     <Preloader v-if="show" />
<!-- Preloader Ends -->
<!-- Hero Section Begins -->
      <section class="hero-section h-screen">
       <div class=" grid grid-col-1 lg:grid-cols-2 gap-10 h-screen">
         <div class=" h-full flex items-center justify-center pt-44 lg:pt-24">
           <div>

             <div class="flex items-center justify-start">
                 <p> {{ greetings  }} 👋 </p>
             </div>
           
              <Typewriter :words = "['UX Designer', 'Frontend Developer', 'Visual Designer']"  />          

              <p class="pt-6 w-11/12 leading-9"> I'm a UX Designer with frontend development expertise
                who loves building products which solve real-time
                problems through user-centric design.</p>

              <div class=" flex pt-8">
                <BtnPry text = " See my works"  href = "/projects"/>
                <BtnSec text = " Let's talk"  href= "/contact" class=" pl-6 md:pl-8"/>
              </div>

           </div>
         </div>
         <div class="h-screen flex justify-end items-start mt-12 lg:mt-0 lg:items-end">
           <img class="lg:h-4/5 w-auto" src="@/assets/images/gideon.png" alt="Gideon Ogunkola">
         </div>
       </div>
      </section>
<!-- Hero Section Ends -->

<!--  Project Section Begins  -->
      <section class="projects mt-100 lg:mt-0 sm:mt-200">
        <div class="title lg:pt-16">
            <h1 class="common  ">My Works</h1>
            <p class="text-center pt-4 pb-12 lg:pb-24">Some selected projects</p>
        </div>

        <div class=" grid gap-14 grid-col-1 md:grid-cols-2 xl:grid-cols-3">
          <!-- individual Project -->
          <div class=" mx-auto h-auto flex flex-col lg:w-96 lg:h-96 rounded-3xl cursor-pointer relative" @mouseenter="toggle">
            <img class=" w-full" src="~/assets/images/Rectangle 6.png" alt="projects">
            <transition name="caption">
            <div class=" h-full w-full bg-pryColor rounded-3xl bg-opacity-80 pt-48 lg:pt-60 pl-10 absolute"
                 v-if="load"
                 @mouseleave="toggleOut"
                 :class="myText" >
              <h1 class="text-2xl md:text-3xl font-semibold">Handy Man</h1>
              <p>An in-demand Service App</p>
              <p class=" text-xl md:text-2xl font-medium pt-6 md:pt-8" >UI/UX - Mobile App Design</p>
            </div>
            </transition>
          </div>
          <!-- individual Project Ends -->

           <!-- individual Project -->
          <div class=" mx-auto h-auto flex flex-col lg:w-96 lg:h-96 rounded-3xl cursor-pointer relative" @mouseenter="toggle">
            <img class=" w-full" src="~/assets/images/Rectangle 7.png" alt="projects">
            <transition name="caption">
            <div class=" h-full w-full bg-pryColor rounded-3xl bg-opacity-80 pt-48 lg:pt-60 pl-10 absolute"
                 v-if="load"
                 @mouseleave="toggleOut"
                 :class="myText" >
              <h1 class="text-2xl md:text-3xl font-semibold">Handy Man</h1>
              <p>An in-demand Service App</p>
              <p class=" text-xl md:text-2xl font-medium pt-6 md:pt-8" >UI/UX - Mobile App Design</p>
            </div>
            </transition>
          </div>
          <!-- individual Project Ends -->

           <!-- individual Project -->
          <div class=" mx-auto h-auto flex flex-col lg:w-96 lg:h-96 rounded-3xl cursor-pointer relative" @mouseenter="toggle">
            <img class=" w-full" src="~/assets/images/Rectangle 8.png" alt="projects">
            <transition name="caption">
            <div class=" h-full w-full bg-pryColor rounded-3xl bg-opacity-80 pt-48 lg:pt-60 pl-10 absolute"
                 v-if="load"
                 @mouseleave="toggleOut"
                 :class="myText" >
              <h1 class="text-2xl md:text-3xl font-semibold">Handy Man</h1>
              <p>An in-demand Service App</p>
              <p class=" text-xl md:text-2xl font-medium pt-6 md:pt-8" >UI/UX - Mobile App Design</p>
            </div>
            </transition>
          </div>
          <!-- individual Project Ends -->

           <!-- individual Project -->
          <div class=" mx-auto h-auto flex flex-col lg:w-96 lg:h-96 rounded-3xl cursor-pointer relative" @mouseenter="toggle">
            <img class=" w-full" src="~/assets/images/Rectangle 9.png" alt="projects">
            <transition name="caption">
            <div class=" h-full w-full bg-pryColor rounded-3xl bg-opacity-80 pt-48 lg:pt-60 pl-10 absolute"
                 v-if="load"
                 @mouseleave="toggleOut"
                 :class="myText" >
              <h1 class="text-2xl md:text-3xl font-semibold">Handy Man</h1>
              <p>An in-demand Service App</p>
              <p class=" text-xl md:text-2xl font-medium pt-6 md:pt-8" >UI/UX - Mobile App Design</p>
            </div>
            </transition>
          </div>
          <!-- individual Project Ends -->

           <!-- individual Project -->
          <div class=" mx-auto h-auto flex flex-col lg:w-96 lg:h-96 rounded-3xl cursor-pointer relative" @mouseenter="toggle">
            <img class=" w-full" src="~/assets/images/Rectangle 10.png" alt="projects">
            <transition name="caption">
            <div class=" h-full w-full bg-pryColor rounded-3xl bg-opacity-80 pt-48 lg:pt-60 pl-10 absolute"
                 v-if="load"
                 @mouseleave="toggleOut"
                 :class="myText" >
              <h1 class="text-2xl md:text-3xl font-semibold">Handy Man</h1>
              <p>An in-demand Service App</p>
              <p class=" text-xl md:text-2xl font-medium pt-6 md:pt-8" >UI/UX - Mobile App Design</p>
            </div>
            </transition>
          </div>
          <!-- individual Project Ends -->

           <!-- individual Project -->
          <div class=" mx-auto h-auto flex flex-col lg:w-96 lg:h-96 rounded-3xl cursor-pointer relative" @mouseenter="toggle">
            <img class=" w-full" src="~/assets/images/Rectangle 6.png" alt="projects">
            <transition name="caption">
            <div class=" h-full w-full bg-pryColor rounded-3xl bg-opacity-80 pt-48 lg:pt-60 pl-10 absolute"
                 v-if="load"
                 @mouseleave="toggleOut"
                 :class="myText" >
              <h1 class="text-2xl md:text-3xl font-semibold">Handy Man</h1>
              <p>An in-demand Service App</p>
              <p class=" text-xl md:text-2xl font-medium pt-6 md:pt-8" >UI/UX - Mobile App Design</p>
            </div>
            </transition>
          </div>
          <!-- individual Project Ends -->

        </div>

        <div class="flex justify-between mx-auto items-center h-32 w-32 cursor-pointer">
          <nuxt-link to="/projects">
             <p class="text-center">See More</p>  
          </nuxt-link>  
          <nuxt-link to="/projects">
          <span class="iconify h-8 w-auto" data-icon="bi:arrow-right" data-inline="false"></span>
          </nuxt-link>
        </div>
      </section>
<!-- Project Section Ends -->

<!-- My Process Begins -->
     <section>
       <div>
          <div class="title">
            <h1 class="common ">My Process</h1>
            <p class="text-center pt-4  pb-12 lg:pb-24">How I come about my solution</p>
          </div>
          <div class="flex md:justify-between justify-center flex-wrap">
            <div class="border-2 h-72 w-52 border-blue-500 rounded-3xl flex items-center mb-8 xl:mb-0">
              <div class="w-4/5 mx-auto">
                 <h3 class="text-2xl font-semibold ">Empathize</h3>
                 <p class="leading-9 pt-4">
                   I understand the 
                    users and the
                    problems i’m 
                    trying to solve.</p>
              </div> 
            </div>
            <div class="border-2 h-72 w-52 border-green-500 rounded-3xl flex items-center mb-8 xl:mb-0">
              <div class="w-4/5 mx-auto">
                 <h3 class="text-2xl font-semibold ">Define</h3>
                 <p class="leading-9 pt-4">
                  I clearly state 
                 the users problems
                  that need 
                  solutions</p>
              </div> 
            </div>
            <div class="border-2 h-72 w-52 border-yellow-500 rounded-3xl flex items-center mb-8 xl:mb-0">
              <div class="w-4/5 mx-auto">
                 <h3 class="text-2xl font-semibold ">Ideate</h3>
                 <p class="leading-9 pt-4">
                  I brainstorm all
                  possible ideas to 
                  solve the problems.</p>
              </div> 
            </div>
            <div class="border-2 h-72 w-52 border-purple-500 rounded-3xl flex items-center mb-8 xl:mb-0">
              <div class="w-4/5 mx-auto">
                 <h3 class="text-2xl font-semibold ">Prototype</h3>
                 <p class="leading-9 pt-4">
                   I tansfrom the 
                  solutions into a 
                  high fidelity
                  prototype.</p>
              </div> 
            </div>
            <div class="border-2 h-72 w-52 border-red-500 rounded-3xl flex items-center mb-8 xl:mb-0">
              <div class="w-4/5 mx-auto">
                 <h3 class="text-2xl font-semibold ">Test</h3>
                 <p class="leading-9 pt-4">
                  I conduct a 
                  usability testing,
                  iterate, and
                  then deliver.</p>
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
            <h1 class="common ">Let's Talk</h1>
            <p class="text-center pt-4 pb-12 lg:pb-24 ">I am available for your next project</p>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
                <p class="pb-6 lg:pb-10 text-xl md:text-2xl font-bold">My Contact Details</p>
                <div class="flex items-center pb-6 md:pb-10">
                    <div class=" h-14 w-14 md:h-20 md:w-20 rounded-full bg-pryColor flex justify-center items-center" :class="myText">
                      <span class="iconify" data-icon="whh:emailalt" data-inline="false"></span>
                    </div>
                    <p class="pl-6">me@gideonogunkola.com</p>
                </div>
                <div class="flex items-center pb-6 md:pb-10">
                    <div class=" h-14 w-14 md:h-20 md:w-20 rounded-full bg-pryColor flex justify-center items-center" :class="myText">
                      <span class="iconify" data-icon="whh:emailalt" data-inline="false"></span>
                    </div>
                    <p class="pl-6">ogunkolagideon@gmail.com</p>
                </div>
                <div class="flex items-center pb-6 md:pb-10">
                    <div class=" h-14 w-14 md:h-20 md:w-20 rounded-full bg-pryColor flex justify-center items-center" :class="myText">
                      <span class="iconify h-7 w-auto" data-icon="fluent:call-24-filled" data-inline="false"></span>
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
import BtnPry from '~/components/UI/BtnPry';
import BtnSec from '~/components/UI/BtnSec';
import Typewriter from '../components/UI/Typewriter';
import Form from '~/components/UI/Form';
import Preloader from '../components/UI/Preloader.vue';
export default {
  transitions: 'caption',

  data(){
    return{
      greetings:'<Hello there!/>',
      title: "Gideon Ogunkola | UX Designer | Frontend Developer",
      show: false,
      load: false,
    }
  },
  
  components:{
    BtnPry,
    BtnSec,
    Typewriter,
    Form,
    Preloader,
  },

  head() {
      return {
        title: this.title,
        meta: [
          {
            hid: 'description',
            name: 'UX Designer | Frontend Developer',
            content: 'Gideon is a professional UX Designer and Frontend Developer'
          }
        ]
      }
    },

      computed:{
      myText(){
        if(this.$colorMode.preference === 'dark' ){
            return  "text-secColor" 
        }else{
            return "text-white" 
        }
    }
  },

  methods:{
    start(){
      this.show = true
    },
    finish(){
      this.show = false
    },
    toggle(){
      this.load = true
    },
    toggleOut(){
      this.load = false
    }
  },  
  }
</script>


<style>
.common {
@apply pt-28 text-3xl leading-tight md:text-4xl lg:text-4xl font-bold md:leading-none text-center xl:pt-36
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
