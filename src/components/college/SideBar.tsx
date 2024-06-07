import React from 'react';
import { Link } from 'react-router-dom';
// import CollegeList from './collegeList/CollegeList';
import './SideBar.css';

const SideBar: React.FC = () => {

    
    return (
        <div className="sidebar">


            <ul>
                <li><Link to='/'>About</Link></li>
                <li><Link to='/'>Description</Link></li>
                <li><Link to='/'>Education</Link></li>
                <li><Link to='/'>Students</Link></li>
                <li><Link to='/'>Acceptance Rate</Link></li>
            </ul>
        </div>
    );
};

export default SideBar;