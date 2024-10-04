using System.ComponentModel.DataAnnotations;

namespace Capstone.Models
{
    public class Comment
    {
        public int Id { get; set; }
        [Required]
        public string Subject { get; set; }
        [Required]
        public string Content { get; set; }
        [Required]
        [DataType(DataType.DateTime)]
        public DateTime CreatDateTime { get; set; }
        [Required]
        public int ReviewId { get; set; }
        [Required]
        public int UserProfileId { get; set; }

    }
}
