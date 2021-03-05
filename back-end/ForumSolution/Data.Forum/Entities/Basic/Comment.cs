using System;
using System.Collections.Generic;
using System.Text;

namespace Data.Forum.Entities
{
   public class Comment
    {
        public int CommentId { get; set; }
        public string Author { get; set; }
        public string Content { get; set; }
        public DateTime Data { get; set; }


        public int PostId { get; set; }
        public Post Post { get; set; }
    }
}
