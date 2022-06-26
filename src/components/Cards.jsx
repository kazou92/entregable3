import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CardsLocation from '../Hooks/CardsLocation'

const Cards = ({locations}) => {


  return (
   <div className='padre'>
    <h2>{locations?.name}</h2>
   <ul className='list'>
    <li className="item_list"> <span> Type :</span> {locations?.type}</li>
    <li className="item_list"> <span>Dimension :</span> {locations?.dimension}</li>
    <li className="item_list"> <span> Population :</span> {locations?.residents.length}</li>
   </ul>
   </div>
    
  )
}

export default Cards