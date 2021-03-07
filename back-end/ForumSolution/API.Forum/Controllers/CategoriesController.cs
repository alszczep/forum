using Data.Forum;
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
    [Route("api/Categories/[controller]")]
    [ApiController]
    public class CategoriesController : ControllerBase
    {
        private readonly ICategoryRepository _categoryrepo;
        private readonly ForumDbContext _dbcontext;
        public CategoriesController(ICategoryRepository categoryrepo,ForumDbContext dbcontext)
        {
            _categoryrepo = categoryrepo;
            _dbcontext = dbcontext;
        }
        [HttpGet("all" , Name ="GetAllCategories")]
        public async Task<ActionResult<CategoryInList>> GetAllCategories()
        {
            var all = await _categoryrepo.GetCategoryInList();
            return Ok(all);
        }

        [HttpPost(Name = "AddCategory")]

        public async Task<ActionResult<Category>> CreateCategory([FromBody] CategoryInList newCategory )
        {
            await _categoryrepo.AddCategory(newCategory);
            return Ok();
        }

        [HttpPut(Name = "EditCategory")]
        public async Task<ActionResult<CategoryInList>> EditCategory([FromBody] CategoryInList editedCategory)
        {
            await _categoryrepo.EditCategory(editedCategory);
            return Ok();
        }
        

        //[HttpDelete(Name = "DeleteCategory")]
        //public async Task<ActionResult<CategoryInList>> DeleteCategory([FromBody] Category category)
        //{
        //    await _categoryrepo.DeleteAsync(category);
        //    return Ok();
        //}
        [HttpDelete(Name = "DeleteCategory")]
        public async Task<ActionResult<CategoryInList>> DeleteCategory(int id)
        {
            if (id == 0 || id == null)
            {
                return NoContent();
            }
            else {
                var category = _dbcontext.Categories.FirstOrDefault<Category>(x => x.CategoryId == id);
                await _categoryrepo.DeleteAsync(category);
                return Ok();
            }
        }
    } 
}
