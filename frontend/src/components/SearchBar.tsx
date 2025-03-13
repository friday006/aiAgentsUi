import { Search, Settings } from 'lucide-react';
export function SearchBar() {
  return (
    <div className="pt-2 max-w mx-4">
      <div className="relative flex flex-row">
        <div className="w-full">
            <Search className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="ai agents"
              className="pl-8 pr-2 py-2 w-full border rounded-md text-sm
                                  focus:outline-none focus:ring-1 focus:ring-gray-500"
            />
          </div>
          <div className="relative right-10">
              <Settings className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
          </div>
      </div>
    </div>
  )
}
export default SearchBar;