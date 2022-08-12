using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Entities.DTO
{
    public class LoginDTO
    {
        [Required]
        public Email Email { get; private set; }

        [Required]
        public Password Password { get; private set; }

        public LoginDTO( Email email, Password password )
        {

            Email = email;
            Password = password;
        }
    }
}
