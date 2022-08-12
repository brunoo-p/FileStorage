using Domain.Repositories;
using Infrastructure.Entities;
using Infrastructure.Entities.DTO;
using Infrastructure.Interface;
using Microsoft.AspNetCore.Mvc;
using Swashbuckle.AspNetCore.Annotations;

namespace API.Controllers
{
    [ApiController]
    [Route("api/v1/auth")]
    public class AuthController : ControllerBase
    {
        private readonly IAuth _repository;
        public AuthController( IAuth repository )
        {
            _repository = repository;
        }

        [SwaggerOperation(Summary = "Authentication", Description = "Return user Profile")]
        [ProducesResponseType(typeof(Profile), 200)]
        [HttpPost]
        [Route("signIn")]
        public ActionResult Login( [FromBody]  LoginDTO login)
        {

            var response = _repository.Login(login);
            if ( response == null )
            {
                return StatusCode(401, "Invalid Login");
            }

            return Ok(response);
        }

        [SwaggerOperation(Summary = "Register", Description = "Register new user and return Profile authenticated")]
        [ProducesResponseType(typeof(Profile), 201)]
        [HttpPost]
        [Route("signUp")]
        public ActionResult Register( [FromBody] ProfileDTO profile)
        {
            var response = _repository.Save(profile);
            return Ok(response);
        }

        [SwaggerOperation(Summary = "Update Profile", Description = "Select profile by id and return updated")]
        [ProducesResponseType(typeof(Profile), 200)]
        [HttpPut]
        public ActionResult Update(string id, [FromBody] ProfileDTO update )
        {
            var response = _repository.Update(id, update);
            return Ok(response);
        }

        [SwaggerOperation(Summary = "Remove Profile", Description = "Set a flag profile inactive")]
        [ProducesResponseType(typeof(string), 200)]
        [HttpDelete]
        public ActionResult Remove(string id)
        {
            var response = _repository.Delete(id);
            if (response) {
                return StatusCode(203, "Removed");
            }

            return StatusCode(500, "Error to remove profile");
        }
    }
}