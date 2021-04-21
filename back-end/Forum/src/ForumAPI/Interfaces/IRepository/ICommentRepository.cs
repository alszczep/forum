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
        Task<int> AddComment(CommentInPost comment);
        Task<int> EditComment(CommentInPost edit);
        Task DeleteComment(int id);
    }
}
