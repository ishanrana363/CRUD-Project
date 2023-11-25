import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ListPage from "./pages/List-Page.jsx";
import SavePage from "./pages/Save-Page.jsx";
import AppNav from "./components/AppNav.jsx";

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <AppNav/>
                <Routes>
                    <Route path= "/" element={<ListPage/>} />
                    <Route path= "/save" element={<SavePage/>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;