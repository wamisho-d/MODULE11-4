import React from 'react';
import { Route, Routes, NavLink } from 'react-router-dom';
import Home from './component/Home';
import BrowseCharacters from './component/BrowseCharacters';
import CharacterDetails from './component/CharacterDetails';
import Comics from './component/Comics';
import NotFound from './component/NotFound'; 

const App = () => {
    return (
        <div>
            <nav>
                <NavLink to="/" end activeClassName="active">Home</NavLink>
                <NavLink to="/browse-characters" activeClassName="active">Browse Characters</NavLink>
                <NavLink to="/comics" activeClassName="active">Comics</NavLink>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/browse-characters" element={<BrowseCharacters />} />
                <Route path="/character-details/:id" element={<CharacterDetails />} />
                <Route path="/comics" element={<Comics />} />
                <Route path="*" element={<NotFound />} /> {/* Handle undefined routes */}
            </Routes>
        </div>
    );
};

export default App;
