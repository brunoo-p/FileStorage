using Infrastructure.Entities;
using Infrastructure.Entities.DTO;

namespace Infrastructure.Interface
{
    public interface IDocument : IGenericInterface<Document, DocumentDTO>
    {
        Document Save( string profileId, DocumentDTO entity );
        List<Document> ListAll( string prfileId );
        Document Update( string id, DocumentDTO update );
        bool Delete( string id );
        
    }
}
