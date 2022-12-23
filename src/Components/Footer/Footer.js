import React from 'react'
import './Footer.css'
import RedStone from './RedStone';
import GreenStone from './GreenStone';
import YellowStone from './YellowStone';
import VioletStone from './VioletStone';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Insta } from './Images/insta.svg';
import { ReactComponent as Facebook } from './Images/facebook.svg';
import { ReactComponent as Youtube } from './Images/utube.svg';
import { ReactComponent as Twitter } from './Images/twitter.svg';
import Logo from '../NavBar/Logo';

function Footer() {
 return (
    <div style={{
        backgroundColor: 'black',
        color: 'white',
    
    }} className='footer'>
        <div className='options'>
            <ul>
                    <li><NavLink to="/Events">EVENTS</NavLink></li>
                    <li><NavLink to="/Merch">MERCH</NavLink></li>
                    <li><NavLink to="/Campaigns">CAMPAIGNS</NavLink></li>
                    <li><NavLink to="/Teams">TEAMS</NavLink></li>
                    <li><NavLink to="/MUN">MUN</NavLink></li>
                    <li><NavLink to="/Sponsors">SPONSORS</NavLink></li>
                    <li><NavLink to="/Contests">CONTESTS</NavLink></li>
            </ul>
        </div>
        <div><Logo/></div>
        <div>
            <div className='hail'>HAIL <br/> ALCHER!</div>
            <div className="stones">
                <div className='red'>
                    <RedStone/>
                </div>
                <div className='green'>
                    <GreenStone/>
                </div>
                <div className='violet'>
                    <VioletStone/>
                </div>
                <div className='yellow'>
                    <YellowStone/>
                </div>
            </div>
        </div>
        <div>
            <div className='contact'>
                <div className='shareka'>
                    <b>Shareka Iqbal</b> <br></br>
                    PR HEAD<br></br>
                    +91 8919054239
                </div>
                <div className='abhi'>
                    <b>Abhishek Singh</b> <br></br>
                        PR HEAD<br></br>
                        +91 9983072631
                </div>
            </div>
            <div className='socialIcon'>
                <div className="socials">
                    <a href=''><Insta/></a>
                    <a href=''><Facebook/></a>
                    <a href=''><Twitter/></a>
                    <a href=''><Youtube/></a>
                </div>
                <div className='inqueries'>
                For Business Inqueries: <b>alcheringa@iitg.ac.in</b>
                </div>
            </div>
        </div>
    </div>
)
}

export default Footer