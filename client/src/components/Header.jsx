import Card from "./Card";
import profileData from "../componentData/profileData";
import { FaLinkedin } from "react-icons/fa";
import { GrDocumentPdf } from "react-icons/gr";
import axios from 'axios'

function Header() {
  const profileCard = profileData.map((info) => (
    <Card
      title={info.title}
      image={info.image}
      description={info.description}
      backImage={info.backImage}
    />
  ));

  function getResume(){
  axios.get("/pdf/file")
  .then(res => console.log(res))
  .catch(err => console.log(err))
}

  return (
    <div className="header">
      <div className="header--left">
        <h1>
          Hello, I'm Nicholas Keyes <br /> a Software Developer
        </h1>
        <p>I love working on projects I am passionate about...</p>
        <div className="social--links">
          <a href="https://www.linkedin.com/in/thebelovednicholaskeyes/">
            <FaLinkedin className="social--icon" />
            <br />
            LinkedIn
          </a>
          <a  onClick={getResume}>
            <GrDocumentPdf className="social--icon" />
            <br />
            Resume
          </a>
        </div>
      </div>
      <div className="header--right">{profileCard}</div>
    </div>
  );
}
export default Header;
