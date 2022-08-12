using MongoDB.Bson.Serialization.Attributes;
using System.ComponentModel.DataAnnotations;


namespace Infrastructure.Entities.DTO
{
    public class ProfileDTO
    {

        [BsonRequired]
        [Required]
        public string FirstName { get; private set; }
        
        [BsonRequired]
        [Required]
        public string LastName { get; private set; }
        
        [BsonRequired]
        [Required]
        public Email Email{ get; private set; }
        
        [BsonRequired]
        [Required]
        public Password Password { get; private set; }
        
        [BsonRequired]
        [Required]
        public Contact Contact { get; private set; }

        [BsonRequired]
        [Required]
        public Cpf Cpf{ get; set; }

        public ProfileDTO( string firstName, string lastName, Email email, Password password, Contact contact, Cpf cpf)
        {
            FirstName = firstName;
            LastName = lastName;
            Email = email;
            Password = password;
            Contact = contact;
            Cpf = cpf;
        }
    }
}
