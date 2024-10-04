using System.ComponentModel.DataAnnotations;

namespace Capstone.Models
{
    public class Flavor
    {
        public int Id { get; set; }

        [Required]
        [MaxLength(50)]
        public string Name { get; set; }
    }
}
