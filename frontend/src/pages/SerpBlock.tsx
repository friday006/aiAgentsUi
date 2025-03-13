import React from "react";
import BlogCard from "../components/BlogCard";
import blogData from "../blogData.json";

const Content: React.FC = () => {
  // Sample data 
  const rows = [
    "What are the 5 types of agents in AI?",
    "Is ChatGPT an AI agent?",
    "What is the salary of an AI agent?",
    "What is an agency in AI?",
    // ... more rows
  ];

  return (
    <div className="w-full mx-auto p-4 bg-white">

      {/* Content Rows */}
      <div className="mb-5 space-y-2">
        {rows.map((row, index) => (
          <div
            key={index}
            className="p-3 border rounded-md text-sm text-gray-700 hover:shadow-sm"
          >
            {row}
          </div>
        ))}
      </div>

      {/* Top Row like: "18 search results", "Generate brief", and icons */}
      <div className="flex items-center justify-between pb-3 border-b">
        {/* Left Side: Search result count */}
        <div className="text-gray-700 text-base">
          <span className="font-semibold text-lg">18</span> search results
        </div>

        {/* Right Side: Button + Icons */}
        <div className="flex items-center space-x-4">
          <button className="px-3 py-1.5 text-gray-800 text-sm rounded-md border hover:bg-gray-700 hover:text-white">
            Generate brief
          </button>

          {/*  icons  */}
          <button className="text-gray-500 hover:text-gray-700 p-2">
            {/*  bar chart icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3v18h18M8 14v4m4-8v8m4-12v12"
              />
            </svg>
          </button>

          <button className="text-gray-500 hover:text-gray-700 p-2">
            {/*settings icon */}
            <svg
              className="w-5 h-6"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7.75 4H19M7.75 4a2.25 2.25 0 0 1-4.5 0m4.5 0a2.25 2.25 0 0 0-4.5 0M1 4h2.25m13.5 6H19m-2.25 0a2.25 2.25 0 0 1-4.5 0m4.5 0a2.25 2.25 0 0 0-4.5 0M1 10h11.25m-4.5 6H19M7.75 16a2.25 2.25 0 0 1-4.5 0m4.5 0a2.25 2.25 0 0 0-4.5 0M1 16h2.25"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* List of Blog Cards BELOW the top row */}
      <div className="mt-4 space-y-4">
        {blogData.map((blog, index) => (
          <BlogCard
            key={index}
            author={blog.author}
            title={blog.title}
            subtitle={blog.subtitle}
            stats={blog.stats}
            headings={blog.headings}
          />
        ))}
      </div>
    </div>
  );
};

export default Content;
