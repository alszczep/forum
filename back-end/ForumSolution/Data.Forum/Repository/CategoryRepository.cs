using Data.Forum.Entities;
using Data.Forum.Interfaces.ICategory;
using Data.Forum.Interfaces.IRepository;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Data.Forum.Repository
{
    public class CategoryRepository : BaseRepository<Category>, ICategoryRepository
    {
        public CategoryRepository(ForumDbContext dbContext) :base(dbContext)
        {

        }
        public Task<Category> AddAsync(Category entity)
        {
            throw new NotImplementedException();
        }

        public Task DeleteAsync(Category entity)
        {
            throw new NotImplementedException();
        }

        public Task EditAsync(Category entity)
        {
            throw new NotImplementedException();
        }

        Task<Category> IAsyncRepository<Category>.GetByIdAsync(int id)
        {
            throw new NotImplementedException();
        }

        Task<IReadOnlyList<Category>> IAsyncRepository<Category>.GetAllAsync()
        {
            throw new NotImplementedException();
        }
    }
}
