import { useEffect, useState } from "react"
import axios from "axios"


const CardsLocation = ({searchLocation}) => {

  const [locations, setLocations] = useState()
  


  useEffect(()=>{
    let num
    if(searchLocation){
      num = searchLocation
    }else{
     num = Math.ceil( Math.random()*126)
    }
      const URL =`https://rickandmortyapi.com/api/location/${num}`
      axios.get(URL)
      .then(res=> setLocations(res.data))
      .catch(err => console.log(err))
    
    
  },[searchLocation])

 







  return locations
}

export default CardsLocation