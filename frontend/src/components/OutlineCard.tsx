// src/components/Card.tsx
import { FC } from 'react';
import { Trash, MoreVertical, GripVertical } from "lucide-react";

interface CardProps {
  id: string;
  type: string;
  title: string;
  items: string[]
}

const Card: FC<CardProps> = ({ id, type, title, items }) => {
  const HeadingTag = type === "H2" ? "h2" : "h3";
  return (
    <div
      id={id}
      className="border rounded-lg hover:shadow-lg p-4 m-4 flex flex-row group"
    >
      <div className="flex flex-col justify-center mr-6 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <GripVertical className=" text-gray-500 hover:text-gray-800" />
      </div>
      {/* Header Section (Heading + 3-dot menu) */}
      <div className="w-full">
        <div className="flex items-center justify-between">
          <div className="flex flex-row items-center justify-between">
            <span
              className={`px-3 py-2 rounded-lg text-sm font-medium 
                ${type === "H1" ? "bg-green-200 text-green-800 border-2 border-green-500" :
                  type === "H2" ? "bg-blue-200 text-blue-800 border-2 border-blue-500" :
                    type === "H3" ? "bg-yellow-200 text-yellow-800 border-2 border-yellow-500" :
                      type === "H4" ? "bg-red-200 text-red-800 border-2 border-red-500" : ""}`}
            >
              {type}
            </span>
            <HeadingTag className="text-xl font-semibold text-gray-800 ml-4 mr-4">
              {title}
            </HeadingTag>
          </div>
          <div className="flex items-center  ">
            {/* Copy Icon */}
            <button
              onClick={() => navigator.clipboard.writeText(title)}
              className="p-1 text-gray-500 hover:text-gray-800"
            >
              <Trash size={18} />
            </button>

            {/* Three-dot Menu */}
            <button className="p-1 text-gray-500 hover:text-gray-800">
              <MoreVertical size={18} />
            </button>
          </div>

        </div>

        {/* Bullet List */}
        <ul className="list-disc list-outside mt-4 space-y-3 p-3 ">
          {items.map((item, idx) => (
            <li key={idx} className="text-gray-700 hover:bg-gray-100 rounded-lg">
              <div className="w-full flex flex-row justify-between ">
                <span className="">{item}</span>
                <button
                  className="p-1 text-gray-500 hover:text-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                >
                  <Trash size={18} />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Card;
