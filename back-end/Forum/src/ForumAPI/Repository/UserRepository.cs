using AutoMapper;
using ForumAPI.Entities.Basic;
using ForumAPI.Entities.Mapped;
using ForumAPI.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace ForumAPI.Repository
{
    public class UserRepository : IUser
    {
        private readonly UserManager<IdentityUser> _uManager;
        private readonly SignInManager<IdentityUser> _sInManager;
        private readonly IMapper _mapper;
        private readonly IHttpContextAccessor _httpcon;
        public UserRepository(UserManager<IdentityUser> userManager, SignInManager<IdentityUser> signInManager, IMapper mapper, IHttpContextAccessor httpcon)
        {
            _uManager = userManager;
            _sInManager = signInManager;
            _mapper = mapper;
            _httpcon = httpcon;
        }   

        public async Task<LoginInfoBasic> LogInUser(LogInModel model)
        {
            var user = await _uManager.FindByNameAsync(model.Username);
            
            if(user != null)
            {
              var status =  await _sInManager.PasswordSignInAsync(model.Username, model.Password, false, false);
                if (status.Succeeded)
                {
                    var info = _mapper.Map<UserInfo>(user);
                    var result = new LoginInfoBasic(status, info);
                    return result;
                }
                var bresult = new LoginInfoBasic(status, null);
                return bresult;
            }
            
            return null;
        }

        public async Task<string> LogOutUser()
        {
            await _sInManager.SignOutAsync();
            string result = "logout";
            //var result = _httpcon.HttpContext.User?.FindFirstValue(ClaimTypes.NameIdentifier);
            //ClaimsPrincipal currentUser = this.
            //var result = _sInManager.IsSignedIn();
            //var result= _httpcon.HttpContext.User.FindFirst();
            //if (result == null)
            //{
            //    return null;
            //}
            //else {
            //    return result;
            //}
            return result;
        }

        public async Task<IdentityResult> RegisterUser(RegisterModel model)
        {
            var user = new IdentityUser { UserName=model.UserName, Email=model.Email};
            var result=  await _uManager.CreateAsync(user, model.Password);
            if (result.Succeeded)
            {
                user = await _uManager.FindByNameAsync(model.UserName);
               await _uManager.AddToRoleAsync(user, "user" );
            }
            return result;
        }
    }
}
