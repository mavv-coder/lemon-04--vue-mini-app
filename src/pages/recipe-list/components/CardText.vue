<template>
  <div>
    <h4 class="recipe-title">{{ recipe.name }}</h4>
    <v-divider></v-divider>
    <div class="text-container">
      {{ shortenDescriptionLength(recipe.description) }}
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import { Recipe } from "../viewModel";

interface Props {
  recipe: PropOptions<Recipe>;
  shortenDescriptionLength: PropOptions<(description: string) => string>;
}

export default Vue.extend({
  name: "CardTextComponent",
  props: {
    recipe: { required: true },
    shortenDescriptionLength: { required: true },
  } as Props,
});
</script>

<style scoped>
.recipe-title {
  color: #263238;
  font-weight: 400;
  margin-bottom: 5px;
  text-transform: uppercase;
  font-size: 16px;
  letter-spacing: 0.5px;
}

.text-container {
  height: 90px;
  overflow: hidden;
  margin: 10px 0;
}
</style>
