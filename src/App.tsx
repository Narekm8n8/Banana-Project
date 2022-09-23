import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import {Route, Routes} from "react-router-dom";
import Profile from "./components/Profile/Profile";


const App = () => {
    return (
        <>
            <Navbar/>
            <Routes>
                <Route path={'/profile'} element={<Profile/>}/>
                <Route path={'/header'} element={<Header/>}/>
            </Routes>
        </>
    );
};

export default App;