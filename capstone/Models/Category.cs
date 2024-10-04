using System.ComponentModel.DataAnnotations;

namespace Capstone.Models
{
    public class Category
    {
        public int Id { get; set; }

        [Required]
        [MaxLength(50)]
        public string Name { get; set; }
    }
}
