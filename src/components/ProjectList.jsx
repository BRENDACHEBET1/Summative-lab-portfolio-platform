import ProjectCard from "./ProjectCard";
import SearchFilter from "./SearchFilter";
const ProjectList =({ projects, category, setCategory,handleDelete }) =>{
 
  return (
    <div id="projects"className="sm:p-6 space-y-6 bg-gray-100 rounded-2xl">
      
      <SearchFilter category={category} setCategory={setCategory}/>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} handleDelete={handleDelete}/>
        ))}
      </div>

    </div>
  );
}
export default ProjectList