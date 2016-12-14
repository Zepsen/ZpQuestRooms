using Microsoft.AspNetCore.Mvc;
using ZpQuestRooms.Models;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace ZpQuestRooms.Controllers
{
    public class UserController : Controller
    {
        // GET: /<controller>/
        public IActionResult Index()
        {
            var user = new UserViewModel
            {
                Id = 2, FullName = "ZepsenFromCtrl"
            };
            return View(user);
        }
    }
}
