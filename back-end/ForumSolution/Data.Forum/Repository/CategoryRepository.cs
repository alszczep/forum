using AutoMapper;
using Data.Forum.Entities;
using Data.Forum.Entities.Mapped;
using Data.Forum.Interfaces.IRepository;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data.Forum.Repository
{
   public class CategoryRepository : BaseRepository<Category> , ICategoryRepository //implementacja ICategoryRepository + gotowe BaseRepo
    {
        private readonly IMapper _mapper;
        public CategoryRepository(ForumDbContext dbContext, IMapper mapper) : base(dbContext)
        {
            _mapper = mapper;
        }


        public async Task <Category> GetCategoriesWithPosts(int id)
        {
            var result=_dbcontext.Categories.Include(p => p.Posts).SingleOrDefaultAsync(i => i.CategoryId == id);
            return await result; //Chyba dobrze!!!!
        }

        public async Task<List<CategoryInList>> GetCategoryInList()
        {
            var result=await GetAllAsync();
            return  _mapper.Map<List<CategoryInList>>(result);
        }

        public async Task EditCategory(CategoryInList passsedData)
        {
           var result= _mapper.Map<Category>(passsedData);
            await EditAsync(result);
        }

        public async Task AddCategory(CategoryInList newData)
        {
            var result = _mapper.Map<Category>(newData);
            await AddAsync(result);
        }
        public async Task DeleteCategory(int id)
        {
            var category = _dbcontext.Categories.FirstOrDefault<Category>(x => x.CategoryId == id);
            await DeleteAsync(category);
        }
        //var result = _mapper.Map<Category>(newCategory);
        //await AddAsync(result);


    }
}
