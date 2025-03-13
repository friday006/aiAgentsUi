import React from "react";
import { Copy, MoreVertical } from "lucide-react"; // Import icons

interface HeadingItem {
  headingType: string;
  title: string;
}

interface BlogCardProps {
  author: string;
  title: string;
  subtitle: string;
  stats: string;
  headings: HeadingItem[];
}

const BlogCard: React.FC<BlogCardProps> = ({ author, title, subtitle, stats, headings }) => {
  return (
    <div className="border p-4 rounded-md shadow-sm bg-white">
      {/* Title & Stats */}
      <div className="flex flex-row justify-between group">
        <div className="flex flex-row gap-x-2">
          <Avatar size={"small"} name={author.charAt(0).toUpperCase()} />
          <span className="text-sm text-gray-500">{author}</span>
          <div className="text-sm text-gray-500">{stats}</div>
        </div>
        <div>
          <button className="p-1 text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:text-gray-800">
                  <MoreVertical size={18} />
                </button>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
        <h2 className="text-xl font-semibold mb-2 sm:mb-0">{title}</h2>
      </div>

      {/* Subtitle */}
      <p className="text-gray-700 mb-4">{subtitle}</p>

      {/* Headings List */}
      <div className="space-y-2">
        {headings.map((item, idx) => (
          <div
            key={idx}
            className={`relative border rounded-md p-3 flex items-center space-x-2 hover:shadow-md cursor-pointer group
                ${item.headingType === "H3"? "ml-5":
                    item.headingType === "H2" ? "ml-2":
                    item.headingType == "H4" ? "ml-6":""
                 }`}
          >
            {/* Heading Type Badge */}
            <span
              className={`px-3 py-2 rounded-lg text-sm font-medium border
                ${item.headingType === "H1" ? "bg-green-200 text-green-800" :
                  item.headingType === "H2" ? "bg-blue-200 text-blue-800" :
                  item.headingType === "H3" ? "bg-yellow-200 text-yellow-800" :
                  item.headingType === "H4" ? "bg-red-200 text-red-800":""}`}
            >
              {item.headingType}
            </span>

            {/* Heading Title */}
            <span className="text-gray-700 flex-1">{item.title}</span>

            {/* Icons (Hidden by Default, Shown on Hover) */}
            <div className="absolute right-3 flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              {/* Copy Icon */}
              <button
                onClick={() => navigator.clipboard.writeText(item.title)}
                className="p-1 text-gray-500 hover:text-gray-800"
              >
                <Copy size={18} />
              </button>

              {/* Three-dot Menu */}
              <button className="p-1 text-gray-500 hover:text-gray-800">
                <MoreVertical size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogCard;

export function Avatar({ name, size = "small" }: { name: string; size: "small" | "big" }) {
  return (
    <div
      className={`relative inline-flex items-center justify-center ${
        size === "small" ? "w-6 h-6 p-3" : "w-10 h-10"
      } overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600`}
    >
      <span className={`${size === "small" ? "text-xs" : "text-md"} text-gray-600 dark:text-gray-300`}>
        {name[0]}
      </span>
    </div>
  );
}
