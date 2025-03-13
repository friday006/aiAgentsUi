// src/components/OutlineBlock.tsx
import React from 'react';
import CardTemplate from '../components/OutlineCard';
import outlineData from './outlineData.json';
import { Clipboard, MoreVertical } from "lucide-react";



const OutlineBlock: React.FC = () => {

    return (
        <div className="p-4  min-h-screen">
            {/* Header: Headings count and action buttons */}
            <div className="flex justify-between items-center mb-4">
                <div className="flex flex-row items-center">
                    <h2 className="text-xl font-semibold mr-2">30</h2>
                    <span className="text-gray-600">headings</span>
                </div>
                <div className="flex space-x-2 ">
                    <button className="px-4 py-2 bg-gray-100 border-2 border-gray-300 rounded-md hover:bg-gray-400 hover:text-white">
                        Explore headings
                    </button>
                    <button className="px-4 py-2 bg-green-300 text-green-800 border-2 border-green-600 rounded-md hover:bg-white hover:text-green-600">
                        Generate article
                    </button>
                </div>
            </div>

            <div className="flex flex-row justify-between">

                <label className="inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" className="sr-only peer" />
                    <div className="relative w-8 h-4 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-gray-300 dark:peer-focus:ring-gray-800 rounded-full peer dark:bg-gray-400 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all dark:border-gray-600 peer-checked:bg-gray-400 dark:peer-checked:bg-gray-400"></div>
                    <span className="ms-3 text-sm text-gray-600 ">Hide Instructions</span>
                </label>
                <div className="relative right-5 flex items-center space-x-5 ">
                    {/* Copy Icon */}
                    <button
                        onClick={() => navigator.clipboard.writeText("")}
                        className="p-1 text-gray-500 hover:text-gray-800"
                    >
                        <Clipboard size={18} />
                    </button>

                    {/* Three-dot Menu */}
                    <button className="p-1 text-gray-500 hover:text-gray-800">
                        <MoreVertical size={18} />
                    </button>

                </div>
            </div>
            {/* Content panel*/}
            <div className="mt-4 bg-white p-4 rounded-md border">
                <h1 className="text-lg font-semibold">ai agents</h1>
                <button className="mt-2 text-gray-500">
                    + Add article-level instruction
                </button>
            </div>

            <div className="">
                {outlineData.map((data, index) => (
                    <CardTemplate
                        key={index}
                        id={data.id}
                        type={data.type}
                        title={data.title}
                        items={data.items}
                    />
                ))}

            </div>
        </div>
    );
};

export default OutlineBlock;
