using Data.Forum.Interfaces.IRepository;
using Data.Forum.Repository;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Reflection;
using System.Text;

namespace Data.Forum
{
   public static class PresistanceWithDataForum
    {
        public static IServiceCollection AddDataForumService(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddDbContext<ForumDbContext>(options => options.UseSqlServer(configuration.GetConnectionString("DefaultConnection")));
            services.AddAutoMapper(Assembly.GetExecutingAssembly());
            services.AddScoped(typeof(IAsyncRepository<>), typeof(BaseRepository<>));
            services.AddScoped<ICategoryRepository,CategoryRepository>();
            services.AddScoped<IPostRepository, PostRepository>();

            return services;
        }


    }
}
