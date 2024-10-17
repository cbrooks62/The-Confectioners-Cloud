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
        public DateTime CreateDateTime { get; set; }
        [Required]
        public int RatingId { get; set; }   
        public Rating? Rating { get; set; }
        public int RecipeId { get; set; }
        public Recipe? Recipe { get; set; }  
        [Required]
        public int UserProfileId { get; set; }
        public UserProfile? UserProfile { get; set; }
    }
}

