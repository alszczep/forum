using Data.Forum.Entities;
using Data.Forum.Entities.Mapped;
using Data.Forum.Interfaces.IRepository;
using Data.Forum.Repository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Forum.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoriesController : ControllerBase
    {
        private readonly ICategoryRepository _categoryrepo;
        public CategoriesController(ICategoryRepository categoryrepo)
        {
            _categoryrepo = categoryrepo;
        }
        [HttpGet("all" , Name ="GetAllCategories")]
        public async Task<ActionResult<CategoryInList>> GetAllCategories()
        {
            var all = await _categoryrepo.GetCategoryInList();
            return Ok(all);
        }

        [HttpPost(Name = "AddCategory")]

        public async Task<ActionResult<Category>> CreateCategory([FromBody] Category newCategory )
        {
            var brandNew = await _categoryrepo.AddAsync(newCategory);
            return Ok();
        }
    } 
}
