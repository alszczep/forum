using System;
using System.Collections.Generic;
using System.Text;

namespace Data.Forum.Entities.Mapped
{
   public class CommentInPost
    {
        public int CommentId { get; set; }
        public string Author { get; set; }
        public string Content { get; set; }
        public DateTime Data { get; set; }


        public int PostId { get; set; }
    }
}
