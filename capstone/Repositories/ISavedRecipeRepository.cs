using Capstone.Models;

namespace Capstone.Repositories
{
    public interface ISavedRecipeRepository
    {
        List<SavedRecipe> GetAllSavedRecipes();
        List<SavedRecipe> GetSavedRecipesbyUser(int userProfileId);
    }
}