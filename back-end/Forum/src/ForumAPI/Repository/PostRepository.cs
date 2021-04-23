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
    public class PostRepository : BaseRepository<Post>, IPostRepository
    {
        private readonly IMapper _mapper;
        public PostRepository(ForumDbContext dbContext, IMapper mapper) : base(dbContext)
        {
            _mapper = mapper;
        }

        public async Task<List<PostInList>> GetPostsFromSpecfiedCategory(int id)
        {
            var post = await GetAllAsync();
            var filtered = post.Where(x => x.CategoryId == id).ToList();

            return _mapper.Map<List<PostInList>>(filtered);
        }
        public async Task<Post> GetPostWithCommets(int id)
        {
            var result = _dbcontext.Posts.Include(c => c.Comments).FirstOrDefaultAsync(i => i.PostId == id);
            return await result;
        }
        public async Task<int> AddPost(PostInList newPost)
        {
            newPost.Date = DateTime.Now;
            var mappedNewPost = _mapper.Map<Post>(newPost);
            var response= await AddAsync(mappedNewPost);
            return response.PostId;
        }
        public async Task<int> EditPost(PostInList newPost)
        {
            newPost.Date = DateTime.Now;
            var mappedEditedPost = _mapper.Map<Post>(newPost);
            await EditAsync(mappedEditedPost);
            return mappedEditedPost.PostId;
        }
        public async Task DeletePostById(int Postid)
        {
            var PostToDelete = await _dbcontext.Posts.FirstOrDefaultAsync(x => x.PostId == Postid);
            await DeleteAsync(PostToDelete);
        }


    }
}
