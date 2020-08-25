<template>
  <v-row no-gutters>
    <v-col v-for="recipe in recipes" :key="recipe.id" cols="12" sm="4">
      <v-card class="pa-2 card relative">
        <div class="time-container">
          <v-icon color="#F57F17">mdi-clock-time-four-outline</v-icon>
          <span class="time-text">{{ `${recipe.time}'` }}</span>
        </div>
        <!-- <img :src="url[index]" /> -->
        <!-- <img :src="`../../../../assets/img/${recipe.imgUrl}`" /> -->
        <img :src="`./img/${recipe.imgUrl}`" />
        <!-- <img src="../../../../assets/img/broccoli-cheesy-bread.jpg" /> -->
        <h4 class="recipe-title">{{ recipe.name }}</h4>
        <v-divider></v-divider>
        <div class="text-container">
          {{ shortenDescriptionLength(recipe.description) }}
        </div>
        <v-divider></v-divider>
        <div class="footer">
          <v-btn
            outlined
            small
            color="#F57F17"
            @click="navigateToDetail(recipe.id)"
            >See more</v-btn
          >
          <div class="btn-container">
            <v-icon class="edit-icon" @click="navigateToEdit(recipe.id)"
              >mdi-heart-outline</v-icon
            >
            <!-- <v-icon class="edit-icon" color="#D32F2F">mdi-heart</v-icon> -->
            <v-icon class="edit-icon" @click="navigateToEdit(recipe.id)"
              >mdi-pencil</v-icon
            >
            <v-icon color="#FF6E40" @click="deleteRecipe(recipe.id)"
              >mdi-trash-can-outline</v-icon
            >
          </div>
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import { baseRoutes } from "../../../../router";
import { Recipe } from "../viewModel";

export default Vue.extend({
  name: "RecipeCard",
  props: {
    recipes: { required: true } as PropOptions<Recipe[]>,
    deleteRecipe: { required: true } as PropOptions<(id: number) => void>,
  },
  data() {
    return {
      url: this.recipes.map((x) =>
        require(`../../../../assets/img/${x.imgUrl}`)
      ),
    };
  },
  methods: {
    shortenTitleLength(title: string): string {
      return title.length > 22 ? `${title.slice(0, 22).trim()}...` : title;
    },
    shortenDescriptionLength(description: string): string {
      return description.length > 100
        ? `${description.slice(0, 130).trim()}...`
        : description;
    },
    deletebtn() {
      console.log("delete");
    },
    navigateToEdit(id: number) {
      this.$router.push(`${baseRoutes.recipe}/edit/${id}`);
    },
    navigateToDetail(id: number) {
      this.$router.push(`${baseRoutes.recipe}/${id}`);
    },
  },
});
</script>

<style scoped>
.card {
  margin: 10px;
}

.recipe-title {
  color: #263238;
  font-weight: 400;
  margin-bottom: 5px;
  text-transform: uppercase;
  font-size: 16px;
  letter-spacing: 0.5px;
}
.relative {
  position: relative;
}

.time-container {
  content: "";
  position: absolute;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  top: 20px;
  right: 20px;
  width: 54px;
  height: 54px;
  z-index: 10;
}

.time-text {
  color: #263238;
  margin-left: 2px;
}

.time-container::after {
  content: "";
  position: absolute;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  background-color: #ffee58;
  border-radius: 50%;
  top: 0px;
  right: 0px;
  width: 54px;
  height: 54px;
  z-index: -1;
}

img {
  width: 100%;
}

.text-container {
  height: 90px;
  overflow: hidden;
  margin: 10px 0;
}

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
