import * as model from "../../rest-api/model";
import * as vm from "../../common/model";

export const mapRecipeModelToVm = (recipe: model.Recipe): vm.Recipe => ({
  ...recipe,
  favorite: false,
});

export const mapRecipeVmToModel = (recipe: vm.Recipe): model.Recipe => ({
  id: recipe.id,
  name: recipe.name,
  difficulty: recipe.difficulty,
  imgUrl: recipe.imgUrl,
  time: recipe.time,
  description: recipe.description,
  ingredients: recipe.ingredients,
  steps: recipe.steps,
});
