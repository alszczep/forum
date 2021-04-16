using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ForumAPI.Entities.Basic
{
    public class Category
    {
        [Key]
        public int CategoryId { get; set; }
        [Required]
        public string Name { get; set; }
        public ICollection<Post> Posts { get; set; }
    }
}
