using ExamplePWA.Models;
using System.Collections.Generic;

namespace ExamplePWA.Services
{
    public interface IBlogService
    {
        List<BlogPost> GetLatestPosts();
        string GetPostText(string link);

        List<BlogPost> GetOlderPosts(int oldestPostId);

        BlogPost GetPostByTitle(string title);
    }
}