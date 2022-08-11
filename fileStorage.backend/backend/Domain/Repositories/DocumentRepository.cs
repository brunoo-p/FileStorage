using Infrastructure.Entities;
using Infrastructure.Entities.DTO;
using Infrastructure.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Repositories
{
    public class DocumentRepository : IDocument
    {
        public DocumentRepository() {

        }

        public List<Document> ListAll( string prfileId )
        {
            throw new NotImplementedException();
        }

        public bool Remove( string documentId )
        {
            throw new NotImplementedException();
        }

        public Document Save( DocumentDTO document )
        {
            throw new NotImplementedException();
        }

        public Document Update( string documetnId, DocumentDTO update )
        {
            throw new NotImplementedException();
        }
    }
}
