import React from 'react';
import { ArrowDown, ArrowRight, Search } from 'lucide-react';
import HalfGauge from '../components/Gauge';
import topics from '../components/optimizeList.json';
import { Copy, MoreVertical } from "lucide-react"; // Import icons

const OptimizeBlock: React.FC = () => {
  return (
    <div className="p-4 space-y-6">
      {/* Row 1: "Topic Score" */}
      <div className="flex flex-col">
        <span className="text-xl font-semibold">Topic Score</span>
      </div>

      {/* Row 2: Gauge section */}
      <div className="flex flex-col md:items-center gap-4">
        <div className="flex flex-col items-center">
          <HalfGauge value={17} label="Avg Score 41" />
        </div>
        <div className="flex flex-row text-sm text-gray-500 hover:underline gap-2.5 justify-center">
          <span>View competitors</span>
          <ArrowRight className="w-4 h-4 text-gray-500" />
        </div>
      </div>

  
      <div className="w-full flex justify-around pb-2 text-sm sticky top-[110px] z-50 bg-white shadow-md">
        <StatItem label="WORDS" value="602" subvalue="1667" />
        <div className="border-r-2 border-gray-300"></div>
        <StatItem label="HEADERS" value="5" subvalue="9" />
        <div className="border-r-2 border-gray-300"></div>
        <StatItem label="LINKS" value="0" subvalue="10" />
        <div className="border-r-2 border-gray-300"></div>
        <StatItem label="IMAGES" value="0" subvalue="1" />
      </div>

      {/* Row 3: Filters */}
      <div className="flex flex-row items-center justify-between ml-4 mr-4">
        <div className="flex flex-row gap-8">
          <div className="text-sm">
            <span className="font-medium">Type</span>
            <div className="p-1 mt-3 px-2 rounded-lg border">
              <select>
                <option value="saab" selected>Long Tail</option>
                <option value="volvo">Option 1</option>
                <option value="mercedes">Option 2</option>
                <option value="audi">Option 3</option>
              </select>
            </div>
          </div>
          <div className="text-sm">
            <span className="font-medium">Status</span>
            <div className="p-1 mt-3 px-2 rounded-lg border">
              <select>
                <option value="saab" selected>All</option>
                <option value="volvo">Option 1</option>
                <option value="mercedes">Option 2</option>
                <option value="audi">Option 3</option>
              </select>
            </div>
          </div>
        </div>
        <div>
          <button className="px-3 py-1 text-sm  text-gray border rounded-md hover:bg-gray-700 hover:text-white">
            Explore Topics
          </button>
        </div>
      </div>

      {/* Row 4: Search Input */}
      <div className="relative">
        <Search className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-600 w-4 h-4" />
        <input
          type="text"
          placeholder="Filter topics..."
          className="pl-8 pr-2 py-2 w-full border rounded-md text-sm  bg-gray-100 text-gray-600
                     focus:outline-none focus:ring-1 focus:ring-gray-500"
        />
      </div>

      {/* Row 5: Topic List */}
      <div className="space-y-2">
      {topics.map((topic, index) => (
          <TopicItem
            key={index}
            title={topic.title}
            count={topic.count}
            sources={topic.sources}
          />
        ))}
        
      </div>
    </div>
  );
};


function StatItem({
  label,
  value,
  subvalue,
}: {
  label: string;
  value: string;
  subvalue?: string;
}) {
  return (
    <div className="flex flex-col p-2 ">
      <span className="font-medium text-gray-500">{label}</span>
      <div className="flex items-center space-x-1">
        <span className="font-bold text-lg">{value}</span>
        <ArrowDown className="w-4 h-4 text-red-500" />
      </div>
      {/* Subvalue in smaller text */}
      {subvalue && (
        <div className="text-xs text-gray-500">{subvalue}</div>
      )}
    </div>
  );
}

/**
design like: 
  Left: topic name
  Right: "0/2 | 7 sources"
 */
interface TopicItemCardProps {
  count: string;     // e.g. "2/1"
  title: string;     // e.g. "real time"
  sources: string;   // e.g. "6 sources"
  progress?: number; // 0-100, controls width of green bar
}


const TopicItem: React.FC<TopicItemCardProps> = ({
  count,
  title,
  sources,
  progress 
}) => {

  let computedProgress = progress !== undefined ? progress : (() => {
    const parts = count.split('/');
    if (parts.length === 2) {
      const [numerator, denominator] = parts.map(Number);
      
      if (denominator === 0) return 0;
      const rawProgress = (numerator / denominator) * 100;
      return Math.min(rawProgress, 100);
    }
    return 0;
  })();

  return (
    <div className="border rounded-md p-2 space-y-2 shadow-sm bg-white hover:shadow-md group">
      {/* Top Row: Pill + Title */}
      <div className="flex items-center space-x-2">
        <div className={`px-6 py-2  bg-green-100 text-green-800 text-md font-semibold rounded-md
          ${
            computedProgress === 100 ? "text-green-800 bg-green-300 border-green-800":
            computedProgress === 0 ? "text-gray-800 bg-gray-300 border-gray-800": "text-yellow-800 bg-yellow-300 border-yellow-800"
          }`}>
          {count}
        </div>
        <span className="flex flex-col text-sm font-medium text-gray-700 gap-2">
          {title}
          <div className="text-xs text-gray-400">
            {sources}
          </div>
        </span>
         {/* Icons (Hidden by Default, Shown on Hover) */}
      <div className="absolute right-10 flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              {/* Copy Icon */}
              <button
                onClick={() => navigator.clipboard.writeText(title)}
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

      {/* Bottom Row: Progress Bar */}
      <div className="h-1.5 w-full bg-gray-200 rounded-md">
        <div
          className={`h-1.5  rounded-md 
            ${
              computedProgress === 100 ? "bg-green-600": "bg-yellow-500"
            }`}
          style={{ width: `${computedProgress}%` }}
        />
      </div>
    </div>
  );
};

export default OptimizeBlock;