import "./Footer.css";
import SocialFooter from "./SocialFooter";

function Footer({ news }) {
  return (
    <div className="container bg-dark d-flex justify-content-center pt-5">
      <div className="bg-dark">
        <a className="bg-dark d-flex justify-content-center">
          <img
            className="img-logo-footer bg-dark pb-5"
            src="https://res.cloudinary.com/dm4wfkipp/image/upload/v1682809461/gradual-byn_trbtq2.png"
            title="Corrientes Gradual"
          />
        </a>
        
        <SocialFooter />
      </div>
    </div>
  );
}

export default Footer;
