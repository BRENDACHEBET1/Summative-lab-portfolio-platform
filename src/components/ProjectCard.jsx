import { FaTrash } from "react-icons/fa";

const ProjectCard=({ project, handleDelete }) =>{
  return (
    <div className='bg-white shadow-md rounded-2xl p-4 sm:p-6 max-w-sm w-full'>
      <img src={project.image} alt={project.title} className='w-full h-40 sm:h-48 object-cover rounded-lg mb-4'/>

      <h3 className='text-lg sm:text-xl font-semibold mb-2'>{project.title}</h3>

      <p className='text-sm sm:text-base text-gray-600 mb-3'>{project.description} </p>
      
    <FaTrash onClick={() => handleDelete(project.id)} className="w-4 h-4 text-red-500 hover:text-red-700 cursor-pointer"/>
    </div>
  );
}
export default ProjectCard