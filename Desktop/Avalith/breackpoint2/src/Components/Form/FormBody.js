import { useState } from "react";
import { Link } from "react-router-dom";
import DatForm from "./DatForm";
import "./form.css";

const FormBody = () => {
  const [nameUser, setNameUser] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userTextarea, setUserTextarea] = useState("");

  return (
    <div className="body-form">
      <form
        className="form"
        onSubmit={(ev) => {
          ev.preventDefault();
          const na = ev.target.userName.value;
          const em = ev.target.userEmail.value;
          const ta = ev.target.userTextarea.value;
          if (validations(na, em, ta) === true) {
            setNameUser(ev.target.userName.value);
            setUserEmail(ev.target.userEmail.value);
            setUserTextarea(ev.target.userTextarea.value);
          }
        }}
      >
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
            autoComplete="off"
            name="userName"
            value={nameUser}
            onChange={(ev) => {
              setNameUser(ev.target.value);
            }}
            required
          ></input>
          <input
            id="email"
            className="input-form"
            type="email"
            maxLength="30"
            minLength="5"
            placeholder="Email"
            autoComplete="off"
            name="userEmail"
            value={userEmail}
            onChange={(ev) => {
              setUserEmail(ev.target.value);
            }}
            required
          ></input>
          <textarea
            id="textarea"
            className="textarea-form"
            name="userTextarea"
            placeholder="Write something here"
            maxLength="100"
            minLength="2"
            autoComplete="off"
            value={userTextarea}
            onChange={(ev) => {
              setUserTextarea(ev.target.value);
            }}
            required
          ></textarea>

          <button type="submit" id="send" className="button-form">
            Send
          </button>

          <Link to="/">
            <button type="submit" className="button-form" href="">
              <span>Back</span>
            </button>
          </Link>
        </div>
      </form>

      <DatForm name={nameUser} email={userEmail} textarea={userTextarea} />
    </div>
  );
};

const validations = (name, email, textarea) => {
  if (name.length === 0) {
    alert("No has escrito nada en el usuario");
    return;
  }

  const validation = validarEmail(email);
  if (validation === false) {
    alert(
      "La dirección de email es incorrecta!. Prueba con @hotmail.com o gmail.com"
    );
    return;
  }

  if (textarea.length === 0) {
    alert("No has escrito nada en el mensaje");
    return;
  }

  alert("Enviado con éxito");
  return true;
};

const validarEmail = (email) => {
  let bool = false;
  if (
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
      email
    )
  ) {
    bool = true;
  } else {
    bool = false;
  }
  return bool;
};

export default FormBody;
