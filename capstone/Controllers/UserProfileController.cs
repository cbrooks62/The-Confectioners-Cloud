using Microsoft.AspNetCore.Mvc;
using Capstone.Models;
using Capstone.Repositories;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Capstone.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserProfileController : ControllerBase
    {
        private readonly IUserProfileRepository _userProfileRepository;
        public UserProfileController(IUserProfileRepository userProfileRepository)
        {
            _userProfileRepository = userProfileRepository;
        }

        // GET: UserProfile
        [HttpGet]
        public IActionResult GetAllUsers()
        {
            var users = _userProfileRepository.GetAllUsers();
            return Ok(users);
        }

        // GET: api/<UserProfileController>
        [HttpGet("{id}")]
        public IActionResult GetUserProfileById(int id)
        {
            var userProfile = _userProfileRepository.GetUserProfileById(id);
            if (userProfile == null)
            {
                return NotFound();
            }
            return Ok(userProfile);
        }
        [HttpGet("getbyemail")]
        public IActionResult GetByEmail(string email)
        {
            var user = _userProfileRepository.GetByEmail(email);

            if (email == null || user == null)
            {
                return NotFound();
            }
            return Ok(user);
        }
        // POST: api/<UserProfileController>
        [HttpPost]
        public IActionResult Post(UserProfile userProfile)
        {
            _userProfileRepository.Add(userProfile);
            return CreatedAtAction("Get", new { id = userProfile.Id }, userProfile);
        }

        // PUT api/<UserProfileController>/2
        [HttpPut("{id}")]
        public IActionResult Put(int id, UserProfile userProfile)
        {

            //if (id != userProfile.Id)
            //{
            //    return BadRequest();
            //}
            //_userProfileRepository.Update(userProfile);
            if (id != userProfile.Id)
            {
                return BadRequest();
            }
            try
            {
                _userProfileRepository.Update(userProfile);
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Update Error: {ex.Message}");
                return StatusCode(500, "An error occurred while updating the profile.");
            }
            return NoContent();
        }

        // DELETE api/<UserProfileController>/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _userProfileRepository.Delete(id);
            return NoContent();
        }
    }
}
