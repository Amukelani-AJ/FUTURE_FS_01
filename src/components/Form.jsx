import "./Form.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

export function Form() {
  const form = useRef();
  function sendMessage(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zrrb3g9",
        "template_p3p0alb",
        form.current,
        "LecfTUyXSH_NAL1BC",
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send message, please try again.", error.text);
        },
      );
  }
  return (
    <div className="form-section">
      <h2>Contact Me</h2>
      <p className="form-subtitle">Got a project in mind? Let's talk.</p>
      <form ref={form} onSubmit={sendMessage}>
        <div className="form-row">
          <div className="form-group">
            <label>Name</label>
            <input type="text" name="user_name" placeholder="Your name" />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" name="user_email" placeholder="Your email" />
          </div>
        </div>
        <div className="form-group">
          <label>Subject</label>
          <input type="text" name="subject" placeholder="Subject" />
        </div>
        <div className="form-group">
          <label>Message</label>
          <textarea
            rows="6"
            name="message"
            placeholder="Type your message here"
          />
        </div>
        <button className="btn">Submit</button>
      </form>
    </div>
  );
}
