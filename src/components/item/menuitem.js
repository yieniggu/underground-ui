import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const MenuItem = (props) => {
  const { menu, className } = props
  const location = useLocation()
  const navigate = useNavigate()
  const handleNavigate = (path) => {
    navigate(path)
  }
  return (
    <div className={`flex items-center ${location.pathname === menu.path && "text-app-primary"} hover:text-app-primary text-white cursor-pointer  font-bold gap-2 ${className?className:"text-lg lg:text-2xl"}`} onClick={() => handleNavigate(menu.path)}>
      {location.pathname === menu.path && <p className="text-2xl lg:text-4xl no-underline">·</p>}
      <p className={`${location.pathname === menu.path && "underline"}`}>
        {menu.label}
      </p>
    </div>
  )
}

export default MenuItem