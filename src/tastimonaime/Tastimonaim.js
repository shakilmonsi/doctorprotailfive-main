import React from 'react'
import quote from "../assets/icons/quote.svg"
import papole1 from '../assets/images/people1.png'
import papole2 from '../assets/images/people2.png'
import papole3 from '../assets/images/people3.png'
import Review from './Review'
const  Tastimonaim=() =>{
    const reviews =[
        {
            _di:1,
            name: "shakil ",
            img: papole1,
            review: 'it is a good  doctor and  nice services ans  go  medicine and  got  hospitals  got  set section and ',
        location: 'california'
        },
        {
            _di:1,
            name: "shakil ",
            img: papole2,
            review: 'it is a good  doctor and  nice services ans  go  medicine and  got  hospitals  got  set section and ',
        location: 'california'
        },
        {
            _di:1,
            name: "shakil ",
            img: papole3,
            review: 'it is a good  doctor and  nice services ans  go  medicine and  got  hospitals  got  set section and ',
        location: 'california'
        },
    ]
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

       <div className='grid gap-4 mt-14 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {
            reviews.map(revie=><Review key={revie._di} revie={revie}></Review>)
        }
        {/* jsksk */}
       </div>
    </section>
  )
}

export default Tastimonaim