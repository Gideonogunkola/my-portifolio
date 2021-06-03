<template>
  <div class="w-11/12 md:w-4/5 mx-auto text-base md:text-xl">
    <div>
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

<!-- Project Section Begins        -->
      <section class="projects mt-100 lg:mt-0">
        <div class="title lg:pt-16">
            <h1 class="common  ">My Works</h1>
            <p class="text-center pt-4 pb-12">Some selected projects</p>
        </div>

        <div class=" grid gap-14 grid-col-1 md:grid-cols-2 xl:grid-cols-3">
          <div class=" mx-auto h-auto flex lg:w-96 lg:h-96 cursor-pointer">
            <img class=" w-full transform transition duration-500 hover:scale-100" src="~/assets/images/Rectangle 6.png" alt="projects">
          </div>
          <div class=" mx-auto h-auto flex lg:w-96 lg:h-96 cursor-pointer">
            <img class=" w-full transform transition duration-500 hover:scale-100" src="~/assets/images/Rectangle 7.png" alt="projects">
          </div>
          <div class=" mx-auto h-auto flex lg:w-96 lg:h-96 cursor-pointer ">
            <img class=" w-full transform transition duration-500 hover:scale-100" src="~/assets/images/Rectangle 8.png" alt="projects">
          </div>
            <div class=" mx-auto h-auto flex lg:w-96 lg:h-96 cursor-pointer ">
            <img class=" w-full transform transition duration-500 hover:scale-100" src="~/assets/images/Rectangle 9.png" alt="projects">
          </div>
            <div class=" mx-auto h-auto flex lg:w-96 lg:h-96 cursor-pointer">
            <img class=" w-full transform transition duration-500 hover:scale-100" src="~/assets/images/Rectangle 10.png" alt="projects">
          </div>
            <div class=" mx-auto h-auto flex lg:w-96 lg:h-96 cursor-pointer">
            <img class=" w-full transform transition duration-500 hover:scale-100" src="~/assets/images/Rectangle 11.png" alt="projects">
          </div>
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
            <p class="text-center pt-4 pb-12 ">How I come about my solution</p>
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
                  the painpoints
                  that need 
                  solution</p>
              </div> 
            </div>
            <div class="border-2 h-72 w-52 border-yellow-500 rounded-3xl flex items-center mb-8 xl:mb-0">
              <div class="w-4/5 mx-auto">
                 <h3 class="text-2xl font-semibold ">Ideate</h3>
                 <p class="leading-9 pt-4">
                  I brainstorm all
                  possible ideas to 
                  solve the pro-
                  blems identified.</p>
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
                  iterate , and
                  then deliver..</p>
              </div> 
            </div>

          </div>
       </div>
     </section>
<!-- My Process Ends -->

<!-- Cotact-section Begins -->
      <section class="contact">
        <div>
          <div class="title">
            <h1 class="common ">Let's Talk</h1>
            <p class="text-center pt-4 pb-12 ">I am available for your next project</p>
          </div>

          <div>
            <div>
              <div>
                
              </div>
            </div>
            <div>

            </div>
          </div>
        </div>
      </section>
<!-- Cotact-section Ends -->
  </div>
  </div>
</template>

<script> 
import BtnPry from '~/components/UI/BtnPry';
import BtnSec from '~/components/UI/BtnSec';
import Typewriter from '../components/UI/Typewriter.vue';
export default {

  data(){
    return{
      greetings:'<Hello there!/>',
    }
  },
  components:{
    BtnPry,
    BtnSec,
    Typewriter,
  },
  
  }
</script>


<style>
.common {
@apply pt-28 text-3xl leading-tight md:text-4xl lg:text-4xl font-bold md:leading-none text-center xl:pt-36
}

</style>
