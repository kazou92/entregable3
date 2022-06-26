import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Cards from './components/Cards'
import CardsLocation from './Hooks/CardsLocation'
import Residents from './components/Residents'
import InputSearch from './components/InputSearch'

function App() {

  const[searchLocation,setSearchLocation] =useState()
  
  console.log(searchLocation)
  const locations = CardsLocation({searchLocation})

 



  return (
    <div className="App">
        <Cards locations ={locations}/>
  

     <div>
      {
       locations?.residents.map(resident =>(
        <Residents resident= {resident}
        key = {resident} />
       ))
      }
     </div>

     <InputSearch setSearchLocation = {setSearchLocation} />
    </div>
  )
}

export default App
