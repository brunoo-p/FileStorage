using Microsoft.AspNetCore.Http;
using MongoDB.Bson.Serialization.Attributes;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Infrastructure.Entities
{
    public class Document : Base
    {
        [BsonRequired]
        [Required]
        public string IdUser { get; set; }

        [BsonRequired]
        [Required]
        public string Name { get; set; }

        [BsonRequired]
        public string? Description { get; set; }

        [BsonRequired]
        public List<string>? Keywords { get; set; }

        [BsonRequired]
        [Required]
        public byte[] Content { get; set; }

        [BsonRequired]
        [Required]
        public Metadata Metadata { get; set; }

        [NotMapped]
        [BsonIgnore]
        public IFormFile ImagePath { get; set; }

        [BsonDefaultValue(false)]
        public bool IsDeleted { get; set; } = false;

        public Document(string id, string idUser, string name, string description, List<string> keywords, byte[] content, Metadata metadata) {

            Id = id;
            IdUser = idUser;
            Name = name;
            Description = description;
            Keywords = keywords;
            Content = content;
            Metadata = metadata;
        
        }
        public Document( string idUser, string name, string description, List<string> keywords, byte[] content, Metadata metadata )
        {

            IdUser = idUser;
            Name = name;
            Description = description;
            Keywords = keywords;
            Content = content;
            Metadata = metadata;

        }
    }

    public class Metadata {

        [Required]
        public string Type { get; set; }
    }

}
