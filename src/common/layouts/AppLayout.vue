<template>
  <div>
    <appbar-component :toggle-fav-list="toggleFavList" />
    <fav-list-component v-if="favRecipeListState" />
    <v-container class="py-10">
      <slot />
    </v-container>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { AppbarComponent } from "../components";
import { FavListComponent } from "../components";

export default Vue.extend({
  name: "AppLayout",
  components: { AppbarComponent, FavListComponent },
  data() {
    return {
      favRecipeListState: false,
    };
  },
  methods: {
    toggleFavList(value: boolean): void {
      this.favRecipeListState = value;
    },
  },
});
</script>
