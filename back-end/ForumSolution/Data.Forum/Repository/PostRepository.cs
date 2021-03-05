using Data.Forum.Entities;
using Data.Forum.Interfaces.IRepository;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Data.Forum.Repository
{
   public class PostRepository : BaseRepository<Post> , IPostRepository
    {
        public PostRepository(ForumDbContext dbContext) : base(dbContext)
        {}
        public async Task<Post> GetPostWithCommets (int id)
        {
            var result = _dbcontext.Posts.Include(c => c.Comments).FirstOrDefaultAsync(i => i.PostId == id);
            return await result;
        }
    }
}
