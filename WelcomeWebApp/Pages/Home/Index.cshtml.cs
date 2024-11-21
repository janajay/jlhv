using Microsoft.AspNetCore.Mvc.RazorPages;

namespace WelcomeWebApp.Pages.Home  // Ensure this matches the namespace
{
    public class IndexModel : PageModel
    {
        public string Message { get; set; }  // Define the property

        public void OnGet()  // OnGet method runs for GET requests
        {
            Message = "This is a sample Razor Page Home, created by vijayavel R.";  // Set the value for the Message property
        }
    }
}
