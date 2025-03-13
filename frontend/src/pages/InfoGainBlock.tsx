  import React, { useState } from "react";
  import { LinksComp } from "../components/LinksComp";
  import {QuestionsComp} from "../components/QuestionsComp"

  interface LinkItem {
    url: string;
  }

  
interface QuestionItem {
  domain: string;
  question: string;
}

// Example data
const questionsData: QuestionItem[] = [
  { domain: "ibm.com", question: "What Are AI Agents?" },
  { domain: "salesforce.com", question: "What Are AI Agents?" },
  { domain: "bcg.com", question: "What Are the Components of an AI Agent?" },
  { domain: "bcg.com", question: "What Do AI Agents Do?" },
  { domain: "bcg.com", question: "What Are the Types of AI Agents?" },
  // ...etc.
];

  const tabs = ["Links", "Questions", "Stats", "News", "Wiki"];

  const linksData: LinkItem[] = [
    { url: "salesforce.com" },
    { url: "github.blog" },
    { url: "openai.com" },
    { url: "grandviewresearch.com" },
    { url: "cloud.digitalocean.com" },
    { url: "aima.cs.berkeley.edu" },
    { url: "triplewhale.com" },
    { url: "enso.bot" },
    { url: "brieflink.com" },
    { url: "nytimes.com" },
    { url: "eu-startups.com" },
  ];

  const InfoGainBlock: React.FC = () => {
    const [activeTab, setActiveTab] = useState<string>("Links");


    

    return (
      <div className="">
        <div className="mt-3 max-w mx-4 rounded bg-neutral-200 shadow-md">
          {/* Tabs at the top */}
          <div className="flex flex-wrap items-center justify-around gap-1">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 md:px-12 py-2 rounded-md text-sm font-medium transition-all 
                    ${activeTab === tab
                    ? "bg-white text-gray-900"
                    : "text-gray-600 hover:text-black"
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {activeTab === "Links" ? (
          <>
            <LinksComp linksData={linksData}/>
          </>
        ):
        activeTab === "Questions" ? (
          <>
            <QuestionsComp questionsData={questionsData} />
          </>
        ) : (
          <div className="py-8 text-center text-gray-500">
            {activeTab} content is not available yet.
          </div>
        )}
      </div>
    );
  };

  export default InfoGainBlock;
