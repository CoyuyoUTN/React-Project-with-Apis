import { Link } from "react-router-dom";
import "./datForm.css";

const DatForm = ({ name, email, textarea }) => {
  return (
    <div className="body-datForm">
      <div className="datForm" id="datForm">
        <h1 id="datForm_username">{name}</h1>
        <h2 id="datForm_email">{email}</h2>
        <p id="datForm_textarea">{textarea}</p>
        <Link to="/form">
          <button href="" id="backButton">
            <span>Back</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DatForm;
