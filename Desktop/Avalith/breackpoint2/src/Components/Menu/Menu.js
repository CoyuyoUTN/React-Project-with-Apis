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
          <Link to="/RickAndMortyCollection">
            <button className="container_link_btn" href="">
              <span>API Rick & Morty</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Menu;
