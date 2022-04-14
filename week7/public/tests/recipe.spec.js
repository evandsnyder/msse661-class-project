const recipeService = new RecipeService();

describe('Todo App', () => {
  it('should initialize some HTML', () => {
    spyOn(todo, 'init');
    todo.init();

    expect(todo.init).toHaveBeenCalled();
  });

  it('should add a recipe', async () => {
    const newRecipe = {
      recipe_id: 0,
      recipe_name: 'Third recipe',
      status: 'pending',
      created_date: '2020-04-14 22:50:32',
    };
    const addRecipeServiceSpy = spyOn(recipeService, 'addRecipe');

    expect(todo.recipes.length).toBe(0);

    await todo.addRecipe(newRecipe);

    expect(addRecipeServiceSpy).toHaveBeenCalled();
    expect(todo.recipes.length).toBe(1);
  });
});