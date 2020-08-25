<template>
  <div>
    <appbar-component :toggle-fav-list="toggleFavList" />
    <appbar-fav-list v-if="favListState" />
    <v-container class="py-10">
      <slot />
    </v-container>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { AppbarComponent, AppbarFavList } from "../components";

export default Vue.extend({
  name: "AppLayout",
  components: { AppbarComponent, AppbarFavList },
  data() {
    return {
      favListState: false,
    };
  },
  methods: {
    toggleFavList(): void {
      this.favListState = !this.favListState;
    },
  },
});
</script>
