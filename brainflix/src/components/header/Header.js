import "./Header.scss";
import websiteLogo from "../../assets/Logo/BrainFlix-logo.svg";
import ArtistImage from "../artistImage/ArtistImage.js";
import Button from "../button/Button.js";
import uploadIcon from "../../assets/Icons/upload.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img
          className="header__website-logo"
          src={websiteLogo}
          alt="website-logo"
        />
      </Link>
      <form id="search-form">
        <input id="search-input" type="text" placeholder="Search" />
        <ArtistImage />
        <div className="header__button-wrapper">
          <Link to="/upload-video">
            <Button name="UPLOAD" icon={uploadIcon} />
          </Link>
        </div>
      </form>
    </header>
  );
}

export default Header;
