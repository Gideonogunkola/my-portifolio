<template>
  <div class="lg:w-8/12 w-72 m-auto py-3">
    <div
      class="flex flex-wrap justify-around cursor-pointer first"
      :class="myShadow"
    >
      <div v-for="tab in tabs" :key="tab">
        <div
          class=" w-72 mx-6 lg:mx-0 lg:w-full border-gray-300 border-b lg:border-0"
          :class="{ active: tab === selected }"
        >
          <div class=" text-center py-5 px-8 " @click="setTab(tab)">
            {{ tab }}
          </div>
        </div>
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    tabs: {
      type: Array,
      required: true
    },
    selected: {
      type: String,
      required: true
    }
  },
  methods: {
    setTab(tab) {
      this.$emit("selected", tab);
    }
  },
  computed: {
    myShadow() {
      if (this.$colorMode.preference === "dark") {
        return "lg:shadow-now";
      } else {
        return "lg:shadow-md";
      }
    }
  }
};
</script>

<style>
.active {
  @apply border-b-4 border-pryColor;
}

@media screen and (max-width: 992px) {
  .first:first-child {
    border-top: 1px solid #ebebeb;
  }
}
</style>
