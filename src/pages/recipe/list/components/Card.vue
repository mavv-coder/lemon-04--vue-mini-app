<template>
  <v-row no-gutters>
    <!-- <img src="../../../../assets/img/veggie-crustless-quiche.jpg" alt="" /> -->
    <!-- <img :src="require('../../../../assets/img/veggie-crustless-quiche.jpg')" /> -->
    <!-- <img src="./assets/img/veggie-crustless-quiche.jpg" /> -->

    <v-col v-for="recipe in recipes" :key="recipe.id" cols="12" sm="4">
      <v-card class="pa-2 card">
        <h4 class="recipe-title">{{ recipe.name }}</h4>
        <v-divider></v-divider>
        <div class="text-container">{{ recipe.description }}</div>
        <v-divider></v-divider>
        <div class="btn-container">
          <v-icon class="edit-icon">mdi-pencil</v-icon>
          <v-icon color="error" @click="deletebtn"
            >mdi-trash-can-outline</v-icon
          >
          <!-- <img :src="imagen" alt="" /> -->
          <img src="./01.jpg" alt="" />
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import { Recipe } from "../viewModel";

const imagen = require("./01.jpg");

export default Vue.extend({
  name: "RecipeCard",
  props: {
    recipes: { required: true } as PropOptions<Recipe[]>,
  },
  data() {
    return {
      imagen,
      url: require("./01.jpg"),
    };
  },
  methods: {
    deletebtn() {
      console.log("click");
    },
  },
});
</script>

<style scoped>
.card {
  margin: 10px;
}

.recipe-title {
  font-weight: 400;
  margin-bottom: 5px;
  text-transform: uppercase;
}

.text-container {
  height: 90px;
  overflow: hidden;
  margin: 10px 0;
}

.btn-container {
  display: flex;
  justify-content: flex-end;
  padding: 10px 0 2px 0;
}

.edit-icon {
  margin-right: 10px;
}
</style>
