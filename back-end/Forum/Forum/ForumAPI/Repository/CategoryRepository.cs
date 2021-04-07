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
    public class CategoryRepository : BaseRepository<Category>, ICategoryRepository //implementacja ICategoryRepository + gotowe BaseRepo
    {
        private readonly IMapper _mapper;
        public CategoryRepository(ForumDbContext dbContext, IMapper mapper) : base(dbContext)
        {
            _mapper = mapper;
        }


        public async Task<Category> GetCategoriesWithPosts(int id)
        {
            var result = _dbcontext.Categories.Include(p => p.Posts).SingleOrDefaultAsync(i => i.CategoryId == id);
            return await result; //Chyba dobrze!!!!
        }

        public async Task<List<CategoryInList>> GetCategoryInList()
        {
            var result = await GetAllAsync();
            return _mapper.Map<List<CategoryInList>>(result);
        }

        public async Task EditCategory(CategoryInList passsedData)
        {
            var result = _mapper.Map<Category>(passsedData);
            await EditAsync(result);
        }

        public async Task<Category> AddCategory(CategoryInList newData)
        {
            var result = _mapper.Map<Category>(newData);
            await AddAsync(result);
            return result;
        }
        public async Task DeleteCategory(int id)
        {
            var category = _dbcontext.Categories.FirstOrDefault<Category>(x => x.CategoryId == id);
            await DeleteAsync(category);
        }

        public async Task<CategoryInList> GetCategoryById(int id)
        {
            var result = await _dbcontext.Categories.SingleOrDefaultAsync(a=>a.CategoryId==id);
            return _mapper.Map<CategoryInList>(result);
        }
        //var result = _mapper.Map<Category>(newCategory);
        //await AddAsync(result);


    }
}
