<template>
  <v-row wrap class="mb-4">
    <ingredient-row-component
      v-for="(ingredient, index) in ingredients"
      :key="`${ingredient}_${index}`"
      :ingredient="ingredient"
      :on-remove-ingredient="onRemoveIngredient"
    />
  </v-row>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import IngredientRowComponent from "./IngredientRow.vue";

interface Props {
  ingredients: PropOptions<string[]>;
  onRemoveIngredient: PropOptions<(ingredient: string) => void>;
}

export default Vue.extend({
  name: "IngredientListComponent",
  components: { IngredientRowComponent },
  props: {
    ingredients: { required: true },
    onRemoveIngredient: { required: true },
  } as Props,
});
</script>
