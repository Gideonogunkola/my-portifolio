<template>
  <div>
    <div class="">
      <TabNav
        :tabs="['UI/UX Design', 'Visual Design', 'Web Development']"
        :selected="selected"
        @selected="setSelected"
      >
      </TabNav>

      <div class="">
        <Tab :isSelected="selected === 'UI/UX Design'">
          <Uiux />
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
      selected: "UI/UX Design"
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
