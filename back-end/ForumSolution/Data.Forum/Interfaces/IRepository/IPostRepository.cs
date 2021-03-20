using Data.Forum.Entities;
using Data.Forum.Entities.Mapped;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Data.Forum.Interfaces.IRepository
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
