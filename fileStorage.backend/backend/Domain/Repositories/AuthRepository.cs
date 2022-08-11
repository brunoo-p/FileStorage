using Infrastructure.Entities;
using Infrastructure.Entities.DTO;
using Infrastructure.Interface;


namespace Domain.Repositories
{
    public class AuthRepository : IAuth
    {
        public AuthRepository() { }

        public Profile Login( Login login )
        {
            return new Profile(
                "id",
                "bruno",
                "paulino",
                "1234567890"
            );
        }

        public bool Remove( string id )
        {
            throw new NotImplementedException();
        }

        public Profile Save( ProfileDTO profile )
        {
            throw new NotImplementedException();
        }

        public Profile Update( string id, ProfileDTO update )
        {
            throw new NotImplementedException();
        }
    }
}
