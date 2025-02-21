import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import BrowseCharacters from './component/BrowseCharacters';
import CharacterDetails from './component/CharacterDetails';
import Comics from './component/Comics';

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
