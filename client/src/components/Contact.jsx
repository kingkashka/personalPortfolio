import React, { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleFormChange()
    // Perform form submission logic here
    console.log(formData);
  };
  function toLink(link){
    document.getElementById("projectCard").addEventListener("click", () => {
        window.location.href = link;
        
    })
}
  return (
    <div className="contact">
      <div className="left--contact">
        <h1>Please <br /> Reach out</h1>
      </div>
      <div className="right--contact">
        <form onSubmit={handleSubmit} className="form">
          <div className="form--left" >
          <h3>NAME</h3>
          <input type="text" name="name" placeholder="Enter your name" value={formData.name} onChange={handleFormChange} />
          </div>
          <div className="form--right" >
          <h3>EMAIL ADDRESS</h3>
          <input type="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleFormChange}/>
          </div>
          <div className="form--bottom">
          <h3>MESSAGE</h3>
          <textarea type="text" name="message" placeholder="Enter your message" value={formData.message} onChange={handleFormChange} />
          </div>
          <div className="form--button">
          <button onClick={()=>toLink("https://www.linkedin.com/in/thebelovednicholaskeyes/")}>submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default ContactForm;
