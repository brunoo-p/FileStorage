using Infrastructure.Database;
using Infrastructure.Entities;
using Infrastructure.Entities.DTO;
using Infrastructure.Interface;
using MongoDB.Bson;
using MongoDB.Driver;

namespace Domain.Repositories
{
    public class AuthRepository : IAuth
    {

        private readonly DbContext _mongoDB;
        private readonly IMongoCollection<Login> _collectionLogin;
        private readonly IMongoCollection<Profile> _collectionProfile;

        public AuthRepository(DbContext connection) {

            _mongoDB = connection;
            _collectionLogin = _mongoDB.database.GetCollection<Login>("Login");
            _collectionProfile = _mongoDB.database.GetCollection<Profile>("Profile");
        }

        public Profile Login( LoginDTO login )
        {
            try
            {
                var user = _collectionLogin.Find(Builders<Login>.Filter
                    .Where(_ => _.Email.Value == login.Email.Value)).FirstOrDefault();
                
                if (user == null) {
                    return null;
                }
                if (user.Password.Value != login.Password.Value )
                {
                    return null;
                }
                
                var ob = _collectionProfile.Find(Builders<Profile>.Filter
                    .Where(_ => _.Email.Value == user.Email.Value))
                    .FirstOrDefault();
                
                return ob;
            }
            catch ( Exception ex )
            {
                throw new Exception($"Error: {ex}");
            }
        }

        public bool Delete( string id )
        {
           try
           {
                _collectionProfile
                    .UpdateOne(Builders<Profile>
                    .Filter.Eq("Id", ObjectId.Parse(id)), Builders<Profile>
                    .Update.Set("IsActive", false));
                
                return true;

            } catch(Exception ex)
           {
                throw new Exception($"Error: {ex}");
            }
        }   

        public Profile Save( ProfileDTO profile )
        {
            try
            {
                var newLogin = new Login(profile.Email, profile.Password);
                var newProfile = new Profile(
                    profile.FirstName,
                    profile.LastName,
                    profile.Email,
                    profile.Contact,
                    profile.Cpf
                );
                _collectionProfile.InsertOne(newProfile);
                _collectionLogin.InsertOne(newLogin);

                return newProfile;
            }
            catch (Exception ex)
            {
                throw new Exception($"Error: {ex}");
            }
        }

        public Profile Update( string id, ProfileDTO update )
        {
            try
            {
                _collectionProfile.UpdateOne(Builders<Profile>.Filter.Eq("Id", ObjectId.Parse(id)), Builders<Profile>.Update
                   .Set("FirstName", update.FirstName)
                   .Set("LastName", update.LastName)
                   .Set("Password", update.Password)
                   .Set("Contact", update.Contact)
               );

               return GetById(id);

            }
            catch ( Exception ex )
            {
                throw new Exception($"Error: {ex}");
            }
        }

        private Profile GetById(string id)
        {
            try
            {
                var isValidID = Base.VerifyLengthId(id);

                if(!isValidID) {
                    return null;
                }

                return _collectionProfile.Find(_ => _.Id == id && _.IsActive == true).FirstOrDefault();

            }catch (Exception ex)
            {
                throw new Exception($"Error: {ex}");
            }
        }
    }
}
