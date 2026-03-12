import "./AboutMe.css";
export function AboutMe() {
  return (
    <section id="about" className="about-section">
      <h2>About Me</h2>
      <p className="about-intro">
        Hi, I'm <span className="highlight">Amukelani Ndlovu</span>, a recent
        BSc Computer Science and Informatics graduate from the University of
        Johannesburg.
      </p>
      <div className="about-cards">
        <div className="about-card">
          <h3>Who I Am</h3>
          <p>
            I'm passionate about building practical, user-focused software
            solutions. I enjoy turning ideas into reality through clean code,
            thoughtful design, and a problem-solving mindset.
          </p>
        </div>
        <div className="about-card">
          <h3>What I Do</h3>
          <p>
            My interest spans the full spectrum of software development — from
            frontend interfaces to backend logic. I'm particularly drawn to web
            development, cloud computing, and artificial intelligence.
          </p>
        </div>
        <div className="about-card">
          <h3>Experience</h3>
          <p>
            I've applied my skills in academic and real-world settings,
            including leading a team to develop a film production management
            system and working on live projects through my current internship.
          </p>
        </div>
      </div>
      <p className="about-closing">
        I'm a quick learner who thrives in collaborative environments. Let's
        build something great together.
      </p>
    </section>
  );
}
