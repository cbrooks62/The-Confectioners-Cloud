using Capstone.Models;
using Capstone.Utils;
using Microsoft.Extensions.Configuration;
using System.Collections.Generic;
using System.Data.SqlClient;

namespace Capstone.Repositories
{
    public class CommentRepository : BaseRepository, ICommentRepository
    {
        public CommentRepository(IConfiguration configuration) : base(configuration) { }

        public List<Comment> GetCommentsByReviewId(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        SELECT c.Id AS CommentId, c.[Subject], c.Content, c.CreateDateTime, c.ReviewId, c.UserProfileId,
	                           r.[Subject], r.Content, r.CreateDateTime, r.RecipeId, r.UserProfileId,
	                           u.UserName AS UserName, u.FirstName, u.LastName, u.Email, u.ImageUrl
                        FROM Comment c 
	                         LEFT JOIN Review r ON c.ReviewId = r.Id
	                         LEFT JOIN UserProfile u ON c.UserProfileId = u.Id
                        WHERE c.ReviewId = @id
                        ORDER BY c.CreateDateTime DESC";

                    DbUtils.AddParameter(cmd, "id", id);
                    var reader = cmd.ExecuteReader();

                    var comments = new List<Comment>();
                    while (reader.Read())
                    {
                        comments.Add(new Comment()
                        {
                            Id = DbUtils.GetInt(reader, "CommentId"),
                            Subject = DbUtils.GetString(reader, "Subject"),
                            Content = DbUtils.GetString(reader, "Content"),
                            CreateDateTime = DbUtils.GetDateTime(reader, "CreateDateTime"),
                            ReviewId = DbUtils.GetInt(reader, "ReviewId"),
                            Review = new Review()
                            {
                                Id = DbUtils.GetInt(reader, "ReviewId"),
                                Subject = DbUtils.GetString(reader, "Subject")
                            },
                            UserProfileId = DbUtils.GetInt(reader, "UserProfileId"),
                            UserProfile = new UserProfile()
                            {
                                Id = DbUtils.GetInt(reader, "UserProfileId"),
                                UserName = DbUtils.GetString(reader, "UserName")
                            },

                        });
                    }
                    reader.Close();
                    return comments;
                }
            }
        }
        public void Add(Comment comment)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        INSERT INTO Comment (ReviewId, UserProfileId, [Subject], Content, CreateDateTime)
                        OUTPUT INSERTED.ID
                        VALUES (@reviewId, @userProfileId, @subject, @content, @createDateTime)";

                    DbUtils.AddParameter(cmd, "@reviewId", comment.ReviewId);
                    DbUtils.AddParameter(cmd, "@userProfileId", comment.UserProfileId);
                    DbUtils.AddParameter(cmd, "@subject", string.IsNullOrEmpty(comment.Subject) ? (object)DBNull.Value : comment.Subject);
                    DbUtils.AddParameter(cmd, "@content", string.IsNullOrEmpty(comment.Content) ? (object)DBNull.Value : comment.Content);
                    DbUtils.AddParameter(cmd, "@createDateTime", comment.CreateDateTime);

                    comment.Id = (int)cmd.ExecuteScalar();
                }
            }
        }

        public void Update(Comment comment)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        UPDATE Comment
                        SET ReviewId = @reviewId,
                            UserProfileId = @userProfileId,
                            [Subject] = @subject,
                            Content = @content,
                            CreateDateTime = @createDateTime
                        WHERE Id = @id;
                        ";

                    DbUtils.AddParameter(cmd, "@reviewId", comment.ReviewId);
                    DbUtils.AddParameter(cmd, "@userProfileId", comment.UserProfileId);
                    DbUtils.AddParameter(cmd, "@subject", comment.Subject);
                    DbUtils.AddParameter(cmd, "@content", comment.Content);
                    DbUtils.AddParameter(cmd, "@createDateTime", comment.CreateDateTime);
                    DbUtils.AddParameter(cmd, "@id", comment.Id);

                    cmd.ExecuteNonQuery();
                }
            }
        }
        public void Delete(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = "DELETE FROM Comment WHERE Id = @id";
                    DbUtils.AddParameter(cmd, "@id", id);
                    cmd.ExecuteNonQuery();
                }
            }
        }
    }
}
