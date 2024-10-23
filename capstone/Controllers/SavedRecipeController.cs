using Microsoft.AspNetCore.Mvc;
using Capstone.Models;
using Capstone.Repositories;


// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Capstone.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SavedRecipeController : ControllerBase
    {
        private readonly ISavedRecipeRepository _savedRecipeRepository;
        public SavedRecipeController(ISavedRecipeRepository savedRecipeRepository)
        {
            _savedRecipeRepository = savedRecipeRepository;
        }
        //GET: api/<SavedSavedRecipeController>
        [HttpGet]
        public IActionResult GetAllSavedRecipes()
        {
            var savedRecipes = _savedRecipeRepository.GetAllSavedRecipes();
            return Ok(savedRecipes);
        }

        //GET api/<SavedRecipeController>/5
        [HttpGet("{userProfileId}")]
        public IActionResult GetSavedRecipesByUser(int userProfileId)
        {
            var savedRecipe = _savedRecipeRepository.GetSavedRecipesbyUser(userProfileId);
            if (savedRecipe == null)
            {
                return NotFound();
            }
            return Ok(savedRecipe);
        }

        // POST api/<SavedRecipeController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<SavedRecipeController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<SavedRecipeController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
