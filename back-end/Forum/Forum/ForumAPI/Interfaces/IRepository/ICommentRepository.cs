using ForumAPI.Entities.Basic;
using ForumAPI.Entities.Mapped;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ForumAPI.Interfaces.IRepository
{
    public interface ICommentRepository : IAsyncRepository<Comment>
    {
        List<CommentInPost> GetCommentsFromPostById(int id);
        Task<Comment> AddComment(CommentInPost comment);
        Task EditComment(CommentInPost edit);
        Task DeleteComment(int id);
    }
}
