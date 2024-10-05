using System.ComponentModel.DataAnnotations;

namespace Capstone.Models
{
    public class Review
    {
        public int Id { get; set; }
        [Required]
        public string Subject { get; set; }
        [Required]
        public string Content { get; set; }
        public DateTime CreatedDateTime { get; set; }
        [Required]
        public int RecipeId { get; set; }
        public Recipe Recipe { get; set; }  
        [Required]
        public int UserProfileId { get; set; }
        public UserProfile UserProfile { get; set; }
    }
}

