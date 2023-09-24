import React from 'react'
import fluride from "../../../assets/images/fluoride.png"
import cavity from "../../../assets/images/cavity.png"
import  whitenig from "../../../assets/images/whitening.png"
import Service from './Service'

const  Servicescard=() =>{
    const ServicesData=[
        {
            id: 1,
             name:  'fluoride tretment',
             description: 'pless add a services and may life is ok ',
        img:fluride
            },
        {
            id: 2,
             name:  'cavity tretment',
             description: 'pless add a services and may life is ok ',
        img:cavity
            },
        {
            id: 3,
             name:  'whitenig tretment',
             description: 'pless add a services and may life is ok ',
        img:whitenig
            },
    ]
  return (
    <div className='mt-16'>
    <div className='text-center'>
        <h3 className='text-xl font-bold text-primary'>Our Services</h3>
        <h2 className='text-3xl'>Servixers we process</h2>
    </div>
  
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7'>
{
    ServicesData.map(sevic=><Service key={sevic.id} sevic={sevic}></Service>)
}
    </div>

    </div>
  )
}

export default Servicescard
