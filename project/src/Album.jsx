import React, { Children } from 'react'

const Album = ({name,year,children}) => {
  
  return (
    <div>
      <h3>{name}</h3>
      <small>Relised in {year}</small>
      {children}
     
    </div>
  )
}

export default Album
