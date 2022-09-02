import { Link } from "react-router-dom";
import "./style.css";
const Menu = () => {
  return (
    <div className="container_links">
      <div className="container_links">
        <div className="container_links_first">
          <Link to="/form">
            <button className="container_link_btn">
              <span>Formulario de contacto</span>
            </button>
          </Link>
        </div>
        <div className="container_links_second">
          <Link to="/table">
            <button className="container_link_btn" href="">
              <span>Users</span>
            </button>
          </Link>
        </div>
        <div className="container_links_third">
          <button
            className="container_link_btn"
            onclick="location.href='./cards.html'"
            href=""
          >
            <span>API Rick & Morty</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
