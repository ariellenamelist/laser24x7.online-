'use client'
import React from "react";
import Image from "next/image";


export default function Footer() {
    return (

        <>
        <div className="footer-section-top">
          <div className="section-one section-one-9 section-one-24">
            <div className="e-con-inner">
              <hr style={{ backgroundColor: "#000" }} />
              <br />
              <div className="pay-desc row">
                <div className="col-sm-12">
                  <h3>A Responsible Gaming Experience</h3>
                  <p>
                    <b>Disclaimer:</b> This website is only for people over 18 years
                    old. Under-18s are restricted from visiting betting sites. Also,
                    online betting is Illegal in Telangana, Arunachal Pradesh, Sikkim,
                    Assam, and Tamil Nadu. If you are from any of these cities, we
                    request you leave the site immediately.
                  </p>
                  <p>
                    <b>Please note:</b>
                  </p>
                  <p>
                    A professional team regularly maintains and updates the website. If
                    you find anything that needs to be changed or enhanced, please
                    contact our team at the provided number and Email.
                  </p>
                  <p>
                    <b>Partners:</b>
                  </p>
                  <ul className="ul">
                    <li className="listing">
                      <a href="https://www.cricbet99.vip/">
                        <span className="anc">CricBet99</span>
                      </a>
                    </li>
                    <li className="listing">
                      <a href="#">
                        <span className="anc">Laser247</span>
                      </a>
                    </li>
                    <li className="listing">
                      <a href="https://www.play99exch.co/">
                        <span className="anc">Play99Exch</span>
                      </a>
                    </li>
                    <li className="listing">
                      <a href="https://www.gold365.org.in/">
                        <span className="anc">Gold365</span>
                      </a>
                    </li>
                    <li className="listing">
                      <a href="#">
                        <span className="anc">WinBuzz247</span>
                      </a>
                    </li>
                    <li className="listing">
                      <a href="#">
                        <span className="anc">Fairplay</span>
                      </a>
                    </li>
                    <li className="listing">
                      <a href="#">
                        <span className="anc">FairDeal</span>
                      </a>
                    </li>
                    <li className="listing">
                      <a href="#">
                        <span className="anc">DaddyBet</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="section-0last footer-section">
            <div className="container text-center">
              <div className="row">
                <div className="col-12">
                  <div className="logo">
                    <div className="image">
                         
                        <Image
                            className="img-fluid"
                            src="/images/logo.png"
                            alt="Gold365"
                            width={170}
                            height={43}      
                            />
                      
                    </div>
                  </div>
                  <div className="copyright">
                    <p>
                      ©2025 Laser24x7.online – All rights reserved.
                      <br /> Laser247 is a licensed gaming company under the regulations
                      of Curacao and is certified to operate globally.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="whatsapp-button">
            <a href="https://wa.me/918441068489">
            <Image
                            className="img-fluid"
                            src="/images/wpi.png"
                            alt="Laser247" title="Welcome to Laser247"
                            width={50}
                            height={50}      
                            />
                            <span>Let's play and win. Get a new ID <br/> instantly on our WhatsApp.</span>
            </a>
          </div>
        </div>

        </>

    )
}
