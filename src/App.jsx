import React, { useState } from 'react';
import './App.css';
import IlanList from '../Components/IlanList';
import IlanDetayi from '../Components/IlanDetayi';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';

function App() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedLocation, setSelectedLocation] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    return (
        <BrowserRouter>
            <div className="App">
                <h1>İş İlan Portalı</h1>
                <Header
                    searchQuery={searchQuery}
                    handleSearchChange={handleSearchChange}
                    selectedLocation={selectedLocation}
                    setSelectedLocation={setSelectedLocation}
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                />
                <Routes>
                    <Route
                        path="/"
                        element={
                            <IlanList
                                searchQuery={searchQuery}
                                selectedLocation={selectedLocation}
                                selectedCategory={selectedCategory}
                            />
                        }
                    />
                    <Route path="/ilanDetayi/:id" element={<IlanDetayi />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

const Header = ({
    searchQuery,
    handleSearchChange,
    selectedLocation,
    setSelectedLocation,
    selectedCategory,
    setSelectedCategory,
}) => {
    const location = useLocation();

    const showSearchBox = location.pathname === '/';

    return (
        <div className="header">
            {showSearchBox && (
                <div className="arama_kutusu">
                    <input
                        type="text"
                        placeholder="İş İlanı Arayın"
                        value={searchQuery}
                        onChange={handleSearchChange}
                    />
                </div>
            )}
            <div style={{display:"flex", alignItems:"center", justifyContent:"left", paddingLeft:"138px"}}>
                <select
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                >
                    <option value="">Tüm Konumlar</option>
                    <option value="İstanbul, Türkiye">İstanbul</option>
                    <option value="Ankara, Türkiye">Ankara</option>
                    <option value="İzmir, Türkiye">İzmir</option>
                    <option value="Bursa, Türkiye">Bursa</option>
                    <option value="Antalya, Türkiye">Antalya</option>
                    <option value="Adana, Türkiye">Adana</option>
                    <option value="Gaziantep, Türkiye">Gaziantep</option>
                    <option value="Konya, Türkiye">Konya</option>
                    <option value="Kayseri, Türkiye">Kayseri</option>
                    <option value="Samsun, Türkiye">Samsun</option>
                </select>
                <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                >
                    <option value="">Tüm Kategoriler</option>
                    <option value="Yazılım Geliştirme">Yazılım Geliştirme</option>
                    <option value="Mobil Geliştirme">Mobil Geliştirme</option>
                    <option value="Veri Bilimi">Veri Bilimi</option>
                    <option value="Siber Güvenlik">Siber Güvenlik</option>
                    <option value="Bulut Bilişim">Bulut Bilişim</option>
                    <option value="Yapay Zeka">Yapay Zeka</option>
                    <option value="Web Geliştirme">Web Geliştirme</option>
                    <option value="Tasarım">Tasarım</option>
                    <option value="Proje Yönetimi">Proje Yönetimi</option>
                    <option value="DevOps">DevOps</option>
                </select>
            </div>
        </div>
    );
}

export default App;