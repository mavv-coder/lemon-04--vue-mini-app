import Router, { RouteConfig } from "vue-router";
import { LoginPageContainer } from "./pages/login";
import { RecipeListPageContainer } from "./pages/recipe/list";
import { EditRecipePageContainer } from "./pages/recipe/edit";
import { RecipeDetailPageContainer } from "./pages/recipe/detail";
import { checkInLocalStorage } from "./common/helpers";

interface BaseRoutes {
  root: string;
  login: string;
  recipe: string;
  detail: string;
  edit: string;
}

export const baseRoutes: BaseRoutes = {
  root: "/",
  login: "/login",
  recipe: "/recipe",
  detail: "/recipe/:id",
  edit: "/recipe/edit/:id",
};

const routes: RouteConfig[] = [
  { path: baseRoutes.root, name: "root", redirect: baseRoutes.login },
  { path: baseRoutes.login, name: "login", component: LoginPageContainer },
  {
    path: baseRoutes.recipe,
    name: "recipe-list",
    component: RecipeListPageContainer,
  },
  {
    path: baseRoutes.edit,
    name: "recipe-edit",
    component: EditRecipePageContainer,
    props: true,
  },
  {
    path: baseRoutes.detail,
    name: "recipe-detail",
    component: RecipeDetailPageContainer,
    props: true,
  },
];

export const router = new Router({
  routes,
});

router.beforeEach((to, from, next) => {
  const authentication: boolean = checkInLocalStorage("login");
  const privatePages: string[] = [
    "recipe-list",
    "recipe-edit",
    "recipe-detail",
  ];

  if (privatePages.findIndex((x) => x === to.name) !== -1 && !authentication) {
    console.log(authentication);
    return next(baseRoutes.login);
  }
  return next();
});
