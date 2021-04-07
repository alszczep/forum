using AutoMapper;
using ForumAPI.Entities.Mapped;
using ForumAPI.Interfaces;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ForumAPI.Repository
{
    public class UserRepository : IUser
    {
        private readonly UserManager<IdentityUser> _uManager;
        private readonly SignInManager<IdentityUser> _sInManager;
        private readonly IMapper _mapper;
        public UserRepository(UserManager<IdentityUser> userManager, SignInManager<IdentityUser> signInManager, IMapper mapper)
        {
            _uManager = userManager;
            _sInManager = signInManager;
            _mapper = mapper;
        }   

        public async Task<UserInfo> LogInUser(LogInModel model)
        {
            var user = await _uManager.FindByNameAsync(model.Username);
            if(user != null)
            {
                await _sInManager.PasswordSignInAsync(model.Username, model.Password, false, false);
            }
            var info = _mapper.Map<UserInfo>(user);
            return info;
        }

        public async Task LogOutUser()
        {
            await _sInManager.SignOutAsync();
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
