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
            maxlength="15"
            minlength="2"
            placeholder="Username"
            autocomplete="off"
            required
          ></input>
          <input
            id="email"
            className="input-form"
            type="email"
            maxlength="30"
            minlength="5"
            placeholder="Email"
            autocomplete="off"
            required
          ></input>
          <textarea
            id="textarea"
            className="textarea-form"
            name="textarea"
            placeholder="Write something here"
            maxlength="100"
            minlength="2"
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
