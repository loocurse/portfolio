import Social from "../components/Social";
import Map from "../img/map_sg.png";

const Contact = () => {
  return (
    <div className="condiv contact">
      <h1 className="subtopic">Contact Me</h1>
      <div className="hr_line line2">
        <div className="inner2 inner3"></div>
      </div>
      <div className="con_out">
        <div className="con_in">
          <img src={Map} class="co1" alt="Map"></img>
        </div>
      </div>
      <div className="contact-resume">
        <a href="mailto:lucasngyileang@gmail.com" className="btnsame">
          <i className="fa fa-at"></i>
        </a>
        <a href="https://t.me/loocurse" className="btnsame">
          <i className="fa fa-telegram"></i>
        </a>
      </div>

      <div className="hr_line line3">
        <div className="inner3"></div>
      </div>
      <Social />
    </div>
  );
};

export default Contact;
