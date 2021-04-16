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
        public async Task<int> AddComment(CommentInPost newComment)
        {
            newComment.Date = DateTime.Now;
            var result = _mapper.Map<Comment>(newComment);
            await AddAsync(result);
            return result.CommentId;
        }

        public async Task DeleteComment(int id)
        {
            var comment = _dbcontext.Comments.FirstOrDefault<Comment>(x => x.CommentId == id);
                await DeleteAsync(comment);
        }

        public async Task<int> EditComment(CommentInPost edit)
        {
            edit.Date = DateTime.Now;
            var result = _mapper.Map<Comment>(edit);
            await EditAsync(result);
            return result.CommentId;
        }

        public List<CommentInPost> GetCommentsFromPostById(int id)
        {
            var result =  _dbcontext.Comments.Where(p => p.PostId == id).ToList();
            return  _mapper.Map<List<CommentInPost>>(result);
        }
    }
}
