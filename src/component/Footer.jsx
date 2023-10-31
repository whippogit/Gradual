import "./Footer.css";
import SocialFooter from "./SocialFooter";
import Copyright from "./Copyright";

function Footer({ news }) {
  return (
    <div className="container bg-dark d-flex justify-content-center pt-5">
      <div>
        <a className="bg-dark d-flex justify-content-center">
          <img
            className="img-logo-footer bg-dark pb-5"
            src="https://res.cloudinary.com/dm4wfkipp/image/upload/v1698078979/gradual-1-0-light_vzpdpj.png"
            title="Corrientes Gradual"
          />
        </a>

        <SocialFooter />

        <div className="text-light text-center txt-size">
          <Copyright />
        </div>
      </div>
    </div>
  );
}

export default Footer;
