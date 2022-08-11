using System.ComponentModel.DataAnnotations;


namespace Infrastructure.Entities.DTO
{
    public class ProfileDTO
    {

        [Required]
        public string FirstName { get; private set; }
        [Required]
        public string LastName { get; private set; }
        [Required]
        public string Phone { get; private set; }

        public ProfileDTO( string firstName, string lastName, string phone )
        {
            FirstName = firstName;
            LastName = lastName;
            Phone = phone;
        }
    }
}
