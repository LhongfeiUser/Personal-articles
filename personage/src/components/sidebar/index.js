import React from 'react';
import  Calendar from 'rc-calendar'
import 'rc-calendar/assets/index.css'
import './index.less'
const Sidebar =()=>(
    <div className='sidebar'>
       <div className='calendar'>
           <Calendar/>
       </div>
    </div>
);
export default Sidebar;