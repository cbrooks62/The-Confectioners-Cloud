using Capstone.Models;

namespace Capstone.Repositories
{
    public interface ICategoryRepository
    {
        void Add(Category category);
        void Delete(int id);
        List<Category> GetAll();
        Category GetCategoryById(int id);
        void Update(Category category);
    }
}