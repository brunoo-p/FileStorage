using Infrastructure.Entities;
using Infrastructure.Entities.DTO;

namespace Infrastructure.Interface
{
    public interface IDocument
    {
        Document Save( DocumentDTO document );
        List<Document> ListAll( string prfileId );
        Document Update( string documetnId, DocumentDTO update );
        bool Remove( string documentId );
        
    }
}
