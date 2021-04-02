using ForumAPI.Entities.Mapped;
using ForumAPI.Repository;
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
    [Authorize(Roles = "admin")]
    public class AdminController : ControllerBase
    {
        private readonly CategoryRepository _categoryrepo;
        private readonly PostRepository _postrepo;
        private readonly CommentRepository _commentrepo;

        public AdminController(CategoryRepository categoryrepo, PostRepository postrepo, CommentRepository commentrepo)
        {
            _categoryrepo = categoryrepo;
            _commentrepo = commentrepo;
            _postrepo = postrepo;
        }

        [HttpDelete("deleteCategory", Name = "AdminDeleteCategory")]
        public async Task<ActionResult<CategoryInList>> DeleteCategory(int id)
        {
            await _categoryrepo.DeleteCategory(id);
            return Ok();
        }
        [HttpDelete("deleteComment", Name = "AdminDeleteComment")]
        public ActionResult<CommentInPost> DeleteComment(int id)
        {
          _commentrepo.DeleteComment(id);
            return Ok();
        }
        [HttpDelete("deletePost", Name = "AdminDeletePost")]
        public async Task<ActionResult<PostInList>> DeletePost(int id)
        {
            await _postrepo.DeletePostById(id);
            return Ok();
        }

    }
}
