<template>
  <v-snackbar v-model="snackbar" :color="color" :timeout="timeout" :top="top">
    {{ text }}

    <template v-slot:action="{ attrs }">
      <v-btn text v-bind="attrs" @click="setSnackBarState(false)">
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script lang="ts">
import Vue from "vue";

// interface Props {
//   snackbar: boolean;
//   setSnackBarState: (v: boolean) => void;
// }

export default Vue.extend({
  name: "SnackbarComponent",
  props: {
    setSnackBarState: Function,
    snackbar: Boolean,
  },
  data() {
    return {
      color: "error",
      text: "Invalid login or password",
      timeout: 5000,
      top: true,
    };
  },
});
</script>
