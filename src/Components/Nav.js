import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import '../CSS/Nav.css'
import Pictures from './Pictures'
import Logo from "./Logo"
import Navpopup from './Navpopup'

function Nav() {
    return (
    <div>
        <header>
            <div><Logo/></div>
            <nav className='NavigationBar'>
                <ul className='NavigationList'>
                    <li id="Events"><NavLink to="/Events">EVENTS</NavLink></li>
                    <li id="Merch"><NavLink to="/Merch">MERCH</NavLink></li>
                    <li><NavLink to="/Campaigns">CAMPAIGNS</NavLink></li>
                    <li><NavLink to="/Teams">TEAMS</NavLink></li>
                    <li><NavLink to="/MUN"> MUN &emsp;</NavLink></li>
                    <li><NavLink to="/Sponsors" style={{
                        marginLeft : '-25px'
                        }}>SPONSORS</NavLink></li>
                    <li><NavLink to="/Contests">CONTESTS</NavLink></li>
                </ul>
            </nav>
            <Link className='image' to="/BookTickets"><Pictures /></Link>
        </header>
    </div>
    )
}

export default Nav