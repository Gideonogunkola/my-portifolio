<template>
    <div>
        <transition name="myMenu">
            <section class="relative" :class="background" v-if="show" >
                    <div class="w-11/12 md:w-4/5 m-auto">               
                    <ul class=" pt-14 pb-24">
                        <li class="menu"><nuxt-link to="/">Home</nuxt-link></li>
                        <li class="menu"><nuxt-link to="/projects">My Works</nuxt-link></li>
                        <li class="menu"><nuxt-link to="/about">About Me</nuxt-link></li>
                        <p class="pt-14 text-right font-bold text-xl">Let's Talk</p>
                        <p class="pt-3 text-right text-xl"><a href="mailto:me@gideonogunkola.com">me@gideonogunkola.com</a></p>
                        <p class="pt-1 text-right text-xl"><a href="mailto:ogunkolagideon@gmail.com">ogunkolagideon@gmail.com</a></p>
                        <p class="pt-1 text-right text-xl"><a href="tel:+234 810 674 4642">+234 810 674 4642</a>2</p>
                    </ul>
                </div>   
            </section>
        </transition>
    </div>
</template>

<script>
export default {
    transition: 'myMenu',

    computed:{
        background(){
          if(this.$colorMode.preference === 'dark' ){
             return  "bg-secColor" 
          }else{
              return "bg-white" 
          }
      }
    },

   props: {
    show: {
      type: Boolean,
      default: false
    }
  },

  watch: {
    $route() {
      this.show = false;
    }
  }
   
}
</script>

<style scoped>
.menu {
@apply text-3xl font-bold py-5 text-right
}
.myMenu-enter-active,
.myMenu-leave-active {
  transition: opacity 0.8s;
}
.myMenu-enter,
.myMenu-leave-to {
  opacity: 0;
}
</style>