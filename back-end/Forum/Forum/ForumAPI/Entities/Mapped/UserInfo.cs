using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ForumAPI.Entities.Mapped
{
    public class UserInfo 
    {
        public string Id { get; set; }
        
        [EmailAddress]
        public string Email { get; set; }
    }
}
