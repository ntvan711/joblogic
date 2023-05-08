import React from "react"
import HeaderImage from "../../assets/_images/Header_image/Godfather_header.jpg"
import "./styles.scss"

const Header = () => {
  return (
    <div className="header">
      <img src={HeaderImage} alt="header_img" />
    </div>  
    )
}

export default Header
