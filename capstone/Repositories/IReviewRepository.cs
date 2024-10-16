using Capstone.Models;

namespace Capstone.Repositories
{
    public interface IReviewRepository
    {
        void Add(Review review);
        void Delete(int id);
        List<Review> GetAllReviewsByRecipeId(int recipeId);
        void Update(Review review);
    }
}