import React from 'react';
import Footer from '../Footer/Footer'
import Nav from '../NavBar/Nav'
import './Campaigns.css'
import img1 from './images/home1.png'
import img2 from './images/home2.png'
import img3 from './images/home3.png'
import img4 from './images/home4.png'
import img5 from './images/home5.png'
import img6 from './images/home6.png'
import img7 from './images/camp1.png'
import img8 from './images/camp2.png'
import img9 from './images/camp3.png'
function Campaigns() {
    return (
      <div>
          <div className="mainbody">
            <Nav/>
            <Display/>
          </div>
          <Footer/>
      </div>
        );
    }
    class Cards extends React.Component {
      render() {
        return (
          <section>
            {    <div className="card" id="card" style={this.props.cardStyle}>
                  <div className="cambox3i"></div>
                  <div className="cambox2i"></div>
                  <div className="cambox1i"><div className="text1">north east unvield</div>
                  <div className='desc'>
                  <div className="camtext2i">North East India is a microcosm of India with its own diversity in terms of languages, culture, arts and religion. There is a need to promote and unveil the true potential of this part of country, which is still unexplored by many. In Alcheringa’16: Gamescape, The North East Social Entrepreneurship Summit and The North East Townhall Discussions were held under North East Unveiled.</div>
                  </div>
                  <div className='slideri'>
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
                </div>}
           {
              <div className="card" id="card" style={this.props.cardStyle}>
                  <div className="cambox2"></div>
                  <div className="cambox3"></div>
                  <div className="cambox1"><div className="text1">safher</div>
                  <div className='desc'>
                  <div className="camtext2i">Campus residents get app-exclusive E-Pass access for offline events! Download the Alcheringa app today and explore our impressive event line-up and merchandise as we begin our Voyage to Neoterra.</div>
                  </div>
                  <div className='slideri'>
                    <div className="slide-track">
                        <hr  />
                        <div className="slide">
                            <img className='imgcam' src={img7} alt="" />
                        </div>
                        <div className="slide">
                            <img className='imgcam' src={img8} alt="" />
                        </div>
                        <div className="slide">
                            <img className='imgcam' src={img9} alt="" />
                        </div>
                        <div className="slide">
                            <img className='imgcam' src={img7} alt="" />
                        </div>
                        <div className="slide">
                            <img className='imgcam' src={img8} alt="" />
                        </div>
                        <div className="slide">
                            <img className='imgcam' src={img9} alt="" />
                        </div>
                        <div className="slide">
                            <img className='imgcam' src={img7} alt="" />
                        </div>
                        <hr />
                    </div>
                </div>
                </div>
                </div>}
          </section>
        )
      }
    }
    
    class Display extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          currentCard: 0,
          position: 0,
          cardStyle: {
            transform: 'translateX(0px)'
          },
          width: 0,
        };
      }
    
      componentDidMount() {
        let boxWidth = document.getElementById("card").clientWidth;
        this.setState({ width: boxWidth });
      }
      handleClick(type) {
        let margin = window.getComputedStyle(document.getElementById("card")).marginRight;
        margin = JSON.parse(margin.replace(/px/i, '')); 
    
        const cardWidth = this.state.width; // the card's width
        const cardMargin = margin; // the card's margin
        const cardNumber = 2; // the number of cards
        let currentCard = this.state.currentCard; // the index of the current card
        let position = this.state.position; // the position of the cards
        if(type === 'next' && currentCard < cardNumber-1) {
          currentCard++;
          position -= (cardWidth+cardMargin);
        } else if(type === 'prev' && currentCard > 0) {
          currentCard--;
          position += (cardWidth+cardMargin);
        }
        this.setCard(currentCard, position);
      }
      
      setCard(currentCard, position) {
        this.setState({
          currentCard: currentCard,
          position: position,
          cardStyle: {
            transform: `translateX(${position}px)`
          }
        })
      }
    
      render() {
        return (
          <div className="cards-slider">
            <div className="slider-btns">
              <button className="slider-btn btn-l" onClick={() => this.handleClick('prev')}>&lt;</button>
              <button className="slider-btn btn-r" onClick={() => this.handleClick('next')}>&gt;</button>
            </div>
            <Cards cardStyle={this.state.cardStyle} />
          </div>
        )
      }
    }
export default Campaigns;                   