using Infrastructure.Database;
using Infrastructure.Entities;
using Infrastructure.Entities.DTO;
using Infrastructure.Interface;
using MongoDB.Bson;
using MongoDB.Driver;

namespace Domain.Repositories
{
    public class DocumentRepository : IDocument
    {
        private readonly DbContext _mongoDB;
        private readonly IMongoCollection<Document> _collection;

        public DocumentRepository(DbContext connection) {
            _mongoDB = connection;
            _collection = _mongoDB.database.GetCollection<Document>("Document");
        }

        public List<Document> ListAll( string profileId)
        {
            return _collection.Find(_ => _.ProfileId == profileId && _.IsDeleted == false)
                .ToList();
        }

        public bool Delete( string documentId )
        {
            throw new NotImplementedException();
        }

        public Document Save( string profileId,  DocumentDTO document )
        {
            try
            {
                var ms = new MemoryStream();
                document.ImagePath.CopyTo(ms);
                var fileBytes = ms.ToArray();

                var newDocument = new Document(
                    profileId: profileId,
                    name: document.Name,
                    description: document.Description,
                    keywords: document.Keywords,
                    content: fileBytes,
                    metadata: document.Metadata
                );

                _collection.InsertOne(newDocument);
                return newDocument;

            } catch (Exception ex)
            {
                throw new Exception( $"Error: { ex } " );
            }
        }

        public Document Update( string documentId, DocumentDTO update )
        {
            try
            {
                _collection.UpdateOne(Builders<Document>.Filter.Eq("Id", ObjectId.Parse(documentId)), Builders<Document>.Update
                   .Set("Name", update.Name)
                   .Set("Description", update.Description)
                   .Set("Keywords", update.Keywords)
               );

                return GetById(documentId);

            }
            catch ( Exception ex )
            {
                throw new Exception($"Error: {ex}");
            }
        }

        private Document GetById( string id )
        {
            try
            {
                var isValidID = Base.VerifyLengthId(id);

                if ( !isValidID )
                {
                    return null;
                }

                return _collection.Find(_ => _.Id == id && _.IsDeleted == false).FirstOrDefault();

            }
            catch ( Exception ex )
            {
                throw new Exception($"Error: {ex}");
            }
        }

    }
}
