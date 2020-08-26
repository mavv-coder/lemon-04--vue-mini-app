<template>
  <div v-if="authentication">
    <nav class="navbar">
      <v-app-bar app dark color="#F57F17">
        <div class="flex-container">
          <v-toolbar-title>Recipe App</v-toolbar-title>
          <div class="user-login-container">
            <span class="user-text">Hello, {{ loginName }}</span>
            <v-icon class="fav-icon" @click="toggleFavList()" color="#D32F2F"
              >mdi-heart</v-icon
            >
            <v-btn elevation="0" light small @click="handleLogOut"
              >Log out</v-btn
            >
          </div>
        </div>
      </v-app-bar>
    </nav>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import { baseRoutes } from "../../router";
import {
  checkInLocalStorage,
  saveInLocalStorage,
  getFromLocalStorage,
} from "../helpers";

export default Vue.extend({
  name: "AppbarComponent",
  props: {
    toggleFavList: { required: true } as PropOptions<() => void>,
  },
  data() {
    return {
      loginName: "",
      authentication: false,
    };
  },
  created() {
    if (checkInLocalStorage("login")) {
      this.authentication = true;
      this.loginName = getFromLocalStorage("login").name;
    } else {
      this.authentication = false;
    }
  },
  methods: {
    handleLogOut(): void {
      localStorage.clear();
      this.authentication = false;
      this.$router.push(baseRoutes.login);
    },
  },
});
</script>
<style scoped>
.navbar {
  position: absolute;
  top: 0;
  z-index: 2000;
}

.flex-container {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.user-login-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.fav-icon {
  margin: 0 12px;
  transition: all 0.4s ease;
}

.fav-icon::after,
.fav-icon:active {
  opacity: 0 !important;
}

.fav-icon:hover {
  opacity: 0.8;
  cursor: pointer;
}

.logout-btn {
  color: black;
}
</style>
