import React from "react";

export const SectionTitle = (props) => {
  const {children, className} = props
  return(
    <p className={`${className} text-4xl xl:text-7xl text-white font-birosic  font-bold uppercase tracking-widest`}>{children}</p>
  )
}