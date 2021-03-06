﻿using ForumAPI.Entities.Basic;
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
        Task<IdentityResult> RegisterUser(RegisterModel model);
        Task<LoginInfoBasic> LogInUser(LogInModel model);
        Task<string> LogOutUser();

    }
}
