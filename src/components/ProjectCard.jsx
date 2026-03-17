import "./ProjectCard.css";

export function ProjectCard({ imgsrc, title, text, view, src }) {
  return (
    <div className="project-card">
      <img src={imgsrc} alt="Image" />
      <h2 className="project-title">{title}</h2>
      <div className="pro-details">
        <p>{text}</p>
        <div className="pro-btns">
          <a
            href={view}
            target="_blank"
            rel="noreferrer"
            className={`btn ${!view ? "btn-disabled" : ""}`}
          >
            View
          </a>
          <a
            href={src}
            target="_blank"
            rel="noreferrer"
            className={`btn ${!src ? "btn-disabled" : ""}`}
          >
            Source
          </a>
        </div>
      </div>
    </div>
  );
}
