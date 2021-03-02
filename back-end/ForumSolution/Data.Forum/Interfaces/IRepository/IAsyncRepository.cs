using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Data.Forum.Interfaces.IRepository
{
    public interface IAsyncRepository <T> where T: class //postawa repo
    {
        Task<IReadOnlyList<T>> GetAllAsync();
        Task<T> GetByIdAsync(int id);
        Task<T> AddAsync(T entity);
        Task EditAsync(T entity);
        Task DeleteAsync(T entity);

    }
}
