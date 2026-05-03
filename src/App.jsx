import { useState } from 'react'
import Header from './components/Header.jsx'
import ProjectList from './components/ProjectList'
import AddProject from './components/AddProject'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'


import projectsData from './data/projects.js'


function App() {
  const [projects, setProjects] = useState(projectsData);
  const [category, setCategory] = useState("all")


  //  function to handle adding a project
  function addProject(newProject) {
    setProjects((prev) => [...prev, newProject]);
  }
  // function to handle filtering
  const filteredProjects = projects.filter((project) => {
    return category === "all" || project.category === category
  })
  // function to handle delete
  const handleDelete = (id) => {
    setProjects(prev => prev.filter(project => project.id !== id));
  };


  return (
    <div className='bg-slate-50 p-10 gap-4'>
      <div className='p-10 space-y-10'>
        <Header/>
        <About/>
        <AddProject addProject={addProject} />
        <ProjectList projects={filteredProjects} category={category} setCategory={setCategory} handleDelete={handleDelete} />
        <Contact/>
      </div>

    </div>

  )
}

export default App