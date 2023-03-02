import logo from "../../Assets/img/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Home/Home.scss";
const Home = (props) => {
  return (
    <>
        <div className="header-content">
            <div className="container">
                <div className="row navbar-content">
                    <div className="col-sm-6">
                        <img className="logo-image" src={logo} alt="logo.png" />
                    </div>
                    <div className="col-sm-6">
                        <ul className="navbar-items">
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Services</li>
                        <li>Gallery</li>
                        <li>Contact Us</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
};
export default Home;
