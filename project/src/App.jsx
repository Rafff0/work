import React, { useState } from 'react'
import Song from './Song'
import "./App.css"
import Album from './Album'
import Songlist from './Songlist'
import Playlist from './Playlist'

const App = () => {
  const [songs,setSongs] = useState([
    {
      id:101,
      title:"smth",
      artist:"Ash",
      duration:5
    },
    {
      id:102,
      title:"uf",
      artist:"Ufo",
      duration:2.1
    },
    {
      id:103,
      title:"Goz",
      artist:"GAzaz",
      duration:3.9
    },
    {
      id:104,
      title:"Mosh",
      artist:"Bala",
      duration:3.2
    }
  ])
  const [plyList,setPlyList] = useState([])
    //  const x = <Song/>
    //  console.log(x)
    const removeSong = id=>{
      setSongs(songs.filter(x=>x.id!=id))
    }
    const addSong = id=>{
  for(let i of plyList){
    if(i.id == id) return
  }
   setPlyList([ ...plyList, ...songs.filter(x=>x.id==id)])
    }

    const moveDown = (id)=>{
  
         [plyList[id-101],plyList[id-100]] = [plyList[id-100],plyList[id-101]]
   setPlyList([...plyList])
   
     }
  return (
    <>
      <h1>Hello props</h1>
     {/* <Album name="Arabian music" year={2004}>
     <Song
       title="Makarena"
       duration={5.6}
       artist="Ashtenq"
        />
      <Song
       title="Eroina"
       duration={2.6}
       artist="esim ov"
        />
      <Song
       title="Hop jivani"
       duration={3.1}
       artist="Jivan"
        />
     </Album> */}
     <Songlist  onAdd={addSong} onDelete={removeSong} items={songs  }/>
     <Playlist fn={moveDown} items={plyList} />
    </>
  )
}

export default App
