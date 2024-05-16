import React from 'react';
import './navbar.css'; // Import file CSS untuk styling
import LogoNgonser from './img/ngonserlogo.png'
import masuk from './img/masuk.png'
import daftar from './img/daftar.png'

class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar">
                <a href='/'><div className="navbar-logo">
                    <img src={LogoNgonser} />
                </div></a>
                <div className="navbar-search">
                    <input type="text" placeholder="" />
                    <button type="submit">Search</button>
                </div>
                <div className="navbar-links">
                    <a href="./kontak">Kontak</a>
                    <a href="./tentangkami">Tentang Kami</a>
                    <a href="./masuk"><img src={masuk} height={28} /></a>
                    <a href="./daftar"><img src={daftar} height={28} /></a>
                </div>
            </nav>
        );
    }
}

export default Navbar;
