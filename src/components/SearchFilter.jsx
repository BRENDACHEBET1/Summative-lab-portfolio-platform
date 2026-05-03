const SearchFilter=({ category, setCategory }) =>{
  return (
    <div className="bg-white shadow-md rounded-2xl p-4 flex justify-between items-center">
      <h3 className="font-semibold text-gray-700">Filter Projects</h3>

      <select
        value={category}
        onChange={(event) => setCategory(event.target.value)}
        className="p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
      >
        <option value="all">All</option>
        <option value="Blogs">Blogs</option>
        <option value="Corporate">Corporate</option>
        <option value="Ecommerce">Ecommerce</option>
      </select>
    </div>
  );
}

export default SearchFilter;