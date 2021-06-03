<template>
    <div>  
         <div class="h-14 w-36 md:h-16 md:w-44 rounded-3xl bg-pryColor flex justify-center items-center cursor-pointer" :class="myText">
            <nuxt-link   :to="href">
            {{text}}
            </nuxt-link> 
        </div> 
        
    </div>
</template>

<script>
export default {
  props: {
    text: String,
    href: {
        type: String,
        default: null
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
}
}
</script>
