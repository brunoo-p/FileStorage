using Microsoft.AspNetCore.Http;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Infrastructure.Entities
{
    public class Document : Base
    {
        [Required]
        public string IdUser { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public string Description { get; set; }

        [Required]
        public List<string> Keywords { get; set; }

        [Required]
        public byte[] Content { get; set; }

        [NotMapped]
        public IFormFile ImagePath { get; set; }

        public bool IsDeleted { get; set; } = false;

        public Document(string id, string idUser, string name, string description, List<string> keywords, byte[] content) {

            Id = id;
            IdUser = idUser;
            Name = name;
            Description = description;
            Keywords = keywords;
            Content = content;
        
        }
    }

}
