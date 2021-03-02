﻿using Data.Forum.Entities;
using Data.Forum.Interfaces.ICategory;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Data.Forum.Repository
{
   public class CategoryRepository : BaseRepository<Category> , ICategoryRepository //implementacja ICategoryRepository + gotowe BaseRepo
    {
        public CategoryRepository(ForumDbContext dbContext) : base(dbContext)
        {}

        public async Task <Category> GetCategoryWithPosts(int id)
        {
            var result=_dbcontext.Categories.Include(p => p.Posts).SingleOrDefaultAsync(i => i.CategoryId == id);
            return await result; //Chyba dobrze!!!!
        }

    }
}
