import React from 'react';
import Navber from '../../Shared/Navber/Navber';
import { Outlet } from 'react-router-dom';

const DashboardLoayut = () => {
    return (
        <div>
            <Navber></Navber>
            <div className="drawer lg:drawer-open">
  <input id="dashbord-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    <Outlet></Outlet>
    {/* <label htmlFor="dashbord-drawer" className="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="dashbord-drawer" aria-label="close sidebar" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
      {/* Sidebar content here */}
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
    </ul>
  
  </div>
</div>
        </div>
    );
};

export default DashboardLoayut;