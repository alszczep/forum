using Data.Forum.Entities;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Data.Forum.Interfaces.IRepository
{
   public interface ICateogryRepository : IAsyncRepository<Category> //rozszerzenie podstawowego repo
    {
        Task<List<Category>> GetCategoriesWithPosts();
    }
}
