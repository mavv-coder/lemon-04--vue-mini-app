<template>
  <div>
    <div class="navbar">
      <v-app-bar class="navbar" dense app dark color="#F57F17">
        <v-toolbar-title>Recipe App</v-toolbar-title>
      </v-app-bar>
    </div>
    <v-container class="py-10">
      <slot />
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "AppLayout",
});
</script>
<style scoped>
.navbar {
  position: absolute;
  top: 0;
  z-index: 2000;
}
</style>
