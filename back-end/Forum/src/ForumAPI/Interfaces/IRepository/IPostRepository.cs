using ForumAPI.Entities.Basic;
using ForumAPI.Entities.Mapped;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ForumAPI.Interfaces.IRepository
{
    public interface IPostRepository : IAsyncRepository<Post> //rozszerzenie podstawowego repo
    {
        Task<Post> GetPostWithCommets(int id);
        Task<List<PostInList>> GetPostsFromSpecfiedCategory(int id);
        Task DeletePostById(int Postid);
        Task<int> EditPost(PostInList newPost);
        Task<int> AddPost(PostInList newPost);
    }
}
