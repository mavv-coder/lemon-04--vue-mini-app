<template>
  <app-layout>
    <v-card>
      <div class="card-header">
        <v-card-title class="text-h4">
          Recipes
        </v-card-title>
        <v-btn color="#F57F17" outlined
          >Add new<v-icon color="#F57F17">mdi-plus</v-icon></v-btn
        >
      </div>
      <v-card-text>
        <search-bar-component :search-text="searchText" :on-search="onSearch" />
        <card-component v-bind="{ recipes, deleteRecipe, toggleFavorite }" />
      </v-card-text>
    </v-card>
  </app-layout>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import { AppLayout } from "../../common/layouts";
import { Recipe } from "./viewModel";
import { SearchBarComponent } from "./components";
import { CardComponent } from "./components";

export default Vue.extend({
  name: "RecipeListPage",
  components: { AppLayout, CardComponent, SearchBarComponent },
  props: {
    deleteRecipe: { required: true } as PropOptions<(id: number) => void>,
    recipes: { required: true } as PropOptions<Recipe[]>,
    searchText: String,
    onSearch: { required: true } as PropOptions<(value: string) => void>,
    toggleFavorite: { required: true } as PropOptions<
      (id: number, value: boolean) => void
    >,
  },
});
</script>

<style scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 16px;
}
</style>
