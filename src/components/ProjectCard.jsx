const ProjectCard=({ project, handleDelete }) =>{
  return (
    <div className='bg-white shadow-md rounded-2xl p-4 sm:p-6 max-w-sm w-full'>
      <img src={project.image} alt={project.title} className='w-full h-40 sm:h-48 object-cover rounded-lg mb-4'/>

      <h3 className='text-lg sm:text-xl font-semibold mb-2'>{project.title}</h3>

      <p className='text-sm sm:text-base text-gray-600 mb-3'>{project.description} </p>
      
      <button onClick={() => handleDelete(project.id)} className='mt-2 bg-red-500 hover:bg-red-600 text-white text-sm px-4 py-2 rounded-lg' >Delete
      </button>

    </div>
  );
}
export default ProjectCard