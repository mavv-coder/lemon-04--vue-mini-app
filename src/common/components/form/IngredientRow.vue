<template>
  <v-chip outlined class="ma-2">
    {{ ingredient }}
    <v-icon right @click="() => onRemoveIngredient(ingredient)">close</v-icon>
  </v-chip>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";

interface Props {
  ingredient: PropOptions<string>;
  onRemoveIngredient: PropOptions<(ingredient: string) => void>;
}

export default Vue.extend({
  name: "IngredientRowComponent",
  props: {
    ingredient: { required: true },
    onRemoveIngredient: { required: true },
  } as Props,
});
</script>
