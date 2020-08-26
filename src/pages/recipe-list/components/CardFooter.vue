<template>
  <div class="footer">
    <v-btn outlined small color="#F57F17" @click="navigateToDetail(recipe.id)"
      >See more</v-btn
    >
    <!-- <div class="btn-container">
            <v-icon
              v-if="!checkIsFav(recipe.id)"
              @click="toggleRecipeFav(recipe)"
              class="edit-icon"
              >mdi-heart-outline</v-icon
            >
            <v-icon
              v-if="checkIsFav(recipe.id)"
              @click="toggleRecipeFav(recipe)"
              class="edit-icon"
              color="#D32F2F"
              >mdi-heart</v-icon
            > -->
    <div class="btn-container">
      <v-icon class="edit-icon">mdi-heart-outline</v-icon>
      <!-- <v-icon class="edit-icon" color="#D32F2F">mdi-heart</v-icon> -->
      <v-icon class="edit-icon" @click="navigateToEdit(recipe.id)"
        >mdi-pencil</v-icon
      >
      <v-icon color="#FF6E40" @click="deleteRecipe(recipe.id)"
        >mdi-trash-can-outline</v-icon
      >
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import { Recipe } from "../viewModel";

interface Props {
  recipe: PropOptions<Recipe>;
  deleteRecipe: PropOptions<(id: number) => void>;
  navigateToEdit: PropOptions<(id: number) => void>;
  navigateToDetail: PropOptions<(id: number) => void>;
}

export default Vue.extend({
  name: "CardFooterComponent",
  props: {
    recipe: { required: true },
    deleteRecipe: { required: true },
    navigateToEdit: { required: true },
    navigateToDetail: { required: true },
  } as Props,
});
</script>

<style scoped>
.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0 2px 0;
}

.btn-container {
  display: flex;
  justify-content: flex-end;
}

.edit-icon {
  margin-right: 10px;
}
</style>
