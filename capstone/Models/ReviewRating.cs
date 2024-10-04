namespace Capstone.Models
{
    public class ReviewRating
    {
        public int Id { get; set; }
        public int RecipeId { get; set; }
        public int ReviewId { get; set; }
        public int UserProfileId { get; set; }
    }
}
