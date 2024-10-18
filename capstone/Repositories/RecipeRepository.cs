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
                               r.FlavorId, r.CategoryId, r.UserProfileId,
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
        public Recipe GetRecipeById(int id)
        {
            using (var conn = Connection) 
            {
                conn.Open();
                using (var cmd = conn.CreateCommand()) 
                {
                    cmd.CommandText = @"
                        SELECT r.Id, r.Title, r.Ingredients, r.Directions, r.ImageUrl, r.CreateDateTime,
                               r.FlavorId, r.CategoryId, r.UserProfileId,
	                           f.[Name] AS FlavorName, 
	                           c.[Name] AS CategoryName, 
	                           u.UserName AS UserName, u.FirstName, u.LastName, u.Email, u.ImageUrl
                        FROM Recipe r
	                           LEFT JOIN Flavor f ON r.FlavorId = f.Id
	                           LEFT JOIN Category c ON r.CategoryId = c.Id
	                           LEFT JOIN UserProfile u ON r.UserProfileId= u.Id
                        WHERE r.Id = @id;";
                    DbUtils.AddParameter(cmd, "id", id);

                    var reader = cmd.ExecuteReader();

                    Recipe recipe = null;
                    if (reader.Read())
                    {
                        recipe = new Recipe()
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

                        };
                    }
                    reader.Close();
                    return recipe;
                }
            }
        }
        public List<Recipe> GetRecipesByUserId(int userId)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"  
                        SELECT r.Id, r.Title, r.Ingredients, r.Directions, r.ImageUrl, r.CreateDateTime, r.FlavorId, r.CategoryId, r.UserProfileId,
                               f.[Name] AS FlavorName, 
                               c.[Name] AS CategoryName, 
                               u.UserName AS UserName, u.FirstName, u.LastName, u.Email, u.ImageUrl
                          FROM Recipe r
                     LEFT JOIN Flavor f ON r.FlavorId = f.Id
                     LEFT JOIN Category c ON r.CategoryId = c.Id
                     LEFT JOIN UserProfile u ON r.UserProfileId = u.Id
                         WHERE r.UserProfileId = @UserProfileId
                      ORDER BY r.CreateDateTime DESC;";

                    DbUtils.AddParameter(cmd, "@UserProfileId", userId);

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
        public void Add(Recipe recipe)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        INSERT INTO Recipe (Title, Ingredients, Directions, ImageUrl, CreateDateTime, FlavorId, CategoryId, UserProfileId)
                 OUTPUT INSERTED.ID
                        VALUES (@Title, @Ingredients, @Directions, @ImageUrl, @CreateDateTime, @FlavorId, @CategoryId, @UserProfileId)
                                       ";
                    DbUtils.AddParameter(cmd, "@Title", recipe.Title);
                    DbUtils.AddParameter(cmd, "@Ingredients", recipe.Ingredients);
                    DbUtils.AddParameter(cmd, "@Directions", recipe.Directions);
                    DbUtils.AddParameter(cmd, "@ImageUrl", recipe.ImageUrl);
                    DbUtils.AddParameter(cmd, "@CreateDateTime", recipe.CreateDateTime);
                    DbUtils.AddParameter(cmd, "@FlavorId", recipe.FlavorId);
                    DbUtils.AddParameter(cmd, "@CategoryId", recipe.CategoryId);
                    DbUtils.AddParameter(cmd, "@UserProfileId", recipe.UserProfileId);

                    recipe.Id = (int)cmd.ExecuteScalar();
                }
            }
       }
        public void Update(Recipe recipe) 
        {
            using (var conn = Connection) 
            {
                conn.Open();
                using (var cmd = conn.CreateCommand()) 
                {
                    cmd.CommandText = @"
                        UPDATE Recipe
                           SET Title = @Title,
                               Ingredients = @Ingredients,
                               Directions = @Directions,
                               ImageUrl = @ImageUrl,
                               FlavorId = @FlavorId,
                               CategoryId = @CategoryId,
                               UserProfileId = @UserProfileId
                         WHERE Id =@Id
                                       ";
                    DbUtils.AddParameter(cmd, "@Title", recipe.Title);
                    DbUtils.AddParameter(cmd, "@Ingredients", recipe.Ingredients);
                    DbUtils.AddParameter(cmd, "@Directions", recipe.Directions);
                    DbUtils.AddParameter(cmd, "@ImageUrl", recipe.ImageUrl);
                    DbUtils.AddParameter(cmd, "@FlavorId", recipe.FlavorId);
                    DbUtils.AddParameter(cmd, "@CategoryId", recipe.CategoryId);
                    DbUtils.AddParameter(cmd, "@UserProfileId", recipe.UserProfileId);
                    DbUtils.AddParameter(cmd, "@Id", recipe.Id);

                    cmd.ExecuteNonQuery();
                }
            }
        }
        public void Delete(int id)
        {
            using (var conn = Connection)
            {
                conn.Open(); // Open the connection before the command executes
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = "DELETE FROM Recipe WHERE Id = @Id";
                    DbUtils.AddParameter(cmd, "@id", id);
                    cmd.ExecuteNonQuery();
                }
            }
        }

    }
}
