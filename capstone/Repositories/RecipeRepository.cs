using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Hosting;
using Capstone.Models;
using Capstone.Utils;
using System.Reflection.PortableExecutable;

namespace Capstone.Repositories
{
    public class RecipeRepository : BaseRepository, IRecipeRepository
    {
        public RecipeRepository(IConfiguration configuration) : base(configuration) { }

        public List<Recipe> GetAllRecipes()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        SELECT r.Id, r.Title, r.Ingredients, r.Directions, r.ImageUrl, r.CreateDateTime, 
	                           f.[Name] AS FlavorName, 
	                           c.[Name] AS CategoryName, 
	                           u.UserName AS UserName, u.FirstName, u.LastName, u.Email, u.ImageUrl
                          FROM Recipe r
	                 LEFT JOIN Flavor f ON r.FlavorId = f.Id
	                 LEFT JOIN Category c ON r.CategoryId = c.Id
	                 LEFT JOIN UserProfile u ON r.UserProfileId= u.Id
                      ORDER BY r.CreateDateTime DESC";

                    var reader = cmd.ExecuteReader();

                    var recipes = new List<Recipe>();

                    while (reader.Read())
                    {
                        recipes.Add(new Recipe()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            Title = DbUtils.GetString(reader, "Title"),
                            Ingredients = DbUtils.GetString(reader, "Ingredients"),
                            Directions = DbUtils.GetString(reader, "Directions"),
                            ImageUrl = DbUtils.GetString(reader, "ImageUrl"),
                            CreateDateTime = DbUtils.GetDateTime(reader, "CreateDateTime"),
                            FlavorId = reader.GetInt32(reader.GetOrdinal("FlavorId")),
                            Flavor = new Flavor()
                            {
                                Id = reader.GetInt32(reader.GetOrdinal("FlavorId")),
                                Name = reader.GetString(reader.GetOrdinal("FlavorName"))

                            },
                            CategoryId = reader.GetInt32(reader.GetOrdinal("CategoryId")),
                            Category = new Category()
                            {
                                Id = reader.GetInt32(reader.GetOrdinal("CategoryId")),
                                Name = reader.GetString(reader.GetOrdinal("CategoryName"))
                            },
                            UserProfileId = reader.GetInt32(reader.GetOrdinal("UserProfileId")),
                            UserProfile = new UserProfile()
                            {
                                Id = reader.GetInt32(reader.GetOrdinal("UserProfileId")),
                                UserName = reader.GetString(reader.GetOrdinal("UserName")),
                                FirstName = reader.GetString(reader.GetOrdinal("FirstName")),
                                LastName = reader.GetString(reader.GetOrdinal("LastName")),
                                Email = reader.GetString(reader.GetOrdinal("Email"))
                            },

                        });

                    }
                    reader.Close();
                    return recipes;
                }
            }
        }      
        //private Recipe NewRecipeFromReader(SqlDataReader reader)
        //{
        //    var recipe = new Recipe()
        //    {
        //        Id = DbUtils.GetInt(reader, "Id"),
        //        Title = DbUtils.GetString(reader, "Title"),
        //        Ingredients = DbUtils.GetString(reader, "Ingredients"),
        //        Directions = DbUtils.GetString(reader, "Directions"),
        //        ImageUrl = DbUtils.GetString(reader, "ImageUrl"),
        //        CreateDateTime = DbUtils.GetDateTime(reader, "CreateDateTime"),
        //        FlavorId = DbUtils.GetInt(reader, "FlavorId"),
        //        Flavor = new Flavor()
        //        {
        //            Id = DbUtils.GetInt(reader, "Id"),
        //            Name = DbUtils.GetString(reader, "Name"),

        //        },
        //        CategoryId = DbUtils.GetInt(reader, "CategoryId"),
        //        Category = new Category()
        //        {
        //            Id = DbUtils.GetInt(reader, "Id"),
        //            Name = DbUtils.GetString(reader, "Name"),
        //        },
        //        UserProfileId =DbUtils.GetInt(reader, "UserProfileId"),
        //        UserProfile = new UserProfile()
        //        {
        //            Id = DbUtils.GetInt(reader, "Id"),
        //            UserName = DbUtils.GetString(reader, "UserName"),
        //        },
        //    };
        //}
    }
}
