using Infrastructure.Database;
using Infrastructure.Entities;
using Infrastructure.Entities.DTO;
using Infrastructure.Interface;
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
            return _collection.Find(_ => _.Id == profileId && _.IsDeleted == false)
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
                    idUser: profileId,
                    name: document.Name,
                    description: document.Description,
                    keywords: new List<string>(document.Keywords),
                    content: fileBytes,
                    metadata: document.Metadata
                );

                return newDocument;

            } catch (Exception ex)
            {
                throw new Exception( $"Error: { ex } " );
            }
        }

        public Document Update( string documetnId, DocumentDTO update )
        {
            throw new NotImplementedException();
        }
        
    }
}
