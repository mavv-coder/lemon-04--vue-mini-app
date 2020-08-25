<template>
  <login-page
    v-bind="{
      snackbarText,
      snackbarColor,
      snackbarState,
      login,
      updateLogin,
      loginRequest,
      loginError,
      setSnackbarState,
    }"
  />
</template>

<script lang="ts">
import Vue from "vue";
import { loginRequest } from "../../rest-api/api/login";
import { baseRoutes } from "../../router";
import LoginPage from "./Page.vue";
import { createEmptyLogin, Login, createEmptyLoginError } from "./viewModel";
import { mapLoginVMToModel } from "./mapper";
import { formValidation } from "./validations";

export default Vue.extend({
  name: "PageLoginContainer",
  components: { LoginPage },
  data() {
    return {
      login: createEmptyLogin(),
      loginError: createEmptyLoginError(),
      snackbarState: false,
      snackbarColor: "",
      snackbarText: "",
    };
  },
  methods: {
    setSnackbarState(v: boolean): void {
      this.snackbarState = v;
    },
    updateLogin(field: string, value: string) {
      this.login = {
        ...this.login,
        [field]: value,
      };

      formValidation.validateField(field, value).then((result) => {
        this.loginError = {
          ...this.loginError,
          [field]: result,
        };
      });
    },
    loginRequest() {
      formValidation.validateForm(this.login).then((result) => {
        if (result.succeeded) {
          const loginModel = mapLoginVMToModel(this.login);
          loginRequest(loginModel)
            .then(() => {
              this.$router.push(baseRoutes.recipe);
              localStorage.setItem("login", JSON.stringify(this.login));
            })
            .catch((error) => {
              this.showSnackbarError();
            });
        } else {
          this.loginError = {
            ...this.loginError,
            ...result.fieldErrors,
          };
        }
      });
    },
    showSnackbarError() {
      this.snackbarColor = "error";
      this.snackbarText = "Invalid username or password";
      this.snackbarState = true;
      setTimeout(() => {
        this.snackbarState = false;
      }, 5000);
    },
  },
});
</script>
