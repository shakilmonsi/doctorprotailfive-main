import { format } from 'date-fns';
import React from 'react';

const Bookingmodal = ({treatment,selectedDate}) => {
    const date = format(selectedDate,'PP')
    const {name ,slots}=treatment //treatment and appointment option 
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box required:">
 <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 ">X</label>

<h3 className='text-lg font-bold '>{name}</h3>
<form className='grid grid-cols-1 gap-3 mt-10 '>
<input type="text" disabled value={date} className="input w-full input-bordered  " />
<select className="select select-bordered w-full">
 {

   slots?.map(slot=><option value={slot}>{slot}</option>)
    
 }

</select>
<input type="text" placeholder="Type here" className="input w-full input-bordered " />
<input type="text" placeholder="Type here" className="input w-full input-bordered " />
<input type="text" placeholder="Type here" className="input w-full only:input-bordered " />
<br/>
<input className='btn btn-accent w-full' type='submit ' value="submit"/>

</form>
                </div>
            </div>

        </>
    );
};

export default Bookingmodal;