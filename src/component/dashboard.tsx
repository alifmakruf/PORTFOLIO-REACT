import smarth from "../assets/smarth.png";
import smartcafe from "../assets/smartcafe.png";
import comingsoon from "../assets/comingsoon.png";

function Dashboard() {
  const projects = [
    {
      id: 1,
      title: "SMART HOME",
      image: smarth,
      link: "https://github.com/alifmakruf"
    },
    {
      id: 2,
      title: "HAO:Home Automation Web 3D(soon)",
      image: comingsoon,
      link: "https://github.com/alifmakruf"
    },
    {
      id: 3,
      title: "SMART CAFE",
      image: smartcafe,
      link: "https://github.com/alifmakruf"
    }
  ];

  return (
    <div className="card projects-section">
      <div className="section-header">Project</div>
      <div className="project-grid">
        {projects.map(project => (
          <article className="project-card" key={project.id}>
            <img src={project.image} alt={project.title} className="project-image" />
            <a href={project.link} className="project-link">GitHub</a>
            <h3>{project.title}</h3>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
