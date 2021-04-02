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
        //Task<PostInList> GetPostsFromSpecfiedCategory(int CatId);
        Task<List<PostInList>> GetPostsFromSpecfiedCategory(int id);
        Task DeletePostById(int Postid);
        Task EditPost(PostInList newPost);
        Task AddPost(PostInList newPost);
    }
}
