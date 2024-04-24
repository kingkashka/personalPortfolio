function ProjectCard(props){
    const {title, image, link} = props
    function toLink(link){
        document.getElementById("projectCard").addEventListener("click", () => {
            window.location.href = link;
            
        })
    }
    return(
        <>
        <div id="projectCard" className="projectCard" onClick={() => toLink(`https://efe-nxu9.onrender.com`)}>
        <img src={image} alt="" />
        <h2>{title}</h2>
        </div>
        </>
    )
}
export default ProjectCard