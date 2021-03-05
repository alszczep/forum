using AutoMapper;
using Data.Forum.Entities;
using Data.Forum.Entities.Mapped;
using Data.Forum.Interfaces.IRepository;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
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

    }
}
