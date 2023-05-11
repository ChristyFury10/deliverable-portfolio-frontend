import "./Projects.css"

function Projects({ projects }) {
    const projectsList = projects.map((project, index) => (
      <div key={index}>
        <h1>{project.name}</h1>
        <img src={project.image} alt={project.name} />
        <br/>
        <a href={project.git}>
          <button>Github</button>
        </a>
        <a href={project.live}>
          <button>live site</button>
        </a>
      </div>
    ))
    return (
        <>
        <h2>Projects I have done:</h2>
        <h2>{projectsList}</h2>
        </>
        );
  }
  
  export default Projects;