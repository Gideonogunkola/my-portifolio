<template>
  <div class="">
    <h2 class="pt-8 text-3xl leading-tight md:text-6xl  lg:text-5xl xl:text-h1 font-bold md:leading-none">I'm Gideon Ogunkola, <br> A <span class="text-pryColor">  {{ displayText.join("") }}</span></h2>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    speed: {
      type: Number,
      default: 300
    },
    deleteSpeed: {
      type: Number,
      default: 50
    },
    words: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      displayText: [],
      currentWord: "",
      wordIdx: 0,
    };
  },
  computed: {
    // can adjust speeds based on other factors if needed
    TYPE_SPEED() { return this.speed } ,
    DELETE_SPEED(){ return this.deleteSpeed },
    timeoutSpeed:{
      get(){
         return this.TYPE_SPEED * 0.8
      }
    },
    // timeoutSpeed() { return this.TYPE_SPEED * 0.8 },
  },
  mounted() {
    this.start();
  },
  methods: {
    start() {
      if (this.words && this.words.length > 0) {
        this.currentWord = this.words[this.wordIdx].split("");
        this.wordIdx++;
        this.animate = setTimeout(this.type, this.timeoutSpeed);
      }
    },
    type(word) {
      // if typing...
      if (this.currentWord.length > 0) {
        this.displayText.push(this.currentWord.shift());
        // if done typing, then delete
      } else if (this.currentWord.length === 0 && this.displayText.length > 0) {
        this.timeoutSpeed = this.DELETE_SPEED;
        this.displayText.pop();
        // if done typing & deleting
      } else if (
        this.currentWord.length === 0 &&
        this.displayText.length === 0
      ) {
        // change words
        if (this.wordIdx < this.words.length) {
          this.currentWord = this.words[this.wordIdx].split("");
          this.wordIdx++;
          this.timeoutSpeed = this.TYPE_SPEED;
          this.displayText.push(this.currentWord.shift());
        } else {
          // reset
          this.wordIdx = 0;
          this.currentWord = this.words[this.wordIdx].split("");
          this.displayText.push(this.currentWord.shift());
        }
      }
      setTimeout(this.type, this.timeoutSpeed);
    }
  }
}
</script>