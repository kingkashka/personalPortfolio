import React from "react";

function InfoCard(props){
    const {phone, email, description} = props
    const [toggle, setToggle] = React.useState(true);
    function display(){
        setToggle(prevState => !prevState)
    }

    return(
        <div className="infocard--container">
        <div className="infocard">
            <h2>{phone}</h2>
            <h2>{email}</h2>
            <p>{description}</p>
            </div>
        </div>
    )
}
export default InfoCard