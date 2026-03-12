import "./Footer.css";
import {
  FaHome,
  FaInstagram,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
} from "react-icons/fa";
export function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              ndlovuamukelanij@gmail.com
            </h4>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              0674058081
            </h4>
          </div>
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>Secunda, Mpumalanga</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
