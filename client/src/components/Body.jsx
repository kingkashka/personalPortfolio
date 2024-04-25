import Card from "./Card.jsx";
import InfoCard from "./InfoCard.jsx";
import profileData from "../componentData/profileData.js";
import contactInfo from "../componentData/contactInfo.js";
import projectInfo from "../componentData/projectInfo.js";
import ProjectCard from "./ProjectCard.jsx";

function Body(props) {
  const profileCard = profileData.map((info) => (
    <Card
      title={info.title}
      image={info.image}
      description={info.description}
      backImage={info.backImage}
    />
  ));
  const projects = projectInfo.map((info) => (
    <ProjectCard
      title={info.title}
      image={info.image}
      link={info.link}
      key={info.key}
    />
  ));
  function toLink(link){
    document.getElementById("projectCard").addEventListener("click", () => {
        window.location.href = link;
        
    })
}
  return (
    <>
      <div className="body">
        <div className="left--box">
          <h1>Create</h1>
          <h1>Projects</h1>
          <p>I create websites for amazing user interactions.</p>
        </div>
        <div className="center--box"></div>
        <div className="right--box">
          <div
            id="projectCard"
            className="projectCard"
            onClick={() => toLink(`https://efe-nxu9.onrender.com`)}
          >
            <img src="/public/images/EFE.png" alt="" />
            <h2>Essentially From Earth</h2>
          </div>
          <div
            id="projectCard"
            className="projectCard"
            onClick={() => toLink(`https://efe-nxu9.onrender.com`)}
          >
            <img src="/public/images/YHWH.png" alt="" />
            <h2>Understanding YHWH</h2>
          </div>
          <a href="https://efe-nxu9.onrender.com"></a>
        </div>
      </div>
    </>
  );
}
export default Body;
