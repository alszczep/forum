using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ForumAPI.Entities.Basic
{
    public class Post
    {
        [Key]
        public int PostId { get; set; }
        public string AuthorData { get; set; }
        public string Title { get; set; }
        public string Context { get; set; }
        public DateTime Date { get; set; }

        public int CategoryId { get; set; }
        public Category Category { get; set; }

        public ICollection<Comment> Comments { get; set; }
    }
}
