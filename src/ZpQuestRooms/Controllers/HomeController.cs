using Microsoft.AspNetCore.Mvc;

namespace ZpQuestRooms.Controllers
{
    public class HomeController : Controller
    {
        public ViewResult Index()
        {
            object data = "String";
            return View(data);
        }
    }
}