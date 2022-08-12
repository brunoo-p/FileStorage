using MongoDB.Bson.Serialization.Attributes;
using System;
using System.ComponentModel.DataAnnotations;

public class Login : Base
{
    [BsonRequired]
    [Required]
    public Email Email { get; private set; }

    [BsonRequired]
    [Required]
    public Password Password { get; private set; }
    
    public Login( Email email, Password password ) {

        Email = email;
        Password = password;
    }
}
public class Email {
    public string Value { get; set; }
}
public class Password
{
    public string Value { get; set; }
}

