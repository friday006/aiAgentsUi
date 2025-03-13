import { Dispatch,SetStateAction  } from "react";


interface NavBarProps {
  activeTab: string;
  setActiveTab: Dispatch<SetStateAction<string>>;
}

const NavBar: React.FC<NavBarProps> = ({ activeTab, setActiveTab }) => {

  const tabs = ["SERP", "Outline", "Optimize", "Info Gain"];

  return (
    
      <div className="mt-5 max-w mx-4 bg-neutral-200 rounded-md">
        <div className="flex flex-wrap items-center justify-around gap-2 md:gap-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 md:px-12 py-2 rounded-md text-sm font-medium transition-all 
                ${
                  activeTab === tab
                    ? "bg-white text-gray-900"
                    : "text-gray-600 hover:text-black"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

  );
};

export default NavBar;
