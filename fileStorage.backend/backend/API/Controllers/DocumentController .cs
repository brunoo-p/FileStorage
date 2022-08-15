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

        [SwaggerOperation(Summary = "List", Description = "List all documents by profile id")]
        [ProducesResponseType(typeof(List<Document>), 200)]
        [HttpGet]
        [Route("{profileId}")]
        public ActionResult<List<Document>> GetAll(string profileId)
        {
            return Ok(_repository.ListAll(profileId));
        }

        [SwaggerOperation(Summary = "Save", Description = "Save new document and return")]
        [ProducesResponseType(typeof(Document), 201)]
        [HttpPost]
        [Route("{profileId}")]
        public ActionResult Save( string profileId, [FromForm] DocumentDTO document )
        {
            var response = _repository.Save(profileId, document);
            return StatusCode(201, response);
        }

        [SwaggerOperation(Summary = "Update Document", Description = "Select document by id and return updated")]
        [ProducesResponseType(typeof(Document), 200)]
        [HttpPut("{documentId}")]
        public ActionResult Update( string documentId, [FromForm] DocumentDTO update )
        {
            var response = _repository.Update(documentId, update);
            return Ok(response);
        }

        [SwaggerOperation(Summary = "Remove Document", Description = "Set a flag docunent deleted")]
        [ProducesResponseType(typeof(string), 202)]
        [HttpDelete]
        [Route("{documentId}")]
        public ActionResult Remove(string documentId )
        {
            var response = _repository.Delete(documentId);
            if ( response )
            {
                return StatusCode(202, "Removed");
            }

            return StatusCode(500, "Error to remove profile");
        }
    }
}