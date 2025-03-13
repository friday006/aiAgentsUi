import React, { useState } from "react";

// 1. Define the shape of each question item
interface QuestionItem {
  domain: string;
  question: string;
}

// 2. Define props for the component
interface QuestionsCompProps {
  questionsData: QuestionItem[];
}

export const QuestionsComp: React.FC<QuestionsCompProps> = ({ questionsData }) => {
  const [filter, setFilter] = useState<string>("");

  // 3. Filter questions by domain or question (case-insensitive)
  const filteredQuestions = questionsData.filter((item) =>
    item.domain.toLowerCase().includes(filter.toLowerCase()) ||
    item.question.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      {/* Filter input */}
      <div className="m-4 flex flex-row">
             
                <div className="px-3 py-2 rounded-lg border mr-3">
                <select>
                    <option value="saab" selected>SERP</option>
                    <option value="volvo">Outline</option>
                    <option value="mercedes">Optimize</option>
                    <option value="audi">Info Gain</option>
                </select>
            
            </div>
            <input
            type="text"
            placeholder="Filter by keyword..."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="w-full px-3 py-1 border border-gray-300 rounded-md 
                        focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
      </div>

      {/* Questions list */}
      <div className="m-4">
        <ul className="space-y-4">
          {filteredQuestions.map((item, index) => (
            <li
              key={index}
              className="flex flex-col justify-between  space-x-4 
                         border p-4 rounded-md hover:shadow"
            >
              {/*top: bullet/avatar + domain */}
              <div className="flex items-center space-x-2">
                {/* Circle icon with first letter of the domain */}
                <div className="flex items-center justify-center w-6 h-6 bg-blue-500 rounded-full text-sm text-white font-semibold">
                  {item.domain[0].toUpperCase()}
                </div>
                <span className="text-gray-500 ">
                  {item.domain}
                </span>
              </div>

              {/*bottom: question text */}
              <div className=" text-sm mt-2">
                {item.question}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
