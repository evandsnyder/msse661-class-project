const recipeService = new RecipeService();
const recipeBrowser = new RecipeBrowser(recipeService);

recipeBrowser.init();