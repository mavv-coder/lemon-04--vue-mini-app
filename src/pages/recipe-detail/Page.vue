<template>
  <app-layout>
    <v-card class="card">
      <div class="img-container">
        <img :src="recipe.imgUrl" :alt="recipe.name" />
      </div>

      <div class="title-container">
        <h1 class="recipe-title">
          {{ recipe.name }}
        </h1>
        <div class="icon-container">
          <v-icon class="fav-icon" size="25" color="#D32F2F">mdi-heart</v-icon>
          <v-icon class="edit-icon">mdi-pencil</v-icon
          ><v-icon color="#FF6E40">mdi-trash-can-outline</v-icon>
        </div>
      </div>
      <div class="time-container">
        <v-icon>mdi-clock-time-four-outline</v-icon>
        <span class="time-text">{{ `${recipe.time}'` }}</span>
      </div>

      <div class="recipe-text">
        <p class="recipe-description">
          {{ recipe.description }}
        </p>
        <p class="ingredient-title">Ingredients:</p>
        <ul class="ingredient-list">
          <template v-for="(ingredient, index) in recipe.ingredients">
            <li :key="`${ingredient}-${index}`" class="ingredient-container">
              <v-icon size="20" color="#D32F2F">mdi-chevron-right</v-icon>
              <div class="ingredient">{{ ingredient }}</div>
            </li>
          </template>
        </ul>
        <p class="ingredient-title">Steps:</p>
        <ul class="recipe-steps">
          <template v-for="(step, index) in recipe.steps">
            <li
              :key="`${Math.floor(Math.random())}-${index}`"
              class="step-container"
            >
              <p class="step-number">{{ index + 1 }}</p>
              <div class="step">{{ step }}</div>
            </li>
          </template>
        </ul>
        <v-divider></v-divider>
        <v-btn small color="primary" @click="handleGoBackBtn">Go back</v-btn>
      </div>
    </v-card>
  </app-layout>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import { Recipe } from "./viewModel";
import { AppLayout } from "../../common/layouts";

export default Vue.extend({
  name: "RecipeDetailPage",
  components: { AppLayout },
  props: {
    recipe: { require: true } as PropOptions<Recipe>,
  },
  methods: {
    handleGoBackBtn() {
      this.$router.back();
    },
  },
});
</script>
<style scoped>
.card {
  width: 70%;
  margin: 0 auto;
  padding: 20px;
}

.title-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  margin-top: 20px;
  border-bottom: 2px solid red;
}

.recipe-title {
  text-transform: uppercase;
  font-size: 25px;
  font-weight: 400;
}

.img-container {
  width: 100%;
}
.ingredient-container {
  display: flex;
  align-items: baseline;
}

.img-container img {
  width: 100%;
}

.recipe-text {
  width: 100%;
  margin-top: 15px;
}

.recipe-description {
  margin-top: 30px;
}

.ingredient-title {
  font-weight: 700;
  margin-top: 30px;
}

.ingredient {
  text-transform: capitalize;
}
.recipe-steps {
  list-style: none;
  margin: 0;
  padding: 0;
}
.ingredient-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.step-container {
  display: flex;
  justify-content: flex-start;
  align-items: baseline;
  margin-bottom: 15px;
}
.step-number {
  font-size: 20px;
  color: #d32f2f;
  margin-right: 10px;
}

.icon-container {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.time-container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 4px;
  margin-top: 30px;
  padding-right: 4px;
}
.step {
  border-left: 2px solid #d32f2f;
  padding-top: 0;
  padding-left: 10px;
}
</style>
