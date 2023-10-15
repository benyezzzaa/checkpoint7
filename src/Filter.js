import React, { useRef, useState } from 'react'
import MovieCard from './MovieCard'
import createUtilityClassName from 'react-bootstrap/esm/createUtilityClasses'


function Filter() {
  const [Film,setFilm]=useState([
    {title:"Avatar", rate:" 5",image:"https://img.seriebox.com/films/30/30006/affich_30006_4.jpg?id=463",description:" Action"},
    {title:"titanic", rate:"7",image:"https://cf.ltkcdn.net/kids/images/std/236793-1600x1200-titanic.jpg",description:"cool"},
    {title:"la rafle", rate:"6",image:"https://wwv.stockholm-sardou.fr/posters/pics/La-Rafle-Film-2010.jpg",description:"cool"}
   

])
const R1=useRef()
const R2=useRef()
const R3=useRef()
const R4=useRef()
const  addFilm=()=>{

        setFilm([...Film,{title:R1.current.value,rate:R2.current.value,image:R3.current.value,description:R4.current.value}])
    }




  return (
    <div>
      <div>
       <input  ref={R1} type='text' placeholder='enter title'></input>
        <input ref={R2} type='text' placeholder='enter rate'></input>
        <input ref={R3} type='text' placeholder='enter image'></input>
        <input ref={R4} type='text' placeholder='enter description'></input>
        <button onClick={addFilm}>+</button>
      </div>
      <div className='fatma'>
            {Film.map(e=><MovieCard movie={e}></MovieCard>
)}
      </div>
    
    </div>
    )
  

    }
export default Filter
