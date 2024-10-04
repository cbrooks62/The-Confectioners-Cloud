using Capstone.Models;

namespace Capstone.Repositories
{
    public interface IUserProfileRepository
    {
        UserProfile GetUserProfileById(int id);
        List<UserProfile> GetAllUsers();
        public void Add(UserProfile profile);
        public void Delete(int id);
        public void Update(UserProfile profile);
    }
}