<template>
  <div class="fav-list-container">
    <ul class="fav-list" v-if="isFavList">
      <v-divider color="#D32F2F"></v-divider>
      <template v-for="recipe in favList">
        <div :key="recipe.id">
          <li class="list-item">
            <div class="img-container">
              <img :src="`./img/${recipe.imgUrl}`" alt="" />
            </div>
            <p class="recipe-name">{{ recipe.name }}</p>
          </li>
          <v-divider class="divider" color="#D32F2F"></v-divider>
        </div>
      </template>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import { checkInLocalStorage, getFromLocalStorage } from "../helpers";

export default Vue.extend({
  name: "FavListComponent",
  data() {
    return {
      favList: [],
      isFavList: false,
    };
  },
  created() {
    if (checkInLocalStorage("recipes")) {
      this.isFavList = true;
      this.favList = getFromLocalStorage("recipes");
    } else {
      this.isFavList = false;
    }
  },
  methods: {},
});
</script>
<style scoped>
.fav-list-container {
  padding-bottom: 10px;
  position: fixed;
  top: 64px;
  right: 110px;
  width: 400px;
  height: max-content;
  background-color: #f57f17;
  z-index: 60000;
}

.fav-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

@media only screen and (max-width: 960px) {
  .fav-list-container {
    top: 56px;
  }
}

.list-item {
  display: flex;
  padding: 10px 10px;
  margin: 0;
  align-items: center;
  background-color: #f57f17;
}

.list-item:hover {
  background-color: #d32f2f;
  cursor: pointer;
}

.recipe-name {
  color: white;
}

.img-container {
  width: 30px;
  height: 30px;
  padding: 0;
  margin: 0;
  margin-right: 20px;
}

img {
  height: 100%;
  padding: 0;
  margin: 0;
}

.recipe-name {
  margin: 0;
}

.divider {
  margin: 0 10px;
}
</style>
