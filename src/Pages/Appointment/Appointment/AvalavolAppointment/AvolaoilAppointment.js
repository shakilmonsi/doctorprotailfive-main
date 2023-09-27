import { format } from 'date-fns'
import React, { useEffect, useState } from 'react'
import Appointmentoption from '../Appointmentoption/Appointmentoption'

const AvolaoilAppointment=({selectedDate})=> {
    const [appointmentOption ,setAppointmentOption]=useState([])
  useEffect(()=>{

fetch('appointmentoption.json')
.then(res=>res.json())
.then(data=>setAppointmentOption(data))
  },[])
    return (
   <section className='mt-16'>
            <p className='text-secondary text-boild text-center'>this appointment date{format(selectedDate,'PP')}</p>

     <div  className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {
         
         appointmentOption.map(option=><Appointmentoption key={option._id} appointmentOption={option}></Appointmentoption>)
        }
    </div>
   </section>
  )
}

export default AvolaoilAppointment