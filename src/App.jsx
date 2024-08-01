import React, { useState } from 'react';
import './App.css';
import IlanList from './Components/IlanList';

function App() {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleSearchClick = () => {
    };

    return (
        <div className="App">
            <h1>İş İlan Portalı</h1>
            <div className="header">
                <div className="arama_kutusu">
                    <input
                        type="text"
                        placeholder="İş İlanı Arayın"
                        value={searchQuery}
                        onChange={handleSearchChange}
                    />
                </div>
            </div>

            <IlanList searchQuery={searchQuery} />
        </div>
    );
}

export default App;