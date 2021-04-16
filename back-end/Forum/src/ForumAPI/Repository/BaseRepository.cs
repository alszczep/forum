using ForumAPI.Interfaces.IRepository;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ForumAPI.Repository
{
    public class BaseRepository<T> : IAsyncRepository<T> where T : class //implementacja podstawowego repo
    {
        protected readonly ForumDbContext _dbcontext;
        public BaseRepository(ForumDbContext dbContext)
        {
            _dbcontext = dbContext;
        }
        public async Task<T> AddAsync(T entity)
        {
            await _dbcontext.Set<T>().AddAsync(entity);
            await _dbcontext.SaveChangesAsync();

            return entity;
        }

        public async Task DeleteAsync(T entity)
        {
            _dbcontext.Set<T>().Remove(entity);
            await _dbcontext.SaveChangesAsync();
        }

        public async Task EditAsync(T entity)
        {
            _dbcontext.Entry(entity).State = EntityState.Modified;
            await _dbcontext.SaveChangesAsync();
        }

        public async Task<T> GetByIdAsync(int id)
        {
            return await _dbcontext.Set<T>().FindAsync(id);
        }

        public async Task<IReadOnlyList<T>> GetAllAsync()
        {
            return await _dbcontext.Set<T>().ToListAsync();
        }
    }
}
