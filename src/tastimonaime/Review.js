import React from 'react'




const  Review=({revie}) =>{
    const {name,img,review,location}=revie
  return (
    <div className="card  shadow-xl">
    <div className="card-body">
      
      <p>{review}</p>
      <div className="flex mt-10  items-center">
      <div className="avatar mr-6">
  <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src={img} alt=''/>
  </div>
</div>
<div>
  <h5 className='text-lg'>{name}</h5>
  <p>{location}</p>
</div>
      </div>
    </div>
  </div>
  )
}

export default Review