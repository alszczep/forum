using Data.Forum.Entities;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Data.Forum.Interfaces.IRepository
{
   public interface IPostRepository : IAsyncRepository<Post> //rozszerzenie podstawowego repo
    {
        Task<Post> GetPostWithCommets(int id);
    }
}
