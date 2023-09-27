import React from 'react';

const Bookingmodal = ({treatment}) => {
    const {name }=treatment
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box required:">
                <label htmlFor="booking-modal" className="btn btn-sm "></label>
<h3 className='text-lg font-bold '>{name}</h3>
          <p>you ve been selected for a chance to data</p>        
                </div>
            </div>

        </>
    );
};

export default Bookingmodal;