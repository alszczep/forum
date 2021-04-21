using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ForumAPI.Entities.Mapped
{
    public class CommentInPost
    {
        public int CommentId { get; set; }
        public int AuthorId { get; set; }
        public string Content { get; set; }
        public DateTime Date { get; set; }


        public int PostId { get; set; }
    }
}
