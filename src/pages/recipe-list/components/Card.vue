<template>
  <v-row no-gutters>
    <v-col v-for="recipe in recipes" :key="recipe.id" cols="12" sm="4">
      <v-card class="pa-2 card relative">
        <div class="time-container">
          <v-icon color="#F57F17">mdi-clock-time-four-outline</v-icon>
          <span class="time-text">{{ `${recipe.time}'` }}</span>
        </div>
        <img :src="recipe.imgUrl" />
        <h4 class="recipe-title">{{ recipe.name }}</h4>
        <v-divider></v-divider>
        <div class="text-container">
          {{ shortenDescriptionLength(recipe.description) }}
        </div>
        <v-divider></v-divider>
        <card-footer-component
          v-bind="{ recipe, navigateToEdit, navigateToDetail, deleteRecipe }"
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

export default Vue.extend({
  name: "CardComponent",
  components: { CardFooterComponent },
  props: {
    recipes: { required: true } as PropOptions<Recipe[]>,
    deleteRecipe: { required: true } as PropOptions<(id: number) => void>,
  },
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
    // checkIsFav(id: number): boolean {
    //   if (this.favList.length > 0) {
    //     return this.favList.findIndex((x) => x.id === id) !== -1;
    //   }
    //   return false;
    // },
    shortenTitleLength(title: string): string {
      return title.length > 22 ? `${title.slice(0, 22).trim()}...` : title;
    },
    shortenDescriptionLength(description: string): string {
      return description.length > 100
        ? `${description.slice(0, 130).trim()}...`
        : description;
    },
    navigateToEdit(id: number): void {
      this.$router.push(`${baseRoutes.recipe}/edit/${id}`);
    },
    navigateToDetail(id: number): void {
      this.$router.push(`${baseRoutes.recipe}/${id}`);
    },
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
  background-color: #f9ec79;
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

/* .footer {
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
} */
</style>
