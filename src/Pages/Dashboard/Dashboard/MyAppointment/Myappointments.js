import React, { useContext } from 'react';
import { AuthContext } from '../../../../Context/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const Myappointments = () => {
const {user}=useContext(AuthContext)

const url=`http://localhost:5000/bokings?email=${user?.email}`
const {data: bookings=[]}=useQuery({
    queryKey: ['bokings',user?.email],
    queryFn: async ()=> {
        const res= await fetch(url,{
          headers:{
            authorization:`bearer${localStorage.getItem('accessToken')}`            
          }
        });
        const data =await res.json();
        return data 
    }
})

    return (
        <div>
            <h2 className='text-4xl fond-bold text-center text-primary'> appointment</h2>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Treatment</th>
        <th>Date</th>
        <th>time</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {

bookings.map((booking,i)=> <tr key={booking._id}>
    <th>{i}</th>
    <td>{booking.patient}</td>
    <td>{booking.treatment}</td>
    <td>{booking.slot}</td>
    <td>{booking.email}</td>
    <td>{booking.phone}</td>
  </tr>)

      }
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Myappointments;