<template>
  <div>
    <Header  :class="background" />
    <Nuxt />
  </div>
</template>

<script>
import Header from '~/components/Navigation/Header'
export default {
  components:{
    Header,
  },
   computed:{
        background(){
          if(this.$colorMode.preference === 'dark' ){
             return  "bg-secColor" 
          }else{
              return "bg-white" 
          }
      }
    },
}
</script>

<style>
html {
  font-family:'begum', serif;
}
body{
  margin: 0;
}
.dark-mode {
        @apply text-white bg-secColor;
    }

.light-mode {
        @apply text-secColor bg-white;
    }
</style>
