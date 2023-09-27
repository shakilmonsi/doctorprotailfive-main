import React from 'react'

const Appointmentoption=({appointmentOption,setTreatment})=> {
    const {name,slots}=appointmentOption
  return (
   
       <div className="card  shadow-xl">
  <div className="card-body text-center">
    <h2 className="text-2xl text-secondary font-bold card-title">{name}</h2>
    <p>{slots.length >0 ? slots[0]:'Try Another day'}</p>
    <p>{slots.length}{slots.length>1? 'spaces':'space'}avolaoil </p>
    <div className="card-actions justify-center">
      <label
      onClick={()=>setTreatment(appointmentOption)}
       htmlFor="booking-modal"
        className="btn text-white btn-primary">Buy appointment</label>

    </div>
  </div>
    </div>
  )
}

export default Appointmentoption
