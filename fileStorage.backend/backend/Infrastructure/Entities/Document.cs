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
        public string ProfileId { get; set; }

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
        public string Metadata { get; set; }

        [NotMapped]
        public IFormFile ImagePath { get; set; }

        [BsonDefaultValue(false)]
        public bool IsDeleted { get; set; } = false;

        public Document( string id, string profielId, string name, string description, List<string> keywords, byte[] content, string metadata )
        {

            Id = id;
            ProfileId = profielId;
            Name = name;
            Description = description;
            Keywords = keywords;
            Content = content;
            Metadata = metadata;

        }
        public Document( string profileId, string name, string description, List<string> keywords, byte[] content, string metadata )
        {

            ProfileId = profileId;
            Name = name;
            Description = description;
            Keywords = keywords;
            Content = content;
            Metadata = metadata;
        }
    }

    public class Name
    {
        public string Value { get; set; }
    }
    public class Metadata {

        [Required]
        public string Type { get; set; }
    }

}
