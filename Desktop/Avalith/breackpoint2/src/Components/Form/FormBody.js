import { Link } from "react-router-dom";
import "./form.css";
const FormBody = () => {
  return (
    <div className="body-form">
      <form id="form" className="form" method="">
        <div className="logo">
          <img
            src="https://www.avalith.net/icons/avalith-logo.svg"
            alt="iconAvalith"
          ></img>
        </div>
        <div className="title">Welcome</div>
        <div className="subtitle">Let's create your User!</div>
        <div className="input_container">
          <input
            id="name"
            className="input-form"
            type="text"
            maxLength="15"
            minLength="2"
            placeholder="Username"
            required
          ></input>
          <input
            id="email"
            className="input-form"
            type="email"
            maxLength="30"
            minLength="5"
            placeholder="Email"
            required
          ></input>
          <textarea
            id="textarea"
            className="textarea-form"
            name="textarea"
            placeholder="Write something here"
            maxLength="100"
            minLength="2"
            required
          ></textarea>
          <button id="send" className="button-form">
            Send
          </button>
          <Link to="/">
            <button type="submit" className="button-form" href="">
              <span>Back</span>
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default FormBody;
