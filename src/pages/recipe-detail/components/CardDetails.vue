<template>
  <div>
    <div class="flex-container">
      <v-icon class="icon" color="#D32F2F">mdi-clock-time-four-outline</v-icon>
      <span class="time-text">{{ `${recipe.time} min` }}</span>
    </div>
    <div class="flex-container">
      <v-icon class="icon" color="#D32F2F">mdi-silverware-fork-knife</v-icon>
      <span class="difficulty-text">{{ recipe.difficulty }}</span>
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

<style scoped>
.flex-container {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.icon {
  margin-right: 5px;
}
</style>
