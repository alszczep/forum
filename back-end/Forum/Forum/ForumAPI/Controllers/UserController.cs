using ForumAPI.Entities.Mapped;
using ForumAPI.Interfaces;
using ForumAPI.Repository;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ForumAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize(Roles = "user")]
    public class UserController : ControllerBase
    {
        private readonly IUser _uRepository;
        
        public UserController(IUser userRepository)
        {
            _uRepository = userRepository;
        }
        [HttpPost("register",Name ="Register")]
        [AllowAnonymous]
        public async Task<IActionResult> Register([FromBody] RegisterModel user )
        {
            await _uRepository.RegisterUser(user);
            return Ok();
        }
        [HttpPost("login",Name ="LogIn")]
        [AllowAnonymous]
        public async Task<IActionResult> LogIn([FromBody] LogInModel model)
        {
            await _uRepository.LogInUser(model);
            return Ok();
        }
        [HttpGet]
        public async Task<IActionResult> LogOut()
        {
            await _uRepository.LogOutUser();
            return Ok();
        }

    }
}
