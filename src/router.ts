import Router, { RouteConfig } from "vue-router";
import { LoginPageContainer } from "./pages/login";
import { RecipeListPageContainer } from "./pages/recipe/list";
import { EditRecipePageContainer } from "./pages/recipe/edit";
import { RecipeDetailPageContainer } from "./pages/recipe/detail";

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
  { path: baseRoutes.root, redirect: baseRoutes.login },
  { path: baseRoutes.login, component: LoginPageContainer },
  { path: baseRoutes.recipe, component: RecipeListPageContainer },
  { path: baseRoutes.edit, component: EditRecipePageContainer, props: true },
  {
    path: baseRoutes.detail,
    component: RecipeDetailPageContainer,
    props: true,
  },
];

export const router = new Router({
  routes,
});
