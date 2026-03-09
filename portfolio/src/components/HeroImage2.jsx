import "./HeroImage2.css";

export function HeroImage2({ heading, text }) {
  return (
    <div className="hero-img">
      <div className="heading">
        <h1>{heading} </h1>
        <p>{text}</p>
      </div>
    </div>
  );
}
