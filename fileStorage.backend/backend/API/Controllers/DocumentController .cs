using Infrastructure.Entities;
using Infrastructure.Entities.DTO;
using Infrastructure.Interface;
using Microsoft.AspNetCore.Mvc;
using Swashbuckle.AspNetCore.Annotations;

namespace API.Controllers
{
    [ApiController]
    [Route("api/v1/document")]
    public class DocumentController : ControllerBase
    {
        private readonly IDocument _repository;
        public DocumentController( IDocument repository )
        {
            _repository = repository;
        }

        [SwaggerOperation(Summary = "Save", Description = "Save new document and return")]
        [ProducesResponseType(typeof(Document), 201)]
        [HttpPost]
        [Route("{profileId}")]
        public ActionResult Save( string profileId, [FromBody] DocumentDTO document)
        {
            var response = _repository.Save(profileId, document);
            return Ok(response);
        }

        [SwaggerOperation(Summary = "Update Document", Description = "Select document by id and return updated")]
        [ProducesResponseType(typeof(Document), 200)]
        [HttpPut]
        public ActionResult Update(string id, [FromBody] DocumentDTO update)
        {
            var response = _repository.Update(id, update);
            return Ok(response);
        }

        [SwaggerOperation(Summary = "Remove Document", Description = "Set a flag docunent deleted")]
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