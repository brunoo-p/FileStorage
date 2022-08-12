using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Interface
{
    public interface IGenericInterface<T, R>
    {
        T Update( string id, R update);
        bool Delete( string id );
    }
}
