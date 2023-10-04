import { format } from 'date-fns'
import React, { useContext, useEffect, useState } from 'react'
import Appointmentoption from '../Appointmentoption/Appointmentoption'
import Bookingmodal from '../bookingmodal/Bookingmodal'
import { AuthContext } from '../../../../Context/AuthProvider'
import { useQuery } from '@tanstack/react-query'
import Loading from '../../../Loading/Loading'

const AvolaoilAppointment=({selectedDate})=> {
    // const [appointmentOption ,setAppointmentOption]=useState([])
  const [treatment,setTreatment]=useState([])
  
const date= format(selectedDate, 'PP')
const {data:appointmentOption=[], refetch,isLoading}= useQuery({
  queryKey:['appointmentOption',date],
  queryFn: async ()=>{

    // class-74-4 old verssion 
    // const res = await fetch(`http://localhost:5000/appointmentoption?date=${date}`)
    //  class-74-7 verssion new

    const res = await fetch(`http://localhost:5000/v2/appointmentoption?date=${date}`)

  const data= await res.json()
  return data
  },
  
  

})
if(isLoading){
  return <Loading></Loading>
}

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
      refetch={refetch}
      ></Bookingmodal>
    }
   </section>
  )
}

export default AvolaoilAppointment