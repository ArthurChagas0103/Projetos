using Microsoft.AspNetCore.Mvc;

namespace Fcnet.Controllers;

[ApiController]
[Route("Api/UsersController")]
public class UsersController : ControllerBase
{
    private static readonly string[] Summaries = new[]
    {
        "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
    };

    private readonly ILogger<UsersController> _logger;

    public UsersController(ILogger<UsersController> logger)
    {
        _logger = logger;
    }

    [HttpGet(Name = "GetUsers")]
    public IEnumerable<Users> Get()
    {
        return Enumerable.Range(1, 5).Select(index => new Users
        {
    
        })
        .ToArray();
    }
}
