import React from "react";
import { Routes, Route } from 'react-router-dom';


import Beranda from './components/beranda';
import TentangKami from "./components/tentangkami";
import Karya from "./components/karya";
import Kontak from "./components/kontak";
import Gallery from "./pages/gallery";
import Cart from "./pages/cart";

const Utama = () => {
    return (
        <Routes>
            <Route exact path="/" Component={Beranda} />
            <Route path="/tentangkami" Component={TentangKami} />
            <Route path="/karya" Component={Karya} />
            <Route path="/kontak" Component={Kontak} />
            <Route path="/gallery" Component={Gallery} />
            <Route path="/cart" Component={Cart}/>
        </Routes>
    );
}

export default Utama;