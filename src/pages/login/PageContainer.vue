<template>
  <login-page
    v-bind="{
      snackbar,
      login,
      updateLogin,
      loginRequest,
      loginError,
    }"
    :setSnackBarState="setSnackBarState"
  />
</template>

<script lang="ts">
import Vue from "vue";
import { loginRequest } from "../../rest-api/api/login";
import { baseRoutes } from "../../router";
import LoginPage from "./Page.vue";
import { createEmptyLogin, Login, createEmptyLoginError } from "./viewModel";
import { mapLoginVMToModel } from "./mapper";
import { validation } from "./validations";

export default Vue.extend({
  name: "PageLoginContainer",
  components: { LoginPage },
  data() {
    return {
      snackbar: false,
      login: createEmptyLogin(),
      loginError: createEmptyLoginError(),
    };
  },
  methods: {
    setSnackBarState(v: boolean): void {
      this.snackbar = v;
    },
    updateLogin(field: string, value: string) {
      this.login = {
        ...this.login,
        [field]: value,
      };

      validation.validateField(field, value).then((result) => {
        this.loginError = {
          ...this.loginError,
          [field]: result,
        };
      });
    },
    loginRequest() {
      validation.validateForm(this.login).then((result) => {
        if (result.succeeded) {
          const loginModel = mapLoginVMToModel(this.login);
          loginRequest(loginModel)
            .then(() => {
              this.$router.push(baseRoutes.recipe);
            })
            .catch((error) => {
              this.snackbar = true;
              setTimeout(() => {
                this.snackbar = false;
              }, 5000);
            });
        } else {
          this.loginError = {
            ...this.loginError,
            ...result.fieldErrors,
          };
        }
      });
    },
  },
});
</script>
