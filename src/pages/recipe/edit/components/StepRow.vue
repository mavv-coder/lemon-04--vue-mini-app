<template>
  <div class="step-container">
    <div class="text-container">
      {{ step }}
    </div>
    <v-icon right color="rgba(0,0,0,.87)" @click="() => onRemoveStep(step)"
      >close</v-icon
    >
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";

export default Vue.extend({
  name: "StepRowComponent",
  props: {
    step: String,
    onRemoveStep: {} as PropOptions<(step: string) => void>,
  },
});
</script>

<style scoped>
.step-container {
  display: flex;
  font-size: 14px;
  padding: 12px;
  align-items: center;
  border-radius: 16px;
  color: rgba(0, 0, 0, 0.87);
  margin: 8px;
  border: 1px solid rgba(0, 0, 0, 0.12);
}
.step-container:last-of-type {
  margin-bottom: 10px;
}
</style>
