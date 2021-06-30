<template>
  <keep-alive>
    <div v-if="isSelected">
      <slot></slot>
    </div>
  </keep-alive>
</template>

<script>
export default {
  props: {
    isSelected: {
      type: Boolean
    }
  }
};
</script>

<style></style>
