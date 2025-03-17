import React, { useState } from 'react';
import Sidebar from './Sidebar';
import './XRayAnalysis.css';  // Import the CSS file

const XRayAnalysis = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="xray-container">
            <Sidebar isOpen={isSidebarOpen} />
            <button 
                onClick={toggleSidebar}
                className={`sidebar-toggle ${isSidebarOpen ? 'open' : 'closed'}`}
            >
                {isSidebarOpen ? '◄' : '►'}
            </button>
            
            <div className={`xray-content ${isSidebarOpen ? 'shifted' : ''}`}>
                <h1>X-RAY Analysis</h1>
                <p>This is the X-RAY Analysis page.</p>
                
                <div className="upload-container">
                    <input
                        type="file"
                        accept="image/*"
                        style={{ display: 'none' }}
                        id="fileInput"
                        onChange={(e) => {
                            const file = e.target.files[0];
                            if (file) {
                                console.log('Selected file:', file);
                                // Handle file upload logic here
                            }
                        }}
                    />
                    <button 
                        onClick={() => document.getElementById('fileInput').click()}
                        className="upload-button"
                    >
                        Upload Image
                    </button>
                </div>
            </div>
        </div>
    );
};

export default XRayAnalysis;
