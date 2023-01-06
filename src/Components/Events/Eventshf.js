import React from 'react'
import Footer from '../Footer/Footer'
import Nav from '../NavBar/Nav'
import ImgAsset from './Images'
import './Events.css'
import { NavLink, Link } from 'react-router-dom'

function Events() {
  return (
    
    <div>
        <Nav />
          <div className='Frame14859_Frame14859'>
              {/* <img className='paperboardyellowtexture2' src = {ImgAsset.Frame14859_paperboardyellowtexture3} /> */}
              <div className='Group2441'>
                <div className='mg11' id='tile'>
                  <div className='recef11'/>
                  <div className='g11'>
                    <div className='r111r' id='r1111'>
                      <div className='cmp1'>
                      <div className='h11'>BANGER EVENT</div>
                        <div className='t112'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
                        <div className='dte11'>
                          <img className='cal1' src = {ImgAsset.Frame14859_Vector_8} />
                          <span className='dti12'>29th February 2022, 8:00 PM</span>
                        </div>
                        <div className='dte12'>
                          <img className='cal1' src = {ImgAsset.Vector} />
                          <span className='dti12'>Cricket Ground, IIT Guwahati</span>
                        </div>
                      </div>
                      <div className='cmp2'>
                        <div className='iv11'>
                            <img className='i11' src = {ImgAsset.xwxx1} />
                            {/* <div className='shade1'></div> */}
                        </div>
                        <div className='gr11'>
                        <Link className='image' to="/BookTickets">
                          <div className='rct11'/>
                          <div className='frame11'>
                            <div className='outline11'>
                              <img className='vector11' src = {ImgAsset.bookticket} />
                            </div>
                            <span className='reg11'>BOOK TICKETS</span>
                            </div>
                        </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='mg11' id='tile'>
                  <div className='recef11'/>
                  <div className='g11'>
                    <div className='r111l' id='r1111'>
                      <div className='cmp2'>
                        <div className='iv11'>
                            <img className='i11' src = {ImgAsset.xwxx1} />
                            {/* <div className='shade1'></div> */}
                        </div>
                        <div className='gr11'>
                        <Link className='image' to="/BookTickets">
                          <div className='rct11'/>
                          <div className='frame11'>
                            <div className='outline11'>
                              <img className='vector11' src = {ImgAsset.bookticket} />
                            </div>
                            <span className='reg11'>BOOK TICKETS</span>
                            </div>
                        </Link>
                        </div>
                      </div>
                      <div className='cmp1'>
                      <div className='h11'>BANGER EVENT</div>
                        <div className='t112'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
                        <div className='dte11'>
                          <img className='cal1' src = {ImgAsset.Frame14859_Vector_8} />
                          <span className='dti12'>29th February 2022, 8:00 PM</span>
                        </div>
                        <div className='dte12'>
                          <img className='cal1' src = {ImgAsset.Vector} />
                          <span className='dti12'>Cricket Ground, IIT Guwahati</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='mg11' id='tile'>
                  <div className='recef11'/>
                  <div className='g11'>
                    <div className='r111r' id='r1111'>
                      <div className='cmp1'>                       
                      <div className='h11'>BANGER EVENT</div>
                        <div className='t112'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
                        <div className='dte11'>
                          <img className='cal11' src = {ImgAsset.Frame14859_Vector_8} />
                          <span className='dti12'>29th February 2022, 8:00 PM</span>
                        </div>
                        <div className='dte12'>
                          <img className='cal11' src = {ImgAsset.Vector} />
                          <span className='dti12'>Cricket Ground, IIT Guwahati</span>
                        </div>
                      </div>
                      <div className='cmp2'>
                        <div className='iv11'>
                            <img className='i11' src = {ImgAsset.xwxx1} />
                            {/* <div className='shade1'></div> */}
                        </div>
                        <div className='gr11'>
                        <Link className='image' to="/BookTickets">
                          <div className='rct11'/>
                          <div className='frame11'>
                            <div className='outline11'>
                              <img className='vector11' src = {ImgAsset.bookticket} />
                            </div>
                            <span className='reg11'>BOOK TICKETS</span>
                            </div>
                        </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='upnav'>
                <div className='sidebar11'>
                <NavLink to="/Events/pt"><div className="pronites1">PRONITES</div></NavLink>
                <NavLink to="/Events/pt/cc"><div className='CreatorsCamp1'>CREATORS CAMP</div></NavLink>
                <NavLink to="/Events/pt/hf"><div className='HumourFest1'>HUMOUR FEST</div></NavLink>
                <NavLink to="/Events/pt/ps"><div className='PROSHOWS1'>PROSHOWS</div></NavLink>
                </div>

                <div className='hamburger'>
                  <span class="bar"></span>
                  <span class="bar"></span>
                  <span class="bar"></span>
                </div>
                
              </div>
          </div>
        <Footer />
    </div>
  )
}

export default Events