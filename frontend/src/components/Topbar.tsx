import {SearchBar} from "./SearchBar"
import { useState } from "react";
import NavBar from "./NavBar"
import SerpBlock from "../pages/SerpBlock";
import OutlineBlock from "../pages/OutlineBlock";
import OptimizeBlock from "../pages/OptimizeBlock";
import InfoGainBlock from "../pages/InfoGainBlock";
export function TopBar(){
    const [activeTab, setActiveTab] = useState("SERP");
    return (<>
        <div className="sticky top-0 z-50 bg-white">
            <SearchBar/>
            <NavBar activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
        <div >
        {activeTab === "SERP" && <SerpBlock />}
        {activeTab === "Outline" && <OutlineBlock />}
        {activeTab === "Optimize" && <OptimizeBlock />}
        {activeTab === "Info Gain" && <InfoGainBlock />}
      </div>
      </>
    )
}
export default TopBar;