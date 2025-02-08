import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import BrowseCharacters from './components/BrowseCharacters';
import CharacterDetails from './components/CharacterDetails';
import Comics from './components/Comics';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/browse-characters" element={<BrowseCharacters />} />
            <Route path="/character-details" element={<CharacterDetails />} />
            <Route path="/comics" element={<Comics />} />
        </Routes>
    );
};

export default App;
