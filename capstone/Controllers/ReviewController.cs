using Microsoft.AspNetCore.Mvc;
using Capstone.Models;
using Capstone.Repositories;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Capstone.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReviewController : ControllerBase
    {
        private readonly IReviewRepository _reviewRepository;
        public ReviewController(IReviewRepository reviewRepository)
        {
            _reviewRepository = reviewRepository;
        }
        // GET: api/<ReviewController>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<ReviewController>/5
        [HttpGet("{recipeId}")]
        public IActionResult GetAllReviewsByRecipeId(int recipeId)
        {
            var review = _reviewRepository.GetAllReviewsByRecipeId(recipeId);
            if (review == null)
            {
                return NotFound();
            }
            return Ok(review);
        }

        // POST api/<ReviewController>
        [HttpPost]
        public IActionResult Post(Review review)
        {
            _reviewRepository.Add(review);
            return CreatedAtAction("Get", new { id = review.Id }, review);
        }

        // PUT api/<ReviewController>/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, Review review)
        {
            if (id != review.Id)
            {
                return BadRequest();
            }
            _reviewRepository.Update(review);
            return NoContent();
        }

        // DELETE api/<ReviewController>/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _reviewRepository.Delete(id);
            return NoContent();
        }
    }
}
