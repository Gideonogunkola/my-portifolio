<template>
<div>
   <form @submit.prevent="">
        <div>
         <input type="text" placeholder="Full Name" class=" form-input common" 
                :class="customBorderColor">
        </div>
        <div>
         <input type="email" placeholder="Email Address" class=" form-input common" 
                :class="customBorderColor">
        </div>
        <div>
            <textarea class="common1 form-textarea" placeholder="Message" cols="30" rows="10"
                  :class="customBorderColor"></textarea>
        </div>
        <div>
            <button class="common2 h-16 lg:h-normal" :class="myText">Submit</button>
        </div>
    </form>
</div>
 
</template>

<script>
export default {
     computed:{
      customBorderColor(){
          if(this.$colorMode.preference === 'dark' ){
             return  "border-white"
          }else{
              return "border-secColor"
          }
      },
       myText(){
          if(this.$colorMode.preference === 'dark' ){
             return  "text-secColor" 
          }else{
              return "text-white" 
          }
      }
  },
}
</script>

<style scoped>
  .common {
        @apply  text-base md:text-xl px-6 lg:px-16 mb-6 py-3 h-20 w-full rounded-3xl 
                bg-transparent border-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-pryColor
}
.common1{
        @apply  text-base md:text-xl px-6 lg:px-16 mb-6 py-3 h-40 w-full rounded-3xl 
                bg-transparent border-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-pryColor
}
.common2{
    @apply  w-36 md:w-44 rounded-3xl bg-pryColor flex justify-center items-center cursor-pointer 
           focus:border-transparent focus:outline-none -mt-3 lg:w-48 
}
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
    -webkit-transition: "color 9999s ease-out, background-color 9999s ease-out inset";
    -webkit-transition-delay: 9999s;
}

</style>