<template>
    <div class="h-24 fixed w-full z-10 animated top-0" :class="myShadow">
        <div class="w-11/12 md:w-4/5 m-auto h-24 flex justify-between items-center " >
            <div>
                <nuxt-link to="/">
                    <img :src="imageUrl" alt="logo">    
                </nuxt-link>  
            </div>
            <div class="flex items-center justify-between w-2/3 md:w-2/4 lg:w-2/4 xl:w-1/4">
                <div class="flex items-center">
                    <div class="w-12 h-4 md:w-14 md:h-4 flex items-center bg-gray-300 rounded-full duration-500 ease-in-out cursor-pointer"
                         @click=" toggle"
                         :class="{ 'bg-gray-500': toggleActive,}">
                        <!-- Switch -->
                        <div class="bg-pryColor w-6 h-6 md:w-7 md:h-7 rounded-full shadow-md transform duration-500 ease-in-out cursor-pointer" 
                        :class="{ 'translate-x-6 md:translate-x-7': toggleActive,}"></div>
                    </div>   
                    <p class="text-xl md:text-xl pl-2"> Mode </p>  
                </div>
        
                <div class="flex items-center" @click="navbar">
                 <span class="iconify text-pryColor w-12 h-12 cursor-pointer" data-icon="heroicons-solid:menu-alt-3" data-inline="false" 
                  ></span>
                 <p class=" hidden md:block text-xl"> Menu </p>
                </div>
            </div>
        </div> 
        <Menu :show = "displayMenu"/>
    </div>
    
</template>

<script>
export default {
    
  data(){
      return{
          toggleActive: false,
          displayMenu: false
      }
  }  ,
  methods:{
      toggle(){
          this.toggleActive = !this.toggleActive
          this.$colorMode.preference = 
                this.$colorMode.preference === 'dark' ? 'light' : 'dark'
               this.displayMenu = false
      },
      navbar(){
         this.displayMenu = !this.displayMenu
      }
  },
  computed:{
      imageUrl(){
          if(this.$colorMode.preference === 'light' ){
             return  require(`~/assets/images/logo.svg`) 
          }else{
              return require(`~/assets/images/logo2.svg`) 
          }
      },
      myShadow(){
          if(this.$colorMode.preference === 'dark' ){
             return  "shadow-now" 
          }else{
              return "shadow-md" 
          }
      }
  },
  beforeMount(){
       if(this.$colorMode.preference === 'light'){
            this.toggleActive = false
        }else{
            this.toggleActive = true
        }
  }
}
</script>