import React, { useEffect, useState } from 'react'
import { BestMovie } from './components/bestmovie';
import { Footer } from './components/footer';
import { Navbar } from './components/navbar';

const App = () => {
    return (
        <div className='' style={{ height: '100%', backgroundColor: '#141414' }}>
            <Navbar />

            <BestMovie />


            <hr/>
            <Footer />

        </div>
    );
}

export default App;
