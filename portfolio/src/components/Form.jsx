import "./Form.css";

export function Form() {
  return (
    <div className="form-section">
      <h2>Contact Me</h2>
      <p className="form-subtitle">Got a project in mind? Let's talk.</p>
      <form>
        <div className="form-row">
          <div className="form-group">
            <label>Name</label>
            <input type="text" placeholder="Your name" />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Your email" />
          </div>
        </div>
        <div className="form-group">
          <label>Subject</label>
          <input type="text" placeholder="Subject" />
        </div>
        <div className="form-group">
          <label>Message</label>
          <textarea rows="6" placeholder="Type your message here" />
        </div>
        <button className="btn">Submit</button>
      </form>
    </div>
  );
}
