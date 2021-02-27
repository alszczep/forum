using Data.Forum.Entities;
using Data.Forum.Interfaces.IComment;
using Data.Forum.Interfaces.IRepository;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Data.Forum.Repository
{
   public class CommentRepository : BaseRepository<Comment>, ICommentRepository
    {
        public CommentRepository(ForumDbContext dbContext) : base(dbContext)
        {

        }
        public Task<Comment> AddAsync(Comment entity)
        {
            throw new NotImplementedException();
        }

        public Task DeleteAsync(Comment entity)
        {
            throw new NotImplementedException();
        }

        public Task EditAsync(Comment entity)
        {
            throw new NotImplementedException();
        }

        Task<Comment> IAsyncRepository<Comment>.GetByIdAsync(int id)
        {
            throw new NotImplementedException();
        }

        Task<IReadOnlyList<Comment>> IAsyncRepository<Comment>.GetAllAsync()
        {
            throw new NotImplementedException();
        }
    }
}
