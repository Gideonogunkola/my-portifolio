<template>
  <div>
    <div class="pt-20 lg:pt-12">
      <TabNav
        :tabs="['UI/UX Design', 'Visual Design', 'Web Development']"
        :selected="selected"
        @selected="setSelected"
      >
      </TabNav>
      <div class="">
        <Tab :isSelected="selected === 'UI/UX Design'">
          <Puiux />
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
