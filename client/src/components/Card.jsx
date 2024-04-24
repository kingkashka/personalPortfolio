import React from "react";

function Card(props){
    const {title, image, description, backImage} = props
    const [toggle, setToggle] = React.useState(true);
    function display(){
        setToggle(prevState => !prevState)
    }

    return(
        <div className="card--container">
        <div className="card">
            <h2 className="card--title">{title}</h2>
            <img className='card--image' src={image} alt=""/>
            <div className="card--back">
            <h2 className="card--backtitle">{title}</h2>
            <img className="card--backImage" src={backImage} alt="" />
            <p className="card--description">{description}</p>
            </div>
        </div>
        </div>
    )
}
export default Card