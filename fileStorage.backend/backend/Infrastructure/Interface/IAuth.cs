using Infrastructure.Entities;
using Infrastructure.Entities.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Interface
{
    public interface IAuth
    {
        Profile Login( Login login );
        Profile Save ( ProfileDTO profile );
        Profile Update( string id, ProfileDTO update);
        bool Remove( string id );
    }
}
