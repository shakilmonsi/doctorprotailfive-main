import React from 'react'
import quote from "../assets/icons/quote.svg"

const  Tastimonaim=() =>{
  return (
 
    <section>
       <div className='flex justify-between'>
        <div>
            <h4 className='text-xl text-primary font-bold '>Tastimonaim</h4>
<h2 className='text-4xl'>What our patients Says</h2>
        </div>
        <figure>
            <img className='w-24 lg:w-48' src={quote} alt=''/>
        </figure>
       </div>

       <div></div>
    </section>
  )
}

export default Tastimonaim