import React, { useState } from 'react';
import appointment from '../../../assets/images/appointment.png'
const ContactForm=()=> {
    
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // আপনি এখানে ফর্ম সাবমিট হ্যান্ডল করার কাস্টম লজিক যোগ করতে পারেন।
    console.log('সাবমিট করা হয়েছে:', formData);
  };

  return (
    <section className='mt-16'
  style={{
    background: `url(${appointment})`
  }}>
     <div 
   
   className=" p-10  shadow rounded px-8 pt-6 pb-8 mb-4">
     <h2 className="text-3xl text-white font-semibold mb-4">যোগাযোগ ফর্ম</h2>
     <form onSubmit={handleSubmit}>
       <div className="mb-4">
         <label htmlFor="name" className="block text-xl text-white font-bold mb-2">
           নাম:
         </label>
         <input
           type="text"
           id="name"
           name="name"
           value={formData.name}
           onChange={handleChange}
           className="appearance-none border rounded w-full py-2 px-3 text-primary leading-tight focus:outline-none focus:shadow-outline"
         />
       </div>
       <div className="mb-4">
         <label htmlFor="email" className="block text-xl text-white  font-bold mb-2">
           ইমেইল:
         </label>
         <input
           type="email"
           id="email"
           name="email"
           

           value={formData.email}
           onChange={handleChange}
           className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
         />
       </div>
       <div className="mb-4">
         <label htmlFor="message" className="block text-xl text-white font-bold mb-2">
           মেসেজ:
         </label>
         <textarea
           id="message"
           
           name="message"
           value={formData.message}
           onChange={handleChange}
           className="appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline h-24"
         ></textarea>
       </div>
       <button
         type="submit"
         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
       >
         সাবমিট
       </button>
     </form>
   </div>
   </section>
  );
}

export default ContactForm;
