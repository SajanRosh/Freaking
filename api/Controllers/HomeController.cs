using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class HomeController : Controller
    {
       [HttpGet]
       public string GetData()
        {
            return "Lets Go";
        }
    }
}
