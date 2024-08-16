import { useContext } from "react";
import { DashboardContext } from "../context/DashboardContext";

const SearchBar = () => {
  const { searchTerm, setSearchTerm } = useContext(DashboardContext);

  return (
    <input
      type="text"
      placeholder="Search widgets..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="mb-4 p-2 border rounded"
    />
  );
};

export default SearchBar;
