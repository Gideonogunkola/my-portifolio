<template>
    <div class="w-11/12 md:w-4/5 mx-auto text-base md:text-xl mt-24">
         <section class="contact">
        <div>
          <div class="title">
            <h1 class="common mt-20 lg:mt-40 ">Let's Talk</h1>
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
    </div>
</template>

<script>
export default {
    
       computed:{
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
        @apply pt-16 text-center text-3xl leading-tight md:text-4xl lg:text-4xl font-bold md:leading-none xl:pt-0
}
</style>