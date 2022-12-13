import React from "react";

const piC1 = new URL("./images/pic1.png", import.meta.url);
const diaframe = new URL("./images/diaframe.png", import.meta.url);
const inst = new URL("./images/inst.png", import.meta.url);
const link = new URL("./images/link.png", import.meta.url);
const twit = new URL("./images/twit.png", import.meta.url);
const LBolt = new URL("./images/l-bolt.png", import.meta.url);
const RBolt = new URL("./images/r-bolt.png", import.meta.url);

const Teambox = (props) => {
  const leftInsta = props.leftInsta;
  const leftlink = props.leftlink;
  const lefttwit = props.lefttwit;
  const midInsta = props.midInsta;
  const midlink = props.midlink;
  const midtwit = props.midtwit;
  const rightInsta = props.rightInsta;
  const rightlink = props.rightlink;
  const righttwit = props.righttwit;
  return (
    <div className="boxes">
      <img src={piC1} className="bgpic" />
      <img src={LBolt} className="l-bolt" alt="" />
      <img src={RBolt} className="r-bolt" alt="" />
      <div className="forHover">
        <div className="fH">
          <div class="dialogue">
            <img src={diaframe} alt="diaframe" className="diaframe" />
            <a href={leftInsta}>
              <img src={inst} alt="instagram" className="instagram" />
            </a>
            <a href={leftlink}>
              <img src={link} alt="linkedin" className="linkedin" />
            </a>
            <a href={lefttwit}>
              <img src={twit} alt="twitter" className="twitter" />
            </a>
            <div class="contact4t">
              <p>+91-09809808</p>
              <p>ASDASD@IITG.AC.IN</p>
            </div>
          </div>
        </div>
        <div className="fH">
          <div class="dialogue">
            <img src={diaframe} alt="diaframe" className="diaframe" />
            <a href={midInsta}>
              <img src={inst} alt="instagram" className="instagram" />
            </a>
            <a href={midlink}>
              <img src={link} alt="linkedin" className="linkedin" />
            </a>
            <a href={midtwit}>
              <img src={twit} alt="twitter" className="twitter" />
            </a>
            <div class="contact4t">
              <p>+91-09809808</p>
              <p>ASDASD@IITG.AC.IN</p>
            </div>
          </div>
        </div>
        <div className="fH">
          <div class="dialogue">
            <img src={diaframe} alt="diaframe" className="diaframe" />
            <a href={rightInsta}>
              <img src={inst} alt="instagram" className="instagram" />
            </a>
            <a href={rightlink}>
              <img src={link} alt="linkedin" className="linkedin" />
            </a>
            <a href={righttwit}>
              <img src={twit} alt="twitter" className="twitter" />
            </a>
            <div class="contact4t">
              <p>+91-09809808</p>
              <p>ASDASD@IITG.AC.IN</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teambox;
