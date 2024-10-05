using Capstone.Models;

namespace Capstone.Repositories
{
    public interface ICommentRepository
    {
        void Add(Comment comment);
        void Delete(int id);
        List<Comment> GetCommentsByReviewId(int id);
        void Update(Comment comment);
    }
}