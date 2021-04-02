using ForumAPI.Entities.Mapped;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ForumAPI.Interfaces
{
   public interface IUser
    {
        Task RegisterUser(RegisterModel model);
        Task LogInUser(LogInModel model);
        Task LogOutUser();
    }
}
