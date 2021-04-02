using ForumAPI.Entities.Basic;
using ForumAPI.Entities.Mapped;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ForumAPI.Interfaces.IRepository
{
    public interface ICategoryRepository : IAsyncRepository<Category> //rozszerzenie podstawowego repo
    {
        Task<Category> GetCategoriesWithPosts(int id);
        Task<CategoryInList> GetCategoryById(int id);
        Task<List<CategoryInList>> GetCategoryInList();
        Task EditCategory(CategoryInList passedData);
        Task AddCategory(CategoryInList newData);
        Task DeleteCategory(int categoryId);

    }
}
