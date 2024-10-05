using Capstone.Models;

namespace Capstone.Repositories
{
    public interface IFlavorRepository
    {
        void Add(Flavor flavor);
        void Delete(int id);
        List<Flavor> GetAllFlavors();
        Flavor GetFlavorById(int id);
        void Update(Flavor flavor);
    }
}