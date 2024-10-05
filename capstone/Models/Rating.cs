using System.ComponentModel.DataAnnotations;

namespace Capstone.Models
{
    public class Rating
    {
        public int Id { get; set; }
        public int StarCount { get; set; }
        [Required]
        [MaxLength(255)]
        public string ImageUrl { get; set; }
    }
}
