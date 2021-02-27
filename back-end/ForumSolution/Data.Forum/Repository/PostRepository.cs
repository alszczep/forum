using Data.Forum.Entities;
using Data.Forum.Interfaces.IPost;
using Data.Forum.Interfaces.IRepository;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Data.Forum.Repository
{
    public class PostRepository : BaseRepository<Post> , IPostRepository
    {
        public PostRepository (ForumDbContext dbContext) : base(dbContext)
        {

        }
        public Task<Post> AddAsync(Post entity)
        {
            throw new NotImplementedException();
        }

        public Task DeleteAsync(Post entity)
        {
            throw new NotImplementedException();
        }

        public Task EditAsync(Post entity)
        {
            throw new NotImplementedException();
        }

        Task<Post> IAsyncRepository<Post>.GetByIdAsync(int id)
        {
            throw new NotImplementedException();
        }

        Task<IReadOnlyList<Post>> IAsyncRepository<Post>.GetAllAsync()
        {
            throw new NotImplementedException();
        }
    }
}
