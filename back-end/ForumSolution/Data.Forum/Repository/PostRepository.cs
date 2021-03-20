﻿using AutoMapper;
using Data.Forum.Entities;
using Data.Forum.Entities.Mapped;
using Data.Forum.Interfaces.IRepository;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using System.Linq;

namespace Data.Forum.Repository
{
    public class PostRepository : BaseRepository<Post>, IPostRepository
    {
        private readonly IMapper _mapper;
        public PostRepository(ForumDbContext dbContext, IMapper mapper) : base(dbContext)
        {
            _mapper = mapper;
        }
        //public async Task <PostInList> GetPostsFromSpecfiedCategory(int CatId)
        //    {
        //    //var posts = await _dbcontext.Categories.Include(p => p.Posts).SingleOrDefaultAsync(i => i.CategoryId == CatId);
        //    //var posts = await _dbcontext.Posts.Include(c => c.Category).SingleOrDefaultAsync(i=>i.CategoryId==CatId);
        //    var posts =  _dbcontext.Posts.Where(x => x.CategoryId == CatId).ToListAsync();
        //    var newposts = _mapper.Map<PostInList>(posts);
        //    return newposts;
        //    //return posts;
        //}
        public async Task<List<PostInList>> GetPostsFromSpecfiedCategory(int id)
        {
            var post = await GetAllAsync();
            var filtered= post.Where(x => x.CategoryId == id).ToList();

            return _mapper.Map<List<PostInList>>(filtered);
        }
        public async Task<Post> GetPostWithCommets (int id)
        {
            var result = _dbcontext.Posts.Include(c => c.Comments).FirstOrDefaultAsync(i => i.PostId == id);
            return await result;
        }
        public async Task AddPost(PostInList newPost)
        {
           var mappedNewPost= _mapper.Map<Post>(newPost);
            //await _dbcontext.AddAsync<Post>(mappedNewPost);
            await AddAsync(mappedNewPost);
        }
        public async Task EditPost(PostInList newPost)
        {
            var mappedEditedPost = _mapper.Map<Post>(newPost);
            await EditAsync(mappedEditedPost);
        }
        public async Task DeletePostById(int Postid)
        {
            var PostToDelete = await _dbcontext.Posts.FirstOrDefaultAsync(x => x.PostId == Postid);
            await DeleteAsync(PostToDelete);
        }

        
    }
}
