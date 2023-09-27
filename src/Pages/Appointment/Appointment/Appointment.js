import React, { useState } from 'react'
import Appointmentbanner from './Appointmentbanner/Appointmentbanner'
import AvolaoilAppointment from './AvalavolAppointment/AvolaoilAppointment'

const Appointment=() =>{
  const [selectedDate,setSelectedDate]= useState(new Date())

  return (
    <div>
        <Appointmentbanner selectedDate={selectedDate} 
        setSelectedDate={setSelectedDate}></Appointmentbanner>
        <AvolaoilAppointment  selectedDate={selectedDate}> </AvolaoilAppointment>
    </div>
  )
}

export default Appointment