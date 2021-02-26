using Data.Forum.Entities;
using Data.Forum.Interfaces.IRepository;
using System;
using System.Collections.Generic;
using System.Text;

namespace Data.Forum.Interfaces.ICategory
{
    public interface ICategoryRepository : IAsyncRepository<Category>
    {
    }

    
}
