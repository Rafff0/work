import React, { useEffect, useState } from 'react'
import Song from './Song'

const Playlist = ({items,fn}) => {



  return (
    <div className='list'>
        <h1>Playlist</h1>
    {items.map(el=>{
        // {...el} NUYNNA INCHVOR artist={el.artist} duration={el.duration} ev ayln
      return  <Song fn={fn} inPlaylist={true} {...el} key={el.id}/>
      })}
  
    </div>
  )
}

export default Playlist
