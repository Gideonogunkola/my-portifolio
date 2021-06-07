<template>
    <div>  
         <div class="h-16 w-36 lg:h-normal lg:w-48 md:w-44 rounded-3xl text-pryColor border-pryColor border-2 flex justify-center items-center cursor-pointer ">
            <nuxt-link   :to="href">
            {{text}}
        </nuxt-link> </div> 
        
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
}
</script>
