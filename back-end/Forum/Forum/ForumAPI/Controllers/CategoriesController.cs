using ForumAPI;
using ForumAPI.Entities.Basic;
using ForumAPI.Entities.Mapped;
using ForumAPI.Interfaces.IRepository;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ForumProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize(Roles = "user")]
    public class CategoriesController : ControllerBase
    {
        private readonly ICategoryRepository _categoryrepo;
        
        public CategoriesController(ICategoryRepository categoryrepo)
        {
            _categoryrepo = categoryrepo;
        }
        [HttpGet("all", Name = "GetAllCategories")]
        [AllowAnonymous]
        public async Task<ActionResult<CategoryInList>> GetAllCategories()
        {
            var all = await _categoryrepo.GetCategoryInList();
            return Ok(all);
        }
        [HttpGet("CatById", Name  = "GetCategoryById")]
        [AllowAnonymous]

        public async Task<ActionResult<CategoryInList>> GetCategoryById(int id)
        {
           var result=await _categoryrepo.GetByIdAsync(id);
            return Ok(result);
        }

        [HttpPost("add", Name = "AddCategory")]

        public async Task<ActionResult<Category>> CreateCategory([FromBody] CategoryInList newCategory)
        {
            await _categoryrepo.AddCategory(newCategory);
            return Ok();
        }

        [HttpPut("edit", Name = "EditCategory")]
        public async Task<ActionResult<CategoryInList>> EditCategory([FromBody] CategoryInList editedCategory)
        {
            await _categoryrepo.EditCategory(editedCategory);
            return Ok();
        }
        [HttpDelete("delete", Name = "DeleteCategory")]
        public async Task<ActionResult<CategoryInList>> DeleteCategory(int id)
        { 
                await _categoryrepo.DeleteCategory(id);
                return Ok();
        }
    }
}
