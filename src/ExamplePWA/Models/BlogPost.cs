using ExamplePWA.Extensions;

namespace ExamplePWA.Models
{
    public class BlogPost
    {
        public int PostId { get; set; }
        public string Title { get; set; }
        public string ShortDescription { get; set; }
        public string Link { get { return ShortDescription.UrlFriendly(50); } }
    }
}