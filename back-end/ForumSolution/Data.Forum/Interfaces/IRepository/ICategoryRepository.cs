using Data.Forum.Entities;
using Data.Forum.Entities.Mapped;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Data.Forum.Interfaces.IRepository
{
   public interface ICategoryRepository : IAsyncRepository<Category> //rozszerzenie podstawowego repo
    {
        Task<Category> GetCategoriesWithPosts(int id);
        Task<List<CategoryInList>> GetCategoryInList();
    }
}
