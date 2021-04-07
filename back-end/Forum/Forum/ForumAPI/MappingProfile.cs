using AutoMapper;
using ForumAPI.Entities.Basic;
using ForumAPI.Entities.Mapped;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ForumAPI
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Category, CategoryInList>().ReverseMap();
            CreateMap<Post, PostInList>().ReverseMap();
            CreateMap<Comment, CommentInPost>().ReverseMap();
            CreateMap<IdentityUser, UserInfo>().ReverseMap();
        }
    }
}
