import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Residents = ({resident}) => {

 const[caracter, setCaracter]= useState()

 useEffect(()=>{
    axios.get(resident)
    .then(res => setCaracter(res.data))
    .catch(err => console.log(err))
 },[])
 //console.log(caracter)

  return (
   
    <article className='resident'>
        <div>
        <img src={caracter?.image} alt="" />
        <h2>{caracter?.name}</h2>
        <p> Status :{caracter?.status}</p>
        <p> Origin :{caracter?.origin.name}</p>
        <p>Episode whre appears :{caracter?.episode.length}</p>
        </div>
    </article>
  )
}

export default Residents