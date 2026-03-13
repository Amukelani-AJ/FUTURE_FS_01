import "./Skills.css";
import html from "../assets/html.png";
import css from "../assets/css.png";
import c from "../assets/c.png";
import csharp from "../assets/csharp.png";
import cplus from "../assets/c++.png";
import react from "../assets/react.png";
import net from "../assets/.net-framework.png";
import java from "../assets/java.png";
import js from "../assets/javascript.png";
import python from "../assets/python.png";
import sql from "../assets/sql.png";
import node from "../assets/node.png";

export function Skills() {
  return (
    <section id="skills" className="skills-section">
      <h2>Tech Stack</h2>
      <p className="skills-subtitle">Technologies I work with</p>
      <div className="cells">
        <div className="cell">
          <img src={html} alt="html logo" />
          <span>HTML</span>
        </div>
        <div className="cell">
          <img src={css} alt="CSS logo" />
          <span>CSS</span>
        </div>
        <div className="cell">
          <img src={js} alt="javascript logo" />
          <span>JavaScript</span>
        </div>
        <div className="cell">
          <img src={react} alt="React logo" />
          <span>REACT.js</span>
        </div>
        <div className="cell">
          <img src={node} alt="node js logo" />
          <span>NODE.js</span>
        </div>
        <div className="cell">
          <img src={java} alt="Java logo" />
          <span>JAVA</span>
        </div>
        <div className="cell">
          <img src={cplus} alt="C++ logo" />
          <span>C++</span>
        </div>
        <div className="cell">
          <img src={c} alt="C logo" />
          <span>C</span>
        </div>
        <div className="cell">
          <img src={csharp} alt="C# logo" />
          <span>C#</span>
        </div>
        <div className="cell">
          <img src={python} alt="Python logo" />
          <span>PYTHON</span>
        </div>
        <div className="cell">
          <img src={sql} alt="SQL logo" />
          <span>SQL</span>
        </div>
        <div className="cell">
          <img src={net} alt=".netFramework logo" />
          <span>.NET FRAMEWORK</span>
        </div>
      </div>
    </section>
  );
}
