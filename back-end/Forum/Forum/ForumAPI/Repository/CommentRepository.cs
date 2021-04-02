using AutoMapper;
using ForumAPI.Entities.Basic;
using ForumAPI.Entities.Mapped;
using ForumAPI.Interfaces.IRepository;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ForumAPI.Repository
{
    public class CommentRepository : BaseRepository<Comment>, ICommentRepository
    {
        private readonly IMapper _mapper;
        public CommentRepository(ForumDbContext dbContext, IMapper mapper) : base(dbContext)
        {
            _mapper = mapper;
        }
        public async Task AddComment(CommentInPost newComment)
        {
            var result = _mapper.Map<Comment>(newComment);
            await AddAsync(result);
        }

        public async Task DeleteComment(int id)
        {
            var comment = _dbcontext.Comments.FirstOrDefault<Comment>(x => x.CommentId == id);
                await DeleteAsync(comment);
        }

        public async Task EditComment(CommentInPost edit)
        {
            var result = _mapper.Map<Comment>(edit);
            await EditAsync(result);
        }

        public List<CommentInPost> GetCommentsFromPostById(int id)
        {
            var result =  _dbcontext.Comments.Where(p => p.PostId == id).ToList();
            return  _mapper.Map<List<CommentInPost>>(result);
        }
    }
}
