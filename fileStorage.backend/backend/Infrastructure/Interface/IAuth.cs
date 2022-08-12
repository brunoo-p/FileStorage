using Infrastructure.Entities;
using Infrastructure.Entities.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Interface
{
    public interface IAuth : IGenericInterface<Profile, ProfileDTO>
    {
        Profile Login( LoginDTO login );
        Profile Save ( ProfileDTO entity );
        Profile Update( string id, ProfileDTO update);
        bool Delete( string id );
    }
}
