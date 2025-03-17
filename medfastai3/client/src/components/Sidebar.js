import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = ({ isOpen }) => {
    return (
        <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
            <h3 className="sidebar-title">Menu</h3>
            <ul className="sidebar-list">
                <li>
                    <Link to="/segmentation" className="sidebar-link">Segmentation</Link>
                </li>
                <li>
                    <Link to="/tumor-detection" className="sidebar-link">Tumor Detection</Link>
                </li>
                <li>
                    <Link to="/xray-analysis" className="sidebar-link">X-RAY Analysis</Link>
                </li>
                <li>
                    <Link to="/diabetes-detection" className="sidebar-link">Diabetes Detection</Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
