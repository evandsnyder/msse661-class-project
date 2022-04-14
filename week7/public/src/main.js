const recipeService = new RecipeService();
const recipeBrowser = new RecipeBrowser(recipeService);
const dialogService = new DialogService(recipeBrowser);

recipeBrowser.init();