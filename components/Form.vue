<template>
  <div class="text-ligColor dark:text-darColor">
    <form @submit.prevent="sendEmail" class="relative">
      <div>
        <input
          type="text"
          placeholder="Full Name"
          class="form-input common"
          :class="customBorderColor"
          name="name"
          v-model="name"
        />
      </div>
      <div>
        <input
          type="email"
          placeholder="Email Address"
          class="form-input common"
          :class="customBorderColor"
          name="email"
          v-model="email"
        />
      </div>
      <div>
        <textarea
          class="common1 form-textarea"
          placeholder="Message"
          cols="30"
          rows="10"
          :class="customBorderColor"
          name="message"
          v-model="message"
        ></textarea>
      </div>
      <div>
        <button class="common2 h-16 lg:h-normal" :class="myText">
          {{ actionMsg }}
        </button>
      </div>
    </form>
    <p
      v-if="alertMessage"
      v-html="alertMessage"
      class="absolute mt-4"
      :class="{ customColor2: isSuccesss, customColor: isError }"
    ></p>
  </div>
</template>

<script>
import emailjs from "emailjs-com";

export default {
  name: "messageForm",
  data() {
    return {
      name: "",
      email: "",
      message: "",
      alertMessage: null,
      actionMsg: "send",
      isError: false,
      isSuccesss: false
    };
  },
  computed: {
    customBorderColor() {
      if (this.$colorMode.preference === "light") {
        return "border-ligColor";
      } else {
        return "border-darColor";
      }
    },
    myText() {
      if (this.$colorMode.preference === "dark") {
        return "text-secColor";
      } else {
        return "text-white";
      }
    }
  },

  methods: {
    async sendEmail(e) {
      if (this.name && this.email && this.message) {
        this.actionMsg = "Sending...";

        try {
          let result = await emailjs.sendForm(
            "service_affn4zn",
            "template_hf1xe0a",
            e.target,
            "user_5kNfrpVcBTOQaxxsAxwXT"
          );
          // console.log(result);

          // console.log("SUCCESS!", result.status, result.text);

          //reset email
          (this.name = ""),
            (this.email = ""),
            (this.message = ""),
            (this.alertMessage = "Successful! Your message has been sent.");
          this.actionMsg = "send";
          this.isSuccesss = true;
          this.isError = false;

          //timeout
          setTimeout(() => (this.alertMessage = null), 3000);
        } catch (error) {
          console.log("Failed", error);
          this.alertMessage = "Failed! check your network and try again.";
          this.actionMsg = "send";
          this.isError = true;
          this.isSuccesss = false;
          //timeout
          setTimeout(() => (this.alertMessage = null), 3000);
        }
      } else {
        this.isError = true;
        this.alertMessage =
          " Check your inputs and try again. <br> (All fields are required)";
        //timeout
        setTimeout(() => (this.alertMessage = null), 3000);
      }
    }

    // sendEmail(e) {
    //     try {
    //         emailjs.sendForm('service_affn4z', 'template_hf1xe0a', e.target, 'user_5kNfrpVcBTOQaxxsAxwXT', {
    //         name: this.name,
    //         email: this.email,
    //         message: this.meessage
    //         })
    //         this.action = 'sending...'
    //         this.alertMessage = 'Message sent sucessfully'
    //         setTimeout(() => this.alertMessage = null,
    //         3000)
    //     } catch (error) {
    //         console.log({error})
    //     }
    //     // Reset form field
    //     this.name = ''
    //     this.email = ''
    //     this.message = ''
    //     },
  }
};
</script>

<style scoped>
.common {
  @apply text-xl md:text-2xl px-6 lg:px-10 mb-6 py-3 h-20 w-full rounded-3xl 
                bg-transparent border-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-pryColor;
}
.common1 {
  @apply text-xl md:text-2xl px-6 lg:px-10 mb-6 py-3 h-40 w-full rounded-3xl 
                bg-transparent border-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-pryColor;
}
.common2 {
  @apply w-36 md:w-44 rounded-3xl bg-pryColor flex justify-center items-center cursor-pointer 
           focus:border-pryColor focus:outline-none -mt-3 lg:w-48 hover:bg-transparent hover:text-pryColor border-pryColor border-2 duration-300 ease-linear;
}
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  -webkit-transition: "color 9999s ease-out, background-color 9999s ease-out inset";
  -webkit-transition-delay: 9999s;
}
.customColor {
  @apply text-red-600 bg-red-300 bg-opacity-30 p-2 rounded-xl border-red-600 border-2;
}
.customColor2 {
  @apply text-green-600 bg-green-300 bg-opacity-30 p-2 rounded-xl border-green-600 border-2;
}
</style>
