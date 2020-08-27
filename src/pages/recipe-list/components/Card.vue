<template>
  <v-row no-gutters>
    <v-col v-for="recipe in recipes" :key="recipe.id" cols="12" sm="4">
      <v-card class="pa-2 card">
        <card-image-component :recipe="recipe" />
        <card-text-component v-bind="{ recipe, shortenDescriptionLength }" />
        <v-divider></v-divider>
        <card-footer-component
          v-bind="{
            recipe,
            navigateToEdit,
            navigateToDetail,
            deleteRecipe,
            toggleFavorite,
          }"
        />
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import { baseRoutes } from "../../../router";
import { Recipe } from "../viewModel";
import {
  checkInLocalStorage,
  getFromLocalStorage,
  deleteFromLocalStorage,
  saveInLocalStorage,
} from "../../../common/helpers";
import CardFooterComponent from "./CardFooter.vue";
import CardImageComponent from "./CardImage.vue";
import CardTextComponent from "./CardText.vue";

interface Props {
  recipes: PropOptions<Recipe[]>;
  deleteRecipe: PropOptions<(id: number) => void>;
  toggleFavorite: PropOptions<(id: number, value: boolean) => void>;
}

export default Vue.extend({
  name: "CardComponent",
  components: { CardImageComponent, CardTextComponent, CardFooterComponent },
  props: {
    recipes: { required: true },
    deleteRecipe: { required: true },
    toggleFavorite: { required: true },
  } as Props,
  data() {
    return {
      // favList: [] as Recipe[],
    };
  },
  // created() {
  //   if (checkInLocalStorage("favList")) {
  //     const newFavList = getFromLocalStorage("favList");
  //     return newFavList.map(
  //       (y) => newFavList.findIndex((x) => x.id === y.id) !== -1
  //     );
  //   }
  //   return false;
  // },
  methods: {
    shortenDescriptionLength(descript: string): string {
      return descript.length > 100
        ? `${descript.slice(0, 130).trim()}...`
        : descript;
    },
    navigateToEdit(id: number): void {
      this.$router.push(`${baseRoutes.recipe}/edit/${id}`);
    },
    navigateToDetail(id: number): void {
      this.$router.push(`${baseRoutes.recipe}/${id}`);
    },
    // checkIsFav(id: number): boolean {
    //   if (this.favList.length > 0) {
    //     return this.favList.findIndex((x) => x.id === id) !== -1;
    //   }
    //   return false;
    // },
    // toggleRecipeFav(recipe): void {
    //   if (checkInLocalStorage("favList")) {
    //     let newfavList = getFromLocalStorage("favList");
    //     if (this.checkIsFav(recipe.id)) {
    //       newfavList = newfavList.filter((x) => x.id !== recipe.id);
    //       if (newfavList.length <= 0) {
    //         deleteFromLocalStorage("favList");
    //         this.favList = [];
    //       } else {
    //         deleteFromLocalStorage("favList");
    //         saveInLocalStorage("favList", newfavList);
    //         this.favList = newfavList;
    //       }
    //     } else {
    //       newfavList = [...newfavList, recipe];
    //       deleteFromLocalStorage("favList");
    //       saveInLocalStorage("favList", newfavList);
    //       this.favList = newfavList;
    //     }
    //   } else {
    //     const newfavList = [recipe];
    //     deleteFromLocalStorage("favList");
    //     saveInLocalStorage("favList", newfavList);
    //     this.favList = newfavList;
    //   }
    // },
  },
});
</script>

<style scoped>
.card {
  position: relative;
  margin: 10px;
}
</style>
