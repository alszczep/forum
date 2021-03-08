using Data.Forum;
using Data.Forum.Entities;
using Data.Forum.Entities.Mapped;
using Data.Forum.Interfaces.IRepository;
using Data.Forum.Repository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Forum.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PostController : ControllerBase
    {
        private readonly IPostRepository _postRepository;

        public PostController(IPostRepository postRepository)
        {
            _postRepository = postRepository;
        }
        [HttpGet("allFromCategory", Name ="GetAllPostsFromCategory")]
        public async Task<ActionResult<List<PostInList>>> GetPostByCategory(int Categoryid)
        {
            var all = await _postRepository.GetPostsFromSpecfiedCategory(Categoryid);
            return Ok(all);
        }
        //public async Task<ActionResult<PostInList>> GetAllPosts(int CategoryId)
        //{
        //  var all= await _postRepository.GetPostsFromSpecfiedCategory(CategoryId);
        //    return Ok(all);
        //}


        [HttpPost ("add",Name = "AddNewPost")]
        public async Task<ActionResult<PostInList>> AddNewPost(PostInList newPost)
        {
            await _postRepository.AddPost(newPost);
            return Ok();
        }

        [HttpPut ("edit", Name = "EditPost")]
        public async Task<ActionResult<PostInList>> UpdatePost(PostInList UpdatedPost)
        {
            await _postRepository.EditPost(UpdatedPost);
            return Ok();
        }

        [HttpDelete ("delete", Name = "DeletePost")]
        public async Task<ActionResult<PostInList>> DeletePost(int Postid)
        {
            await _postRepository.DeletePostById(Postid);
            return Ok();
        }
    }
}
