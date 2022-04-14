const recipeService = new RecipeService();

describe('Recipe Browser App', () => {
  it('should initialize some HTML', () => {
    spyOn(recipeBrowser, 'init');
    recipeBrowser.init();

    expect(recipeBrowser.init).toHaveBeenCalled();
  });

  it('should add a recipe', async () => {
    const newRecipe = {
      name: "TestRecipe",
      grains: ["TestRecipe"],
      hops: ["TestRecipe"],
      yeast: "TestRecipe",
      process: "TestRecipe"
    };
    const addRecipeServiceSpy = spyOn(recipeService, 'addRecipe');

    expect(recipeBrowser.recipes.length).toBe(0);

    await recipeBrowser.addRecipe(newRecipe);

    expect(addRecipeServiceSpy).toHaveBeenCalled();
    expect(recipeBrowser.recipes.length).toBe(1);
  });
});