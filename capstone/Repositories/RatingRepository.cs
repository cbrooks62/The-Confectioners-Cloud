using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Hosting;
using Capstone.Models;
using Capstone.Utils;

namespace Capstone.Repositories
{
    public class RatingRepository : BaseRepository, IRatingRepository
    {
        public RatingRepository(IConfiguration configuration) : base(configuration) { }

        public List<Rating> GetAll()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = " SELECT Id, StarCount, ImageUrl FROM Rating";
                    var reader = cmd.ExecuteReader();

                    var ratings = new List<Rating>();
                    while (reader.Read())

                    {
                        ratings.Add(new Rating()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            StarCount = DbUtils.GetInt(reader, "StarCount"),
                            ImageUrl = DbUtils.GetString(reader, "ImageUrl")
                        });
                    }
                    reader.Close();
                    return ratings;
                }

            }
        }
        public Rating GetRatingById(int id)
        {
            using (SqlConnection conn = Connection)
            {
                {
                    conn.Open();

                    using (SqlCommand cmd = conn.CreateCommand())
                    {
                        cmd.CommandText = @"SELECT * FROM Rating WHERE Id = @id";
                        DbUtils.AddParameter(cmd, "@Id", id);

                        var reader = cmd.ExecuteReader();


                        if (reader.Read())
                        {
                            Rating rating = new Rating
                            {
                                Id = DbUtils.GetInt(reader, "Id"),
                                StarCount = DbUtils.GetInt(reader, "StarCount"),
                                ImageUrl = DbUtils.GetString(reader, "ImageUrl")
                            };
                            reader.Close();
                            return rating;

                        }
                        reader.Close();
                        return null;
                    }
                }
            }
        }
    }
}
