using ForumAPI.Entities.Mapped;
using ForumAPI.Interfaces.IRepository;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ForumAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize(Roles = "user")]
    public class CommentController : ControllerBase
    {
        private readonly ICommentRepository _commentRepository;

        public CommentController (ICommentRepository commentRepository)
        {
            _commentRepository = commentRepository;
        }
        [HttpGet("CommentsFromPost", Name = "GetAllCommentsFromPost")]
        [AllowAnonymous]
        public ActionResult<List<CommentInPost>> GetCommentsFromPost(int Postid)
        {
          var comments =  _commentRepository.GetCommentsFromPostById(Postid);
            return comments;
        }
        [HttpPost("add", Name = "AddComment")]
        public async Task<ActionResult<CommentInPost>> AddComent(CommentInPost comment)
        {
           await _commentRepository.AddComment(comment);
            return Ok();
        }
        [HttpPut("edit", Name = "EditComment")]
        public async Task<ActionResult<CommentInPost>> EditComment(CommentInPost comment)
        {
           await _commentRepository.EditComment(comment);
            return Ok();
        }
        [HttpDelete("delete", Name = "DeleteComment")]
        public async Task<ActionResult> DeleteComent (int commentId)
        {
            await _commentRepository.DeleteComment(commentId);
            return Ok();
        }
    }
}
