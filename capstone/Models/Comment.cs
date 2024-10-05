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
        public DateTime CreateDateTime { get; set; }
        [Required]
        public int ReviewId { get; set; }
        public Review Review { get; set; }  
        [Required]
        public int UserProfileId { get; set; }
        public UserProfile UserProfile { get; set; }
    }

}

