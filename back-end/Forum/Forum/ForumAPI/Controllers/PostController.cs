using ForumAPI.Entities.Mapped;
using ForumAPI.Interfaces.IRepository;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ForumProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize(Roles = "user")]
    public class PostController : ControllerBase
    {
        private readonly IPostRepository _postRepository;

        public PostController(IPostRepository postRepository)
        {
            _postRepository = postRepository;
        }
        [HttpGet("allFromCategory", Name = "GetAllPostsFromCategory")]
        [AllowAnonymous]
        public async Task<ActionResult<List<PostInList>>> GetPostByCategory(int Categoryid)
        {
            var all = await _postRepository.GetPostsFromSpecfiedCategory(Categoryid);
            return Ok(all);
        }

        [HttpPost("add", Name = "AddNewPost")]
        public async Task<ActionResult<PostInList>> AddNewPost(PostInList newPost)
        {
            await _postRepository.AddPost(newPost);
            return Ok();
        }

        [HttpPut("edit", Name = "EditPost")]
        public async Task<ActionResult<PostInList>> UpdatePost(PostInList UpdatedPost)
        {
            await _postRepository.EditPost(UpdatedPost);
            return Ok();
        }

        [HttpDelete("delete", Name = "DeletePost")]
        public async Task<ActionResult<PostInList>> DeletePost(int Postid)
        {
            await _postRepository.DeletePostById(Postid);
            return Ok();
        }
    }
}
