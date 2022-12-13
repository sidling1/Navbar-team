import React from 'react'
import Footer from './Footer'
import Nav from './Nav'
import '../CSS/Home.css'
import img1 from '../images/home1.png'
import img2 from '../images/home2.png'
import img3 from '../images/home3.png'
import img4 from '../images/home4.png'
import img5 from '../images/home5.png'
import img6 from '../images/home6.png'
function Home() {
  return (
    <div>
      <Nav />
      <div className="mainbody">
                <div className="box1"></div>
                <div className="box2"></div>
                <div className="box3"></div>
                <div className="text1">north east unvield</div>
                <div className="text2"><p>North East India is a microcosm of India with its own diversity in terms of languages, culture, arts and religion. There is a need to promote and unveil the true potential of this part of country, which is still unexplored by many. In Alcheringa’16: Gamescape, The North East Social Entrepreneurship Summit and The North East Townhall Discussions were held under North East Unveiled.</p></div>
                <div className='slider'>
                    <div className="slide-track">
                        <hr  />
                        <div className="slide">
                            <img className='imgcam' src={img1} alt="" />
                        </div>
                        <div className="slide">
                            <img className='imgcam' src={img2} alt="" />
                        </div>
                        <div className="slide">
                            <img className='imgcam' src={img3} alt="" />
                        </div>
                        <div className="slide">
                            <img className='imgcam' src={img4} alt="" />
                        </div>
                        <div className="slide">
                            <img className='imgcam' src={img5} alt="" />
                        </div>
                        <div className="slide">
                            <img className='imgcam' src={img6} alt="" />
                        </div>
                        <div className="slide">
                            <img className='imgcam' src={img1} alt="" />
                        </div>
                        <div className="slide">
                            <img className='imgcam' src={img2} alt="" />
                        </div>
                        <div className="slide">
                            <img className='imgcam' src={img3} alt="" />
                        </div>
                        <hr />
                    </div>
                </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home