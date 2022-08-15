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
        public string ProfileId { get; set; }

        [BsonRequired]
        [Required]
        public string Name { get; set; }

        [BsonRequired]
        public string? Description { get; set; }

        [BsonRequired]
        public List<string>? Keywords { get; set; }


        public string? Content { get; set; }

        [BsonRequired]
        [Required]
        public string Metadata { get; set; }

        [NotMapped]
        public IFormFile? ImagePath { get; set; }

        [BsonDefaultValue(false)]
        public bool IsDeleted { get; set; } = false;

        public DocumentDTO( string profileId, string name, string description, List<string> keywords, string content, string metadata )
        {

            ProfileId = ProfileId;
            Name = name;
            Description = description;
            Keywords = keywords;
            Content = content;
            Metadata = metadata;

        }
        public DocumentDTO() { }
    }

}
