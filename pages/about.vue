<template>
 <div class="w-11/12 md:w-4/5 mx-auto text-xl md:text-2xl">
    <div class="grid grid-cols-1 lg:grid-cols-3">
        <div class="content-area lg:mt-24 flex items-center lg:items-end  col-span-2">
            <img class=" img w-auto" src="~/assets/images/Gideon Ogunkola 2.png" alt="Gideon Ogunkola">
        </div>
        <div class="content-area -mt-28 mb-36 lg:mb-0 lg:mt-24 flex  lg:items-center">
            <div>
                <h1 class="common">About Me</h1>
            <p class="leading-9 mt-8 mb-8">
                I am a UX Designer and Frontend Developer who is passionate about design for inclusion and acessibility.
                 I admire woking on diverse projects that make people happy through
                 simplified interaction visual design. I build progressive web App using Vue.js(Nuxt.js).
                 I am an expert in design applications such as Adobe Suites, Figma, Framer and Protopie.</p>
            <div>
                <BtnPry text = "My Resume"  href = "/projects"/>
            </div>
            </div> 
        </div>  
    </div>
 </div>
</template>

<script>
export default {
    
}
</script>
    
<style scoped>
.content-area {
  height: calc(100vh - theme('spacing.24'));
}
.img{
    height: 90%;
}
@media screen and (max-width: 700px) {
    .img{
        height: 50%;
    }
}
.common {
@apply pt-16 text-center lg:text-left text-3xl leading-tight md:text-4xl lg:text-4xl font-bold md:leading-none xl:pt-0
}

</style>