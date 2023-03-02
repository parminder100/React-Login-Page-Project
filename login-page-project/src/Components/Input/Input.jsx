import { useState} from "react";
import "../Input/Input.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import loginBanner from "../../Assets/img/loginBanner.png";
import Home from "../Home/Home";

const Input = () => {
  const [record, setRecord] = useState([]);
  const [userRegistration, setUserRegistration] = useState({
    firstname: "",
    email: "",
    password: "",
  });
  const [displayUserData, setDisplayUserData] = useState(false);
  const [formerror, setFormError] = useState(userRegistration);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserRegistration({ ...userRegistration, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newrecord = { ...userRegistration };
    setSubmitted(true);
    if(submitted === true){
        console.log("hello")
        setDisplayUserData(true);
        setRecord([...record, newrecord]);
    }
    else{
        console.log("world")
        setFormError(validate(userRegistration));
    }
    setUserRegistration({ firstname: "", email: "", password: "" });
  };

  const validate = (values) => {
    const errors = {};
    if (!values.firstname) {
      errors.firstname = "Firstname is required";
    }
    if (!values.email) {
      errors.email = "Email is required";
    }
    if (!values.password) {
      errors.password = "Password is required";
    }
    return errors;
  };

  return (
    <>
        {!displayUserData ? (<div className="container">
          <div>
            <div className="row main-container">
              <div className="col-sm-6 left-col">
                <img
                  className="login-banner-image"
                  src={loginBanner}
                  alt="loginBanner.png"
                />
              </div>
              <div className="col-sm-6 right-col">
                <form onSubmit={handleSubmit}>
                  <h4 className="form-heading">Sign In</h4>
                  <div>
                    <input
                      name="firstname"
                      value={userRegistration.firstname}
                      type="text"
                      placeholder="Enter Your Name"
                      onChange={handleChange}
                      className="firstname-input"
                    />
                    <p className="display-error">{formerror.firstname}</p>
                  </div>
                  <div>
                    <input
                      name="email"
                      value={userRegistration.email}
                      type="email"
                      placeholder="Enter Your Email"
                      onChange={handleChange}
                      className="firstname-input"
                    />
                    <p className="display-error">{formerror.email}</p>
                  </div>
                  <div>
                    <input
                      name="password"
                      value={userRegistration.password}
                      type="password"
                      placeholder="Enter Your Password"
                      onChange={handleChange}
                      className="firstname-input"
                    />
                    <p className="display-error">{formerror.password}</p>
                  </div>
                  <button className="submit-btn">Submit</button>
                  <p className="social-media-description">
                    or Connect with Social Media
                  </p>
                  <button className="twitter-btn">
                    <i className="fa fa-twitter"></i> Sign in with Twitter
                  </button>
                  <button className="facebook-btn">
                    <i className="fa fa-facebook"></i> Sign in with Facebook
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>):
        (<div>
          {record.map((e) => {
            return (
              <>
                <Home />
                <div className="user-data">
                  <div className="user-data-items">
                    <p>Welcome {e.firstname}</p>
                    <p>Your Email id is: {e.email}</p>
                    <p>Your Password is: {e.password}</p>
                  </div>
                </div>
              </>
            );
          })}
        </div>)}
    </>
  );
};
export default Input;
