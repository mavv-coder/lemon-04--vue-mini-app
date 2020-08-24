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
        <!-- <table-component :recipes="recipes" /> -->
        <recipe-card :recipes="recipes" />
      </v-card-text>
    </v-card>
  </app-layout>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import { AppLayout } from "../../../common/layouts";
import { Recipe } from "./viewModel";
import { TableComponent, SearchBarComponent } from "./components";
import { RecipeCard } from "./components";

export default Vue.extend({
  name: "RecipeListPage",
  components: { AppLayout, RecipeCard, TableComponent, SearchBarComponent },
  props: {
    recipes: { required: true } as PropOptions<Recipe[]>,
    searchText: String,
    onSearch: { required: true } as PropOptions<(value: string) => void>,
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
