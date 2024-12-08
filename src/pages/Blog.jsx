import React, { useState } from "react";

const blogs = [
  {
    title: "The Ultimate Guide to Gym Workouts",
    content:
      "Discover the secrets to effective gym workouts and take your fitness journey to the next level. This guide covers everything from beginner tips to advanced strategies.",
    image: "https://shop.bodybuilding.com/cdn/shop/articles/the-ultimate-guide-to-an-effective-workout-split-555251.jpg?v=1731882642", // Replace with real images
    date: "December 1, 2024",
  },
  {
    title: "Top 10 Foods for Muscle Growth",
    content:
      "Fuel your gains with these top 10 foods that are scientifically proven to support muscle growth and recovery.",
    image: "https://www.performancelab.com/cdn/shop/articles/How_to_Hit_Your_Muscle_Building_Sweet_Spot_480x.jpg?v=1729508193",
    date: "November 25, 2024",
  },
  {
    title: "How to Stay Motivated for Fitness",
    content:
      "Staying consistent with your fitness goals can be challenging. Here are practical tips to keep you motivated.",
    image: "https://strengthsanctuary.com.au/wp-content/uploads/2023/02/10-Ways-To-Stay-Motivated-To-Hit-The-Gym-Even-On-Busy-Days.png",
    date: "November 20, 2024",
  },
  {
    title: "Best Cardio Workouts for Weight Loss",
    content:
      "Maximize calorie burn with these cardio workouts specifically designed for weight loss.",
    image: "https://yuvaap.com/wp-content/uploads/2024/05/Cardio-Workouts.jpg",
    date: "November 15, 2024",
  },
  {
    title: "Stretching for Flexibility and Injury Prevention",
    content:
      "Learn the importance of stretching in your workout routine and how it helps prevent injuries.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcey9fKmANEPUjPkqAPaoOHZDunENrh2gUQw&s",
    date: "November 10, 2024",
  },
];

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 3;

  // Pagination Logic
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogs.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(blogs.length / postsPerPage);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 py-16 px-6 lg:px-16">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-10">
        Our Blog
      </h1>
      <p className="text-lg text-center text-gray-600 mb-12">
        Stay updated with the latest fitness trends, tips, and guides.
      </p>

      {/* Blog Cards */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {currentPosts.map((blog, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {blog.title}
              </h2>
              <p className="text-sm text-gray-600">{blog.content.substring(0, 80)}...</p>
              <p className="mt-2 text-xs text-gray-500">Published on {blog.date}</p>
              <button className="mt-4 w-full px-4 py-2 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 transition duration-300">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-10 flex justify-center space-x-2">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`px-3 py-1 text-sm rounded-full font-medium ${
              currentPage === index + 1
                ? "bg-blue-600 text-white"
                : "bg-gray-300 text-gray-800"
            } hover:bg-blue-500 hover:text-white transition duration-300`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Blog;