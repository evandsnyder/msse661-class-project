const RECIPES_API = `${BASE_API_URL}/recipe`; // http://localhost:3000/api/recipe

  class RecipeService {
    getRecipes = () => _get(RECIPES_API);
    
    addRecipe = (formData) => _post(RECIPES_API, formData, DEFAULT_OPTIONS_WITH_AUTH);

    updateRecipe = (formData) => _put(`${RECIPES_API}/${formData._id}`, formData, DEFAULT_OPTIONS_WITH_AUTH);
    
    deleteTask = (taskId) => _delete(`${RECIPES_API}/${taskId}`, OPTIONS_WITH_AUTH);
  }