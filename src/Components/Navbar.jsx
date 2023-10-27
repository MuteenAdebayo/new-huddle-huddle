import logo from "../images/logo.svg";
import mockup from "../images/illustration-mockups.svg"
import bgimage from "../images/bg-hero-desktop.svg"
import "../styles/Navbar.css";
const Navbar = () => {
  return (
    <>
    <div className="bgimage" style={{backgroundImage: `url(${bgimage})`}}>
      <div className="navbar">
        <div>
          <img className="logo" src={logo} alt="" />
        </div>
        <div>
          <button className="btn">Try it free</button>
        </div>
      </div>

      <div className="section" >
        <div className="Buildcom">
          <h3>Build The Community<br></br> Your Fans Will Love</h3>
          <p>
            Huddle re-imagines the way we build communities.You have a voice,
            but so does your audience. Create connections with your users as you
            engage in genuine discussions.
          </p>
          <button className="butin">Get Started For Free</button>
        </div>

        <div>
            <img className="mockup" src={mockup} alt="mockup" />
        </div>
      </div>
      </div>
    </>
  );
};
export default Navbar;
