import { Link, useLocation } from "react-router-dom";
import "./datForm.css";

const DatForm = () => {
  const location = useLocation();
  const {
    state: { nameUser, userEmail, userTextarea },
  } = location;
  return (
    <div className="body-datForm">
      <div className="datForm" id="datForm">
        <h1 id="datForm_username">{nameUser}</h1>
        <h2 id="datForm_email">{userEmail}</h2>
        <p id="datForm_textarea">{userTextarea}</p>
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
