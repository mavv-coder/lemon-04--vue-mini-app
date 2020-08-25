<template>
  <center-layout>
    <snackbar-component
      v-bind="{ snackbarText, snackbarColor, snackbarState, setSnackbarState }"
    />
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card>
          <v-card-title primary-title>
            <h3 class="headline">Login</h3>
          </v-card-title>
          <v-card-text>
            <form-component
              v-bind="{ login, updateLogin, loginRequest, loginError }"
            />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </center-layout>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import { CenterLayout } from "../../common/layouts";
import { FormComponent } from "./components";
import { FormProps } from "./formProps";
import { SnackbarComponent } from "../../common/components/";
// as FormProps,

export default Vue.extend({
  name: "LoginPage",
  components: { FormComponent, SnackbarComponent, CenterLayout },
  props: {
    login: { required: true },
    loginError: { required: true },
    updateLogin: { required: true },
    loginRequest: { required: true },
    setSnackbarState: { required: true },
    snackbarState: { required: true },
    snackbarColor: { required: true },
    snackbarText: { required: true },
  },
  methods: {
    console(v: string) {
      console.log(v);
    },
  },
});
</script>
