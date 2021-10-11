<template>
  <div>
    <div class="lg:pt-12 text-xl lg:text-2xl">
      <TabNav
        :tabs="['UX Design', 'Visual Design', 'Web Development']"
        :selected="selected"
        @selected="setSelected"
      >
      </TabNav>
      <div class="">
        <Tab :isSelected="selected === 'UX Design'">
          <Ux />
        </Tab>
        <Tab :isSelected="selected === 'Visual Design'">
          <Visual />
        </Tab>

        <Tab :isSelected="selected === 'Web Development'">
          <Web />
        </Tab>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: "UX Design"
    };
  },
  methods: {
    setSelected(tab) {
      this.selected = tab;
    }
  }
};
</script>

<style scoped>
.width {
  width: 35rem;
}
</style>
