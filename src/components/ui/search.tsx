"use client";
import { useState } from "react";
import { Search } from "lucide-react";

interface SearchComponentProps {
  search: boolean;
}

const SearchComponent = ({ search }: SearchComponentProps) => {
  const [query, setQuery] = useState("");

  // Handle search function
  const handleSearch = () => {
    if (query.trim() !== "") {
      console.log("Searching for:", query);
      // Perform search action here (API call, filtering, etc.)
    }
  };

  return (
    <div className="">

      {/* Input field (shown when search is active) */}
      <div className=" flex items-center">
        {search && (
          <input
            type="text"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()} // Search on Enter key
            className="ml-2 border-none outline-none italic text-sm"
          />
        )}

        {/* Search Button (Optional) */}
        {search && (
          <Search
            onClick={handleSearch}
            //   color = "#ff007c"
            className="ml-[-2rem] w-5 h-5 text-[#ff007c]"
          />
        )}
      </div>
    </div>
  );
};

export default SearchComponent;
