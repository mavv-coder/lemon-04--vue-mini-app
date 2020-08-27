<template>
  <v-card class="card">
    <card-image-component :recipe="recipe" />
    <card-title-component v-bind="{ recipe, navigateToEdit }" />
    <p class="recipe-description">
      {{ recipe.description }}
    </p>
    <p class="ingredient-title">Ingredients:</p>
    <card-ingredient-list :recipe="recipe" />
    <v-divider></v-divider>
    <div class="btn-container">
      <v-btn small color="primary" @click="navigateBack">Go back</v-btn>
    </div>
  </v-card>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import { Recipe } from "../../../common/model";
import CardImageComponent from "./CardImage.vue";
import CardTitleComponent from "./CardTitle.vue";
import CardIngredientList from "./CardIngredientList.vue";

interface Props {
  recipe: PropOptions<Recipe>;
  navigateBack: PropOptions<() => void>;
  navigateToEdit: PropOptions<(id: number) => void>;
}

export default Vue.extend({
  name: "cardComponent",
  components: { CardImageComponent, CardTitleComponent, CardIngredientList },
  props: {
    recipe: { required: true },
    navigateBack: { required: true },
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

.recipe-description {
  margin-top: 30px;
}

.ingredient-title {
  font-weight: 700;
  margin-top: 30px;
}

.btn-container {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 20px;
}
</style>
