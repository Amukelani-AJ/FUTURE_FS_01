import { ProjectCard } from "./ProjectCard";
import { CardData } from "./CardData";
export function Card() {
  return (
    <div className="card-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
        {CardData.map((value, index) => {
          return (
            <ProjectCard
              key={index}
              imgsrc={value.imgsrc}
              title={value.title}
              text={value.text}
              view={value.view}
            />
          );
        })}
      </div>
    </div>
  );
}
