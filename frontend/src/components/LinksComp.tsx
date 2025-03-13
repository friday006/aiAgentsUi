import { useState } from "react";

// Reuse the same interface shape as in InfoGainBlock, or define it again here:
interface LinkItem {
    url: string;
  }
  
  // Define props for the LinksComp component
  interface LinksCompProps {
    linksData: LinkItem[];
  }

export  const LinksComp = ({linksData}:LinksCompProps)=>{
    const [filter, setFilter] = useState<string>("");

    // Filter links by keyword (case-insensitive).
  const filteredLinks = linksData.filter((link) =>
    link.url.toLowerCase().includes(filter.toLowerCase())
  );


    return (
        <>
    <div className="m-4">
    <input
      type="text"
      placeholder="Filter by keyword..."
      value={filter}
      onChange={(e) => setFilter(e.target.value)}
      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
  </div>

  {/* Links list */}
  <div className="m-4">
      <ul className="space-y-4">
        {filteredLinks.map((link, index) => (
          <li key={index} className="flex flex-row justify-between items-center space-x-4 border p-2 rounded-md hover:shadow">
            {/* Icon placeholder */}
            <div className="flex flex-row justify-between gap-4">
              <span className="flex items-center justify-center w-10 h-10 bg-blue-500 rounded-full text-white font-bold">{link.url[0].toUpperCase()}</span>
              <div className="flex flex-col justify-center"> 
                <span className="text-gray-800 font-semibold">{link.url}</span>
                </div>
            </div>
            <div className="relative right-5">
              <div className="text-gray-500 text-sm">1 links</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
    </>
    );
}