import React from 'react'

const Song = ({title,duration,artist,onDelete,id,onAdd,inPlaylist,fn}) => {


  return (
    <div className='song'>
      <p>{title}</p>
      <strong>By {artist}</strong><br />
      <small>{duration} mins</small>
      <button onClick={()=>{
        onDelete(id)

      }}>Delete</button>
      <button onClick={()=>{
        onAdd(id)

      }}>Add</button>
      {
        inPlaylist && <button onClick={()=>{
        fn(id)
        }}>move down</button>
      }
    </div>
  )
}

export default Song
