import * as model from "../../rest-api/model";
import * as vm from "../../common/model";

export const mapRecipeModelToVm = (recipe: model.Recipe): vm.Recipe => ({
  ...recipe,
  favorite: false,
});

export const mapRecipeVmToModel = (recipe: vm.Recipe): model.Recipe => ({
  ...recipe,
});
