import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import '../CSS/Nav.css'
import Pictures from './Pictures'
import Logo from "./Logo"
import Navpopup from './Navpopup'

function Nav() {
    return (
    <div>
        <header className='navHeader'>
            <div><Logo/></div>
            <nav className='NavigationBar'>
                <ul className='NavigationList'>
                    <li className="Events"><NavLink to="/Events">EVENTS</NavLink></li>
                    <li className="Merch"><NavLink to="/Merch">MERCH</NavLink></li>
                    <li className='Campaigns'><NavLink to="/Campaigns">CAMPAIGNS</NavLink></li>
                    <li className='Teams'><NavLink to="/Teams">TEAMS</NavLink></li>
                    <li className='Mun'><NavLink to="/MUN"> MUN &emsp;</NavLink></li>
                    <li className='Sponsors'><NavLink to="/Sponsors" style={{
                        marginLeft : '-25px'
                        }}>SPONSORS</NavLink></li>
                    <li className='Contests'><NavLink to="/Contests">CONTESTS</NavLink></li>
                </ul>
            </nav>
            <Link className='image' to="/BookTickets"><Pictures /></Link>
        </header>
    </div>
    )
}

export default Nav