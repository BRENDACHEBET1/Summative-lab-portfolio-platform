import { useState } from "react";
// Accepts a prop addProject, a function to add a project 
const AddProject = ({ addProject }) => {

  // State to toggle visibility of the form
  const [showForm, setShowForm] = useState(false);
  //  new project object
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Ecommerce");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    // Validation to ensure required fields are filled
    if (!title.trim() || !description.trim()) {
      alert("Please fill in all required fields");
      return;
    }

    const newProject = {
      id: Date.now(),
      title,
      category,
      description,
      image: image || "https://via.placeholder.com/300",
    };
    // Call function to add the project
    addProject(newProject);

    // Reset form fields
    setTitle("");
    setCategory("Ecommerce");
    setDescription("");
    setImage("");
    setShowForm(false);
  }

  return (
    <div id="addprojects" className="p-4 sm:p-6 bg-white rounded-2xl shadow-md">


      {/* button to show or hide the form */}
      {/* text changes depending on whether the form is visible */}
      <button onClick={() => setShowForm((prev) => !prev)}
        className="w-full sm:w-60 bg-blue-950 text-white py-2 rounded-lg hover:bg-blue-600 transition">
        {showForm ? "Close Form" : "Add Project"}
      </button>

      {/* Form to add a new project */}
      {/* Rendered conditionally based on showForm state */}
      {showForm && (
        <form onSubmit={handleSubmit} className="mt-4 bg-white shadow-lg rounded-2xl p-4 sm:p-6 space-y-4 max-w-xl mx-auto">
          <h2 className="text-lg sm:text-xl font-bold text-gray-800 text-center"> New Project</h2>

          <input required value={title} onChange={(event) => setTitle(event.target.value)} placeholder="Project Title" className="w-full p-2 border rounded-lg text-sm sm:text-base" />

          <select value={category} onChange={(event) => setCategory(event.target.value)} className="w-full p-2 border rounded-lg text-sm sm:text-base" >
            <option value="Blogs">Blogs</option>
            <option value="Corporate">Corporate</option>
            <option value="Ecommerce">Ecommerce</option>
          </select>

          <textarea required value={description} onChange={(event) => setDescription(event.target.value)} placeholder="Project Description" className="w-full p-2 border rounded-lg text-sm sm:text-base" />

          <input value={image} onChange={(event) => setImage(event.target.value)} placeholder="Image URL" className="w-full p-2 border rounded-lg text-sm sm:text-base" />

          <button className="w-30 bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600 transition"> Add
          </button>
        </form>
      )}
    </div>
  );
}

export default AddProject;