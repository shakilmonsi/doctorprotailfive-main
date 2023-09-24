import React from 'react'
import chare from'../../../assets/images/chair.png'
import Primarybutton from '../../../conponences/Primarybutton'
const Banner=()=> {
  return (
   
    <div className="hero ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src= {chare} className=" rounded-lg lg:w-1/2 shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Box Office News!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
<Primarybutton>Gatteing started</Primarybutton>

    </div>
  </div>
</div>
  )
}

export default Banner
