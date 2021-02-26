using System;
using System.Collections.Generic;
using System.Text;

namespace Data.Forum.Entities
{
    public class Category
    {
        public int CategoryId { get; set; }
        public string Name { get; set; }
        public ICollection<Post> Posts { get; set; }

    }
}
