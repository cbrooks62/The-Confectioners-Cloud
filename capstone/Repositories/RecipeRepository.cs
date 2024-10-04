using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Hosting;
using Capstone.Models;
using Capstone.Utils;

namespace Capstone.Repositories
{
    public class RecipeRepository : BaseRepository
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
                        
                                       ";
                }
            }   
        }
    }
}
