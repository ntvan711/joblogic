import React from "react"
import Logo from '../../assets/_logo/the-godfather.svg';

import "./style.scss"

const Sidebar = ({currentIdx, employees, onChange}) => {
  return (
    <div className="sidebar">
      <div className="sidebar__logo"><img src={Logo} alt="logo" /></div>
      <div className="sidebar__container">
        {employees?.length > 0 &&
          employees.map((item, idx) => <div key={idx} style={{fontSize : `${employees[idx].popularity * 0.8}rem`}} className={`sidebar__container__item ${currentIdx === idx && 'active'}` } onClick={onChange(idx)}>{item?.name}</div>)}
      </div>
    </div>
  )
}

export default Sidebar
