using Capstone.Models;

namespace Capstone.Repositories
{
    public interface IRatingRepository
    {
        List<Rating> GetAll();
        Rating GetRatingById(int id);
    }
}