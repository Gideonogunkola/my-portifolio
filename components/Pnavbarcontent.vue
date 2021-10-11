<template>
  <div>
    <div class="pt-20 lg:pt-12 text-xl lg:text-2xl">
      <TabNav
        :tabs="['UX Design', 'Visual Design', 'Web Development']"
        :selected="selected"
        @selected="setSelected"
      >
      </TabNav>
      <div class="">
        <Tab :isSelected="selected === 'UX Design'">
          <Pux />
        </Tab>
        <Tab :isSelected="selected === 'Visual Design'">
          <Pvisual />
        </Tab>

        <Tab :isSelected="selected === 'Web Development'">
          <Pweb />
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
