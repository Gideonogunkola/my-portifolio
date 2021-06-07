<template>
    <div>  
         <div class="h-16 w-36 lg:h-normal md:w-44 lg:w-48 rounded-3xl bg-pryColor flex justify-center items-center cursor-pointer " :class="myText">
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
