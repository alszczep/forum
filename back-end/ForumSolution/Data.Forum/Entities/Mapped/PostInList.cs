﻿using System;
using System.Collections.Generic;
using System.Text;

namespace Data.Forum.Entities.Mapped
{
    public class PostInList
    {
        public int PostId { get; set; }
        public int AuthorId { get; set; }
        public string Title { get; set; }
        public string Context { get; set; }
        public DateTime Date { get; set; }

        public int CategoryId { get; set; }
    }
}
