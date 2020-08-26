<template>
  <div>
    <div class="time-container">
      <v-icon color="#F57F17">mdi-clock-time-four-outline</v-icon>
      <span class="time-text">{{ `${recipe.time}'` }}</span>
    </div>
    <img :src="recipe.imgUrl" />
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import { Recipe } from "../viewModel";

interface Props {
  recipe: PropOptions<Recipe>;
}

export default Vue.extend({
  name: "CardImageComponent",
  props: {
    recipe: { required: true },
  } as Props,
});
</script>

<style scoped>
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
</style>
