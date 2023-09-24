import React from 'react'
import Banner from './Banner/Banner'
import InfoCards from './Infocard/InfoCards'
import Servicescard from './Services/Servicescard'
import MakeAppointment from './MakAppointment/MakeAppointment'
import Tastimonaim from '../../tastimonaime/Tastimonaim'

const  Home=() =>{
  return (
    <div className='mx-5'>
<Banner></Banner>
<InfoCards></InfoCards>
<Servicescard></Servicescard>
<MakeAppointment></MakeAppointment>
<Tastimonaim></Tastimonaim>
    </div>
  )
}

export default Home