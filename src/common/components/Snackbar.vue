<template>
  <v-snackbar
    class="snackbar"
    v-model="snackbarState"
    :color="snackbarColor"
    :timeout="timeout"
    :top="top"
  >
    {{ snackbarText }}
    <template v-slot:action="{ attrs }">
      <v-btn text v-bind="attrs" @click="setSnackbarState(false)">
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";

interface SnackbarProps {
  setSnackbarState: PropOptions<(v: boolean) => void>;
  snackbarState: PropOptions<boolean>;
  snackbarColor: PropOptions<string>;
  snackbarText: PropOptions<string>;
}

export default Vue.extend({
  name: "SnackbarComponent",
  props: {
    setSnackbarState: { required: true },
    snackbarState: { required: true },
    snackbarColor: { required: true },
    snackbarText: { required: true },
  } as SnackbarProps,
  data() {
    return {
      timeout: -1,
      top: true,
    };
  },
});
</script>

<style scoped>
.snackbar {
  margin-top: 10px;
}
</style>
