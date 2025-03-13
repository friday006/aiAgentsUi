import { SearchBar } from "./SearchBar";
import { useState, useEffect } from "react";
import NavBar from "./NavBar";
import SerpBlock from "../pages/SerpBlock";
import OutlineBlock from "../pages/OutlineBlock";
import OptimizeBlock from "../pages/OptimizeBlock";
import InfoGainBlock from "../pages/InfoGainBlock";

export function TopBar(){
    const [activeTab, setActiveTab] = useState("SERP");

    useEffect(() => {
      // Scroll to the top of the page whenever activeTab changes
      window.scrollTo(0, 0);
    }, [activeTab]);

    return (
      <>
        <div className="sticky top-0 z-50 bg-white pb-3 shadow-md">
            <SearchBar />
            <NavBar activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
        <div>
          {activeTab === "SERP" && <SerpBlock />}
          {activeTab === "Outline" && <OutlineBlock />}
          {activeTab === "Optimize" && <OptimizeBlock />}
          {activeTab === "Info Gain" && <InfoGainBlock />}
        </div>
      </>
    );
}

export default TopBar;
