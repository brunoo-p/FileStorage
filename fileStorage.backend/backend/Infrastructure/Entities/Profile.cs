

using System.ComponentModel.DataAnnotations;

namespace Infrastructure.Entities
{
    public class Profile : Base
    {
        [Required]
        public string FirstName { get; private set; }
        [Required]
        public string LastName { get; private set; }
        [Required]
        public string Phone { get; private set; }
        
        public bool IsActive { get; set; } = true;

        public Profile(string id, string firstName, string lastName, string phone)
        {
            Id = id;
            FirstName = firstName;
            LastName = lastName;
            Phone = phone;
        }
    }
}
