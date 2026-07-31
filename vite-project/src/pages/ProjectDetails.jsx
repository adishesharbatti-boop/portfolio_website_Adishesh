import { useParams, Link } from 'react-router-dom';
import { projectsData } from '../data/projects';

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projectsData.find((p) => p.id === parseInt(id));

  if (!project) return <h2>Project not found!</h2>;

  return (
    <div className="container">
      <Link to="/projects">← Back</Link>
      <h1>{project.title}</h1>
      <p>{project.longDesc}</p>

      {/* Tags List */}
      <div className="tags">
        {project.tags.map((tag, i) => (
          <span key={i} className="tag-badge">{tag}</span>
        ))}
      </div>

      {/* Action Links including YouTube */}
      <div className="actions">
        <a href={project.liveLink} target="_blank" rel="noreferrer" className="btn">
          View Live 🚀
        </a>
        <a href={project.githubLink} target="_blank" rel="noreferrer" className="btn">
          GitHub 💻
        </a>
        <a href={project.youtubeLink} target="_blank" rel="noreferrer" className="btn btn-youtube">
          Watch Demo 🎥
        </a>
      </div>
    </div>
  );
}
export default ProjectDetail;