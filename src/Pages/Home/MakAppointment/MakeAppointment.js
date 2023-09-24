import React from 'react'
import doctor from '../../../assets/images/doctor.png'
import appointment from '../../../assets/images/appointment.png'
import Primarybutton from '../../../conponences/Primarybutton'
const  MakeAppointment=() =>{
  return (
  <section className='mt-16'
  style={{
    background: `url(${appointment})`
  }}>
    <div className="hero ">
  <div className="hero-content flex-col lg:flex-row">
    <img src={doctor} className="-mt-32 hidden md:block lg:block lg:w-1/2 rounded-lg shadow-2xl" />
    <div>
        <h4 className='text-lg text-primary'>Appointment</h4>
      <h1 className="text-4xl text-white font-bold">Make a MakAppointment</h1>
      <p className="py-6 text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
<Primarybutton>getting started</Primarybutton>
    </div>
  </div>
</div>
  </section>
  )
}

export default MakeAppointment