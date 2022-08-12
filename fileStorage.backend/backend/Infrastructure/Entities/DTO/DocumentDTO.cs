using Microsoft.AspNetCore.Http;
using MongoDB.Bson.Serialization.Attributes;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Infrastructure.Entities.DTO
{
    public class DocumentDTO
    {
        [BsonRequired]
        [Required]
        public string IdUser { get; private set; }

        [BsonRequired]
        [Required]
        public string Name { get; private set; }

        [BsonRequired]
        public string? Description { get; private set; }

        [BsonRequired]
        public List<string>? Keywords { get; private set; }

        [BsonRequired]
        [Required]
        public string Content { get; private set; }

        [BsonRequired]
        [Required]
        public Metadata Metadata { get; private set; }

        [BsonIgnore]
        [NotMapped]
        public IFormFile ImagePath { get; set; }

        [BsonDefaultValue(false)]
        public bool IsDeleted { get; set; } = false;

        public DocumentDTO( string id, string idUser, string name, string description, List<string> keywords, string content, Metadata metadata )
        {

            IdUser = idUser;
            Name = name;
            Description = description;
            Keywords = keywords;
            Content = content;
            Metadata = metadata;

        }
    }
}
