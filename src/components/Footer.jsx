import logo from "../assets/images/logo.svg";
import footer_bg from "../assets/images/bg/footer_bg.svg";
import instagram from "../assets/images/icons/instagram.svg";
import facebook from "../assets/images/icons/facebook.svg";
import youtube from "../assets/images/icons/youtube.svg";
import twitter from "../assets/images/icons/twitter.svg";
import linkedin from "../assets/images/icons/linkedin.svg";
import mail from "../assets/images/icons/mail.svg";
import copyright from "../assets/images/icons/copyright.svg";
import "../assets/styles/Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <img src={footer_bg} alt="" className="footer_bg" />
      <div className="footer_container">
        <div className="footer_left">
          <img src={logo} alt="" />
          <ul>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Contact Us</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="footer_right">
          <div className="footer_social">
            <img src={instagram} alt="" />
            <img src={facebook} alt="" />
            <img src={youtube} alt="" />
            <img src={twitter} alt="" />
            <img src={linkedin} alt="" />
            <img src={mail} alt="" />
          </div>
          <div className="footer_copyright">
              <img src={copyright} alt="" /> <span>SUBIVI</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
