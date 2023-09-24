import React from 'react'
import clock from'../../../assets/icons/clock.svg'
import  marker from'../../../assets/icons/marker.svg'
import phone from'../../../assets/icons/phone.svg'
import InfoCard from './InfoCard'
const InfoCards=() =>{
    const cardData =[
        {
            id:1,
            name:'Opening Hours',
            description : 'Open 60.pm to 5.am everyday',
         icon:clock,

         bgClass:' bg-gradient-to-r from-cyan-500 to-blue-500'
        },
        {
            id:2,
            name:'Opening Hours',
            description : 'Open 60.pm to 5.am everyday',
         icon:marker,
       
         bgClass:' bg-gradient-to-r from-cyan-500 to-blue-500'
        },
        {
            id:3,
            name:'Opening Hours',
            description : 'Open 60.pm to 5.am everyday',
         icon:phone,
         bgClass:' bg-gradient-to-r from-cyan-500 to-blue-500'
        },
    ]
  return (
    <div className='grid  mt-8 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>

{
    cardData.map(card=><InfoCard key={card.id} 
    card={card}></InfoCard>)
}


    </div>
  )
}

export default InfoCards
