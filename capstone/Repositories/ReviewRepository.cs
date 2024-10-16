using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Hosting;
using Capstone.Models;
using Capstone.Utils;
using System.Reflection.PortableExecutable;

namespace Capstone.Repositories
{
    public class ReviewRepository : BaseRepository, IReviewRepository
    {
        public ReviewRepository(IConfiguration configuration) : base(configuration) { }

        public List<Review> GetAllReviewsByRecipeId(int recipeId)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                         SELECT rv.Id, rv.[Subject], rv.Content, rv.CreateDateTime, rv.RecipeId, rv.UserProfileId,
                                rc.Title AS RecipeTitle,
                                u.UserName AS UserName, u.FirstName, u.LastName
                        FROM Review rv
                         LEFT JOIN UserProfile u ON rv.UserProfileId = u.Id
                         LEFT JOIN Recipe rc ON rv.RecipeId = rc.Id
                         WHERE RecipeId = 1
                         ORDER BY rv.CreateDateTime DESC;";

                    DbUtils.AddParameter(cmd, "@RecipeId", recipeId);
                    var reader = cmd.ExecuteReader();
                    var reviews = new List<Review>();
                    while (reader.Read())
                    {
                        reviews.Add(new Review()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            Subject = DbUtils.GetString(reader, "Subject"),
                            Content = DbUtils.GetString(reader, "Content"),
                            CreateDateTime = DbUtils.GetDateTime(reader, "CreateDateTime"),
                            RecipeId = reader.GetInt32(reader.GetOrdinal("RecipeId")),
                            Recipe = new Recipe()
                            {
                                Id = DbUtils.GetInt(reader, "Id"),
                                Title = DbUtils.GetString(reader, "RecipeTitle"),
                            },
                            UserProfileId = reader.GetInt32(reader.GetOrdinal("UserProfileId")),
                            UserProfile = new UserProfile()
                            {
                                Id = reader.GetInt32(reader.GetOrdinal("UserProfileId")),
                                UserName = reader.GetString(reader.GetOrdinal("UserName")),
                                FirstName = reader.GetString(reader.GetOrdinal("FirstName")),
                                LastName = reader.GetString(reader.GetOrdinal("LastName"))
                            },

                        });
                    }
                    reader.Close();
                    return reviews;
                }
            }
        }
        public void Add(Review review)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        INSERT INTO Review (Subject, Content, CreateDateTime, RecipeId, UserProfileId)
                        OUPUT INSERTED.ID
                        VALUES (@Subject, @Content, @CreateDateTime, @RecipeId, @UserProfileId)";
                    DbUtils.AddParameter(cmd, "@Subject", review.Subject);
                    DbUtils.AddParameter(cmd, "@Content", review.Content);
                    DbUtils.AddParameter(cmd, "@CreateDateTime", review.CreateDateTime);
                    DbUtils.AddParameter(cmd, "@RecipeId", review.RecipeId);
                    DbUtils.AddParameter(cmd, "@UserProfileId", review.UserProfileId);

                    review.Id = (int)cmd.ExecuteScalar();
                }
            }
        }
        public void Update(Review review)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        UPDATE Review
                           SET Subject = @Subject,
                               Content = @Content,
                               RecipeId = @RecipeId,
                               UserProfileId = @UserProfileId
                         WHERE Id =@Id
                                       ";
                    DbUtils.AddParameter(cmd, "@Subject", review.Subject);
                    DbUtils.AddParameter(cmd, "@Content", review.Content);
                    DbUtils.AddParameter(cmd, "@RecipeId", review.RecipeId);
                    DbUtils.AddParameter(cmd, "@UserProfileId", review.UserProfileId);
                    DbUtils.AddParameter(cmd, "@Id", review.Id);

                    cmd.ExecuteNonQuery();
                }
            }
        }
        public void Delete(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = Connection.CreateCommand())
                {
                    cmd.CommandText = "DELETE FROM Review WHERE Id = @Id";

                    DbUtils.AddParameter(cmd, "@id", id);

                    cmd.ExecuteNonQuery();
                }
            }
        }
    }
}
