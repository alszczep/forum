using ForumAPI.Entities.Mapped;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ForumAPI.Entities.Basic
{
    public class LoginInfoBasic 
    {
        public LoginInfoBasic(SignInResult result, UserInfo info)
        {
           Status = result;
            UInfo = info;
        }
        public SignInResult Status { get; set; }

        public UserInfo UInfo { get; set; }

    }
}
