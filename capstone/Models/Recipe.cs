using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace Capstone.Models
{
    public class Recipe
    {
        public int Id { get; set; }
        [Required]
        public string Title { get; set; }
        [Required]
        public string Ingredients { get; set; }
        [Required]
        public string Directions { get; set; }
        [DisplayName("Image URL")]
        public string ImageUrl { get; set; }
        public DateTime CreateDateTime { get; set; }
        public int FlavorId { get; set; }
        public Flavor Flavor { get; set; }
        public int CategoryId { get; set; }
        public Category Category { get; set; }
        public int UserProfileId { get; set; }
        public UserProfile UserProfile { get; set; }
    }
}
