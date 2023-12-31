import { format } from 'date-fns';
import React, { useContext } from 'react';
import { AuthContext } from '../../../../Context/AuthProvider';
import toast from 'react-hot-toast';

const Bookingmodal = ({ refetch, treatment,selectedDate,setTreatment}) => {
const {user}=useContext(AuthContext)
    const date = format(selectedDate,'PP')
    const {name:treatmentName ,slots}=treatment //treatment and appointment option 

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const slot = form.slot.value;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const booking = {
            appointmentDate: date,
            treatment: treatmentName,
            patient: name,
            slot,
            email,
            phone,
        }

        // TODO: send data to the server
        // and once data is saved then close the modal 
        // and display success toast
      fetch('http://localhost:5000/bokings',{
        method:'POST',
        headers:{
            'content-type': 'application/json'
        },
        body:JSON.stringify(booking)
      })
.then(res=>res.json())
.then(data=>{
    console.log(data)
    if(data.acknowledged){
          setTreatment(null)
    toast.success('bookings success fully')
    refetch();
    }
    else{
        toast.error(data.message)
    }
  
   
})
    }
    return (
        <>
        <input type="checkbox" id="booking-modal" className="modal-toggle" />
        <div className="modal">
            <div className="modal-box relative">
                <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                <h3 className="text-lg font-bold">{treatmentName}</h3>
                <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                    <input type="text" disabled value={date} className="input w-full input-bordered " />
                    <select name="slot" className="select select-bordered w-full">
                        {
                            slots?.map((slot, i) => <option
                                value={slot}
                                key={i}
                            >{slot}</option>)
                        }
                    </select>
                    <input name="name" type="text"  placeholder="Your Name" className="input w-full input-bordered" />
                    <input name="email" defaultValue={user?.email} disabled type="email" placeholder="Email Address" className="input w-full input-bordered" />
                    <input name="phone" type="text" placeholder="Phone Number" className="input w-full input-bordered" />
                    <br />
                    <input className='btn btn-accent w-full' type="submit" value="Submit" />
                </form>
            </div>
        </div>
    </>
    );
};

export default Bookingmodal;