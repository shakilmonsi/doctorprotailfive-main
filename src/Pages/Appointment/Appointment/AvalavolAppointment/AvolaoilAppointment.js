import { format } from 'date-fns'
import React, { useContext, useEffect, useState } from 'react'
import Appointmentoption from '../Appointmentoption/Appointmentoption'
import Bookingmodal from '../bookingmodal/Bookingmodal'
import { AuthContext } from '../../../../Context/AuthProvider'
import { useQuery } from '@tanstack/react-query'

const AvolaoilAppointment=({selectedDate})=> {
    // const [appointmentOption ,setAppointmentOption]=useState([])
  const [treatment,setTreatment]=useState([])
  

const {data:appointmentOption=[]}= useQuery({
  queryKey:['appointmentOption'],
  queryFn: async ()=>{
    const res = await fetch('http://localhost:5000/appointmentoption')
  const data= await res.json()
  return data
  }
})


    return (
   <section className='my-16'>
            <p className='text-secondary text-boild text-center'>this appointment date{format(selectedDate,'PP')}</p>

     <div  className='grid mt-10 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {
         
         appointmentOption.map(option=><Appointmentoption key={option._id}
            setTreatment={setTreatment} 
            appointmentOption={option}></Appointmentoption>)
        }
    </div>
    {
      treatment && 
      <Bookingmodal treatment={treatment}
      selectedDate={selectedDate}
      setTreatment={setTreatment}
      ></Bookingmodal>
    }
   </section>
  )
}

export default AvolaoilAppointment