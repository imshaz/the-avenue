import React from 'react';
import Header from './components/header_footer/Header';
import Feature from './components/featured'
import VenueNfo from './components/venueNfo';
import Highlights from './components/highlights';
function App() {
  return (
    <div className="App">
     <Header/>
     <Feature/>
     <VenueNfo/>
     <Highlights/>
    </div>
  );
}

export default App;
