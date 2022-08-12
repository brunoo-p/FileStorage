

using MongoDB.Bson.Serialization.Attributes;
using System.ComponentModel.DataAnnotations;

namespace Infrastructure.Entities
{
    public class Profile : Base
    {
        [BsonRequired]
        [Required]
        public string FirstName { get; private set; }

        [BsonRequired]
        [Required]
        public string LastName { get; private set; }
        
        [BsonRequired]
        [Required]
        public Email Email { get; private set; }
        
        [BsonRequired]
        [Required]
        public Contact Contact { get; private set; }

        [BsonRequired]
        [Required]
        public Cpf Cpf { get; set; }

        [BsonDefaultValue(true)]
        public bool IsActive { get; set; } = true;

        public Profile(string id, string firstName, string lastName, Email email, Contact contact, Cpf cpf )
        {
            Id = id;
            FirstName = firstName;
            LastName = lastName;
            Email = email;
            Contact = contact;
            Cpf = cpf;
        }
        public Profile( string firstName, string lastName, Email email, Contact contact, Cpf cpf )
        {
            FirstName = firstName;
            LastName = lastName;
            Email = email;
            Contact = contact;
            Cpf = cpf;
        }
    }
    public class Contact {
        [BsonRequired]
        [Required]
        public string Phone { get; set; }
    }
    public class Cpf {
        [BsonRequired]
        [Required]
        public string Value { get; set; }
    }
}
