<template>
  <div>
    <div class="time-container">
      <v-icon>mdi-clock-time-four-outline</v-icon>
      <span class="time-text">{{ `${recipe.time}'` }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import { Recipe } from "../../../common/model";

interface Props {
  recipe: PropOptions<Recipe>;
}

export default Vue.extend({
  name: "CardDetailsComponent",
  props: {
    recipe: { required: true },
  } as Props,
});
</script>

<style scoped></style>
