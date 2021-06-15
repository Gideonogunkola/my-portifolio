<template>
  <div class="text-base md:text-xl">
    <Header  :class="background" />
    <Nuxt class="" />
    <Footer class="mt-24" />
  </div>
</template>

<script>

export default {
 
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

  /* width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 20px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #08A0DF;
  border-radius: 5px;
}
.typewriter-msg{
  color:#27AAE1;
}
</style>
