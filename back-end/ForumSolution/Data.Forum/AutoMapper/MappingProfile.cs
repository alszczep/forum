using AutoMapper;
using Data.Forum.Entities;
using Data.Forum.Entities.Mapped;
using System;
using System.Collections.Generic;
using System.Text;

namespace Data.Forum.AutoMapper
{
   public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Category, CategoryInList>().ReverseMap();
        }
    }
}
