<template>
  <v-card class="card">
    <card-image-component :recipe="recipe" />
    <card-title-component v-bind="{ recipe, navigateToEdit }" />
  </v-card>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import { Recipe } from "../../../common/model";
import CardImageComponent from "./CardImage.vue";
import CardTitleComponent from "./CardTitle.vue";

interface Props {
  recipe: PropOptions<Recipe>;
  navigateToEdit: PropOptions<(id: number) => void>;
}

export default Vue.extend({
  name: "cardComponent",
  components: { CardImageComponent, CardTitleComponent },
  props: {
    recipe: { required: true },
    navigateToEdit: { required: true },
  } as Props,
});
</script>

<style scoped>
.card {
  width: 70%;
  margin: 0 auto;
  padding: 20px;
}
</style>
