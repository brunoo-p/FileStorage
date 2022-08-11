using Microsoft.AspNetCore.Http;
using System.ComponentModel.DataAnnotations;


namespace Infrastructure.Entities.DTO
{
    public class DocumentDTO : Base
    {
        [Required]
        public string IdUser { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public string Description { get; set; }

        [Required]
        public List<string> Keywords { get; set; }

        public bool IsDeleted { get; set; } = false;

        [Required]
        public string Content { get; set; }

        public IFormFile ImagePath { get; set; }
        public DocumentDTO( string id, string idUser, string name, string description, List<string> keywords, string content )
        {

            Id = id;
            IdUser = idUser;
            Name = name;
            Description = description;
            Keywords = keywords;
            Content = content;

        }
    }
}
