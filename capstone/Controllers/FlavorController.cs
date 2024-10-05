using Microsoft.AspNetCore.Mvc;
using Capstone.Models;
using Capstone.Repositories;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Capstone.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FlavorController : ControllerBase
    {
        private readonly IFlavorRepository _flavorRepository;
        public FlavorController(IFlavorRepository flavorRepository)
        {
            _flavorRepository = flavorRepository;
        }
        // GET: api/<FlavorController>
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_flavorRepository.GetAllFlavors());
        }

        // GET api/<FlavorController>/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var flavor = _flavorRepository.GetFlavorById(id);
            if (flavor == null)
            {
                return NotFound();
            }
            return Ok(flavor);
        }

        // POST api/<FlavorController>
        [HttpPost]
        public IActionResult Post(Flavor flavor)
        {
            _flavorRepository.Add(flavor);
            return CreatedAtAction("Get", new { id = flavor.Id }, flavor);
        }

        // PUT api/<FlavorController>/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, Flavor flavor)
        {
            if (id != flavor.Id)
            {
                return BadRequest();
            }
            _flavorRepository.Update(flavor);
            return NoContent();
        }

        // DELETE api/<FlavorController>/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _flavorRepository.Delete(id);
            return NoContent();
        }
    }
}
