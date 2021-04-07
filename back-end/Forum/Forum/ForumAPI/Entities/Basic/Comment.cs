using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ForumAPI.Entities.Basic
{
    public class Comment
    {
        [Key]
        public int CommentId { get; set; }
        public string AuthorData { get; set; }
        public string Content { get; set; }
        public DateTime Data { get; set; }


        public int PostId { get; set; }
        public Post Post { get; set; }
    }
}
