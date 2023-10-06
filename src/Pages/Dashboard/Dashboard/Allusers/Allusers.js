import { useQuery } from '@tanstack/react-query';
import React from 'react';

const Allusers = () => {
    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users/createUser');
            const data = await res.json();
            return data;
        }
    })
    return (
        <div>
            <h1 className='text-3xl text-primary text-center fond-bold'>ALL,USERS</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                           
                          
                        </tr>
                    </thead>
                    <tbody>
                 {
                    users.map((user,i)=><tr key={user._di}>
                        <th>{1}</th>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                    
                    </tr>)
                 }
                        
                        
                      
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Allusers;