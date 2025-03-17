import React, { useState } from 'react';
import Sidebar from './Sidebar';
import './TumorDetection.css';  // Import the CSS file

const TumorDetection = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="tumor-container">
            <Sidebar isOpen={isSidebarOpen} />
            <button 
                onClick={toggleSidebar}
                className={`sidebar-toggle ${isSidebarOpen ? 'open' : 'closed'}`}
            >
                {isSidebarOpen ? '◄' : '►'}
            </button>
            
            <div className={`tumor-content ${isSidebarOpen ? 'shifted' : ''}`}>
                <h1>Tumor Detection</h1>
                <p>This is the Tumor Detection page.</p>
                
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

export default TumorDetection;
