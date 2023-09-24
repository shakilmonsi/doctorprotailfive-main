import React from 'react'
import Banner from './Banner/Banner'
import InfoCards from './Infocard/InfoCards'
import Servicescard from './Services/Servicescard'

const  Home=() =>{
  return (
    <div className='mx-5'>
<Banner></Banner>
<InfoCards></InfoCards>
<Servicescard></Servicescard>
    </div>
  )
}

export default Home