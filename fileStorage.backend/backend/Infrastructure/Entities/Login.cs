using System;
using System.ComponentModel.DataAnnotations;

public class Login
{
    [Required]
    public string Email { get; private set; }

    [Required]
    public string Password { get; private set; }
    
    public Login( string email, string password ) {

        Email = email;
        Password = password;
    }
}
