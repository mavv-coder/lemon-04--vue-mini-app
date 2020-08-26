<template>
  <v-row wrap class="mb-4">
    <step-row-component
      v-for="(step, index) in steps"
      :key="`${step}_${index}`"
      :step="step"
      :on-remove-step="onRemoveStep"
    />
  </v-row>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import StepRowComponent from "./StepRow.vue";

export default Vue.extend({
  name: "IngredientListComponent",
  components: { StepRowComponent },
  props: {
    steps: { required: true } as PropOptions<string[]>,
    onRemoveStep: { required: true } as PropOptions<(step: string) => void>,
  },
});
</script>
