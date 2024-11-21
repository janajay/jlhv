
using Microsoft.AspNetCore.Mvc;

namespace WelcomeWebApp.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            ViewData["Title"] = "Home";
            ViewData["Message"] = "This is sample ASP. net home page created ny vijayavel R";

            return View();
        }
    }
}
