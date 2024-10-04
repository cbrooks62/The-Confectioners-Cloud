using System.ComponentModel.DataAnnotations;

namespace Capstone.Models
{
    public class UserProfile
    {
        public int Id { get; set; }
        [Required]
        [MaxLength(50)]
        public string UserName { get; set; }
        [Required]
        [MaxLength(50)]
        public string FirstName { get; set; }
        [Required]
        [MaxLength(50)]
        public string LastName { get; set; }
        [Required]
        [DataType(DataType.EmailAddress)]
        [MaxLength(255)]
        public string Email { get; set; }
        [DataType(DataType.Url)]
        [MaxLength(255)]
        public string ImageUrl { get; set; }

    }
}
