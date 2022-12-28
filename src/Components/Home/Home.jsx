import React from 'react'
import Footer from '../Footer/Footer'
import Nav from '../NavBar/Nav'
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './Home.css';
import useCacheBannerImages from './useCacheBannerImages.tsx';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


const totalFrames = 29;

gsap.registerPlugin(ScrollTrigger);

function Home() {
  const mql = window.matchMedia('(max-width: 800px)').matches;
  const imageRef = useRef(null);
  //maybe change this thing
  const frameCount = mql ? 10 : 12;
  const { images, loading } = useCacheBannerImages(frameCount, totalFrames);
  const imageObj = { currentImage: 1 };
  const videoRef = useRef(null);
  const videoOverRef = useRef(null);
  const bottomNavRef = useRef(null);
  useEffect(() => {
      if (!mql) {
          gsap.to(imageObj, {
              currentImage: images.length,
              scrollTrigger: {
                //i dont get the relevance of this
                  trigger: '#hero-trigger',
                  pin: true,
                  //maybe this change
                  start: 'top top',
                  end: mql ? '+=200%' : '+=250%',
                  scrub: true,
                  //idk whats this for
                  id: 'banner-trigger',
              },
              onUpdate: () => {
                  const imgSrc = images[Math.round(imageObj.currentImage)];
                  if (imgSrc) imageRef.current.src = imgSrc;
              },
          });
      }
  },[loading]);


  return (
    <div>
      <Nav/>
        <img ref={imageRef} id="hero-trigger"></img>
        <h1>Home Page</h1>
      <Footer/>
    </div>
  )
}

export default Home