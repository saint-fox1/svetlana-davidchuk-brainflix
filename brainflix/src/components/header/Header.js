import "./Header.scss";
import websiteLogo from "../../assets/Logo/BrainFlix-logo.svg"
import ArtistImage from "../artistImage/ArtistImage.js";
import Button from "../button/Button.js";
import uploadIcon from "../../assets/Icons/upload.svg"


function Header() {
  return (
    <header className="header">
      <img className='header__website-logo' src={websiteLogo} alt="website-logo" />
      <form id="search-form">
        <input id="search-input" type="text" placeholder="Search" />
        <ArtistImage/>
        <Button name='UPLOAD' image={uploadIcon}/>
      </form>
    </header>
  );
}

export default Header;
