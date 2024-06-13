import React from 'react'
import Song from './Song'

const Songlist = ({items,onDelete,onAdd,fn}) => {
  
  return (
    <div className='list'>
      {items.map(el=>{
        // {...el} NUYNNA INCHVOR artist={el.artist} duration={el.duration} ev ayln
      return   <Song  onAdd={onAdd} onDelete={onDelete} {...el} key={el.id}/>
      })}
    </div>
  )
}

export default Songlist
