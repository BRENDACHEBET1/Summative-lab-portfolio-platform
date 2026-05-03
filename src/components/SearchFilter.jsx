const SearchFilter = ({ category, setCategory, input, setInput }) => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
      <h3 className="font-semibold text-gray-700">Filter Projects</h3>
      {/* Text Search Input */}
      <div className="flex items-center w-full sm:w-auto">
        <input type="text" value={input} onChange={(event) => setInput(event.target.value)} placeholder="Search by title..."
          className="p-2 border rounded-lg focus:ring-2 focus:ring-blue-400 w-full sm:w-80"
        />
      </div>
      {/* selecting category from a dropdown */}
      <select value={category} onChange={(event) => setCategory(event.target.value)} className="p-2 border rounded-lg focus:ring-2 focus:ring-blue-400 w-full sm:w-auto" >
        <option value="all">All</option>
        <option value="Blogs">Blogs</option>
        <option value="Corporate">Corporate</option>
        <option value="Ecommerce">Ecommerce</option>
      </select>



    </div>
  );
}

export default SearchFilter;