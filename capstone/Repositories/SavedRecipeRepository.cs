using Capstone.Models;
using Capstone.Utils;
using System.Reflection.PortableExecutable;

namespace Capstone.Repositories
{
    public class SavedRecipeRepository : BaseRepository, ISavedRecipeRepository
    {
        public SavedRecipeRepository(IConfiguration configuration) : base(configuration) { }

        public List<SavedRecipe> GetSavedRecipesbyUser(int userProfileId)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                SELECT sr.Id, sr.RecipeId, sr.UserProfileId,
                       r.Id, r.Title, r.Ingredients, r.Directions, r.ImageUrl, r.CreateDateTime,
                       r.FlavorId, r.CategoryId, r.UserProfileId,
                       f.[Name] AS FlavorName, 
                       c.[Name] AS CategoryName, 
                       u.UserName AS UserName, u.FirstName, u.LastName, u.Email, u.ImageUrl
                FROM SavedRecipe sr
                    LEFT JOIN Recipe r ON sr.RecipeId = r.Id
                    LEFT JOIN Flavor f ON r.FlavorId = f.Id
                    LEFT JOIN Category c ON r.CategoryId = c.Id
                    INNER JOIN UserProfile u ON sr.UserProfileId= u.Id
                WHERE sr.UserProfileId = @UserProfileId
                            ";
                    DbUtils.AddParameter(cmd, "@UserProfileId", userProfileId);
                    var reader = cmd.ExecuteReader();
                    var savedRecipes = new List<SavedRecipe>();

                    while (reader.Read())
                    {
                        savedRecipes.Add(new SavedRecipe()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            RecipeId = DbUtils.GetInt(reader, "RecipeId"),
                            Recipe = new Recipe()
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
                    return savedRecipes;
                }
            }
        }
        public List<SavedRecipe> GetAllSavedRecipes()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand()) 
                {
                    cmd.CommandText = @"
                        SELECT sr.Id, sr.RecipeId, sr.UserProfileId,
	                           r.Id, r.Title, r.Ingredients, r.Directions, r.ImageUrl, r.CreateDateTime,
                               r.FlavorId, r.CategoryId, r.UserProfileId,
	                           f.[Name] AS FlavorName, 
	                           c.[Name] AS CategoryName, 
	                           u.UserName AS UserName, u.FirstName, u.LastName, u.Email, u.ImageUrl
                        FROM SavedRecipe sr
	                        LEFT JOIN Recipe r ON sr.RecipeId = r.Id
	                        LEFT JOIN Flavor f ON r.FlavorId = f.Id
	                        LEFT JOIN Category c ON r.CategoryId = c.Id
	                        LEFT JOIN UserProfile u ON sr.UserProfileId= u.Id
                                        ";

                    var reader = cmd.ExecuteReader();


                    var savedRecipes = new List<SavedRecipe>();

                    while (reader.Read())
                    {
                        savedRecipes.Add(new SavedRecipe()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            RecipeId = DbUtils.GetInt(reader, "RecipeId"),
                            Recipe = new Recipe()
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
                    return savedRecipes;
                }
            }
        }
    }
}
