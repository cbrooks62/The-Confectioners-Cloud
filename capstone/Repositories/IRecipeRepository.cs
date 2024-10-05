using Capstone.Models;

namespace Capstone.Repositories
{
    public interface IRecipeRepository
    {
        void Add(Recipe recipe);
        void Delete(int id);
        List<Recipe> GetAllRecipes();
        Recipe GetRecipeById(int id);
        void Update(Recipe recipe);
    }
}