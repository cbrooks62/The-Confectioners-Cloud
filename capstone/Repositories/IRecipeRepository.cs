using Capstone.Models;

namespace Capstone.Repositories
{
    public interface IRecipeRepository
    {
        List<Recipe> GetAllRecipes();
    }
}