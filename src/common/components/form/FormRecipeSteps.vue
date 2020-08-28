<template>
  <div>
    <h3>Select the preparation steps for the recipe</h3>

    <div class="form-field">
      <v-text-field
        filled
        label="Steps"
        placeholder="Add step"
        append-icon="add"
        :value="step"
        @input="(x) => handleItemValue(x, 'step')"
        @click:append="handleAddStep(step)"
      />
      <v-alert :value="!recipeError.steps.succeeded" color="error" outlined>{{
        recipeError.steps.message
      }}</v-alert>
      <v-row wrap class="mb-4">
        <template v-for="(step, index) in recipe.steps">
          <div class="step-container" :key="`${step}_${index}`">
            <div class="text-container">
              {{ step }}
            </div>
            <v-icon
              right
              color="rgba(0,0,0,.87)"
              @click="() => onRemoveStep(step)"
              >close</v-icon
            >
          </div>
        </template>
      </v-row>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import { Recipe, RecipeError } from "../../model";

interface Props {
  recipe: PropOptions<Recipe>;
  step: PropOptions<string>;
  recipeError: PropOptions<RecipeError>;
  handleAddStep: PropOptions<(step: string) => void>;
  onRemoveStep: PropOptions<(step: string) => void>;
  handleItemValue: PropOptions<(ingredient: string, field: string) => void>;
}

export default Vue.extend({
  name: "FormRecipeStepsComponent",
  props: {
    recipe: { required: true },
    step: { required: true },
    recipeError: { required: true },
    handleAddStep: { required: true },
    onRemoveStep: { required: true },
    handleItemValue: { required: true },
  } as Props,
});
</script>

<style scoped>
.form-field {
  border: 1px solid #424242;
  padding: 25px 25px 4px 25px;
  margin-bottom: 40px;
}

h3 {
  color: #424242;
}

.step-container {
  display: flex;
  width: 100%;
  font-size: 14px;
  justify-content: space-between;
  padding: 6px 12px;
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
