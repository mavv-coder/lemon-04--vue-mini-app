<template>
  <app-layout>
    <h1>Hola</h1>
  </app-layout>
</template>

<script lang="ts">
import Vue from "vue";
import { AppLayout } from "../../../common/layouts";

export default Vue.extend({
  name: "RecipeDetailPage",
  components: { AppLayout },
  props: {
    recipe: { require: true },
  },
});
</script>
