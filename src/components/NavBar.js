import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.css'

function NavBar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <>
            <nav className='navbar'>
                <div className='nav-container'>
                    <NavLink exact to="/" className="nav-logo" >
                        Eurotrip
                        <img src='/logo.svg' width={20} height={20} className='nav-logo' />
                    </NavLink>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-items'>
                            <NavLink exact to="/" activeClassName="active" className="nav-links" onClick={handleClick}>
                                Home
                            </NavLink>
                        </li>
                        <li className='nav-items'>
                            <NavLink exact to="/promocoes" activeClassName="active" className="nav-links" onClick={handleClick}>
                                Promoções
                            </NavLink>
                        </li>
                        <li className='nav-items'>
                            <NavLink exact to="/destinos" activeClassName="active" className="nav-links" onClick={handleClick}>
                                Destinos
                            </NavLink>
                        </li>
                        <li className='nav-items'>
                            <NavLink exact to="/contato" activeClassName="active" className="nav-links" onClick={handleClick}>
                                Contato
                            </NavLink>
                        </li>
                    </ul>
                    <div className='nav-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar