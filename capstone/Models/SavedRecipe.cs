using System.ComponentModel.DataAnnotations;

namespace Capstone.Models
{
    public class SavedRecipe
    {
        public int Id { get; set; }
        public int RecipeId { get; set; }
        public Recipe? Recipe { get; set; }
        [Required]
        public int UserProfileId { get; set; }
        public UserProfile? UserProfile { get; set; }

    }
}
