'use client'


import React, { useEffect } from 'react';
import $ from 'jquery';

export default function Faq() {
  
  useEffect(() => {
    function closeAccordionSection() {
      $('.accordion .accordion-section-title').removeClass('active');
      $('.accordion .accordion-section-content').slideUp(300).removeClass('open');
    }

    $('.accordion-section-title').on('click', function (e) {
      e.preventDefault();
      const currentAttrValue = $(this).attr('href');

      if ($(e.target).hasClass('active')) {
        closeAccordionSection();
      } else {
        closeAccordionSection();
        $(this).addClass('active');
        $('.accordion ' + currentAttrValue).slideDown(300).addClass('open');
      }
    });

    return () => {
      $('.accordion-section-title').off('click');
    };
  }, []);


    return (
        <>
        <div className="section-one section-one-9 section-one-22">
  <div className="e-con-inner">
    <h2 className="elementor-heading-title elementor-size-default">
      Frequently Asked Questions{" "}
    </h2>
    <div className="accordion">
      <div className="accordion-section">
        <a href="#accordion-1" className="accordion-section-title">
          1. How do I sign up at Laser247? <span className="plus">+</span>
          <span className="minus">-</span>
        </a>
        <div
          id="accordion-1"
          className="accordion-section-content"
          style={{ display: "none" }}
        >
          <p>
            The registration procedure is quite easy. On our home page, click the "Sign Up" or "Register" button. Additionally, the WhatsApp (recommended) button on the homepage provides a direct link to your customer ID. First, you will be prompted for your email address, active WhatsApp number, and full name.
          </p>
        </div>
      </div>
      <div className="accordion-section">
        <a href="#accordion-2" className="accordion-section-title">
          2. Are there new player welcome bonuses at Laser247?{" "}
          <span className="plus">+</span>
          <span className="minus">-</span>
        </a>
        <div
          id="accordion-2"
          className="accordion-section-content"
          style={{ display: "none" }}
        >
          <p>
            Yes, promotions and welcome offers are available to both new and returning players. You can currently receive a 100% welcome bonus on your initial investment. Along with 1% lifetime referral prizes, we also give loyal users additional referral bonuses.
          </p>
        </div>
      </div>
      <div className="accordion-section">
        <a href="#accordion-3" className="accordion-section-title">
          3. How many betting options are available on Laser247?{" "}
          <span className="plus">+</span>
          <span className="minus">-</span>
        </a>
        <div
          id="accordion-3"
          className="accordion-section-content"
          style={{ display: "none" }}
        >
          <p>
            Numerous betting options are available at Laser247.com, including virtual sports, live casinos, popular sports betting (such as tennis, cricket, and football), and hundreds of other activities. The Laser247 app's side menu or top bar allows you to view every list.
          </p>
        </div>
      </div>
      <div className="accordion-section">
        <a href="#accordion-4" className="accordion-section-title">
          4. What options are available for downloading the Laser247 apps?{" "}
          <span className="plus">+</span>
          <span className="minus">-</span>
        </a>
        <div
          id="accordion-4"
          className="accordion-section-content"
          style={{ display: "none" }}
        >
          <p>
            The Laser247 app is available for download on the official website for iOS and Android users. If the warning appears during the initial installation, you can choose to choose "Install Anyway."
          </p>
        </div>
      </div>
      <div className="accordion-section">
        <a href="#accordion-5" className="accordion-section-title">
          5. How long does it take to get funds in my Laser247 gaming account after a deposit?
          <span className="plus">+</span>
          <span className="minus">-</span>
        </a>
        <div
          id="accordion-5"
          className="accordion-section-content"
          style={{ display: "none" }}
        >
          <p>
            UPI deposits and e-wallets are typically credited in a matter of seconds. Depending on the banking system, net banking transfers (RTGS, NEFT, and IMPS) take five minutes. The timings can change since Bitcoin deposits need network confirmations.
          </p>
        </div>
      </div>
      <div className="accordion-section">
        <a href="#accordion-6" className="accordion-section-title">
          6. What if I forget my Laser247 Login ID password?{" "}
          <span className="plus">+</span>
          <span className="minus">-</span>
        </a>
        <div
          id="accordion-6"
          className="accordion-section-content"
          style={{ display: "none" }}
        >
          <p>
            Use the "Forgot Password" option from the login screen if you are unable to remember your password. You will be asked to enter your WhatsApp number or registered email address. Additionally, you can contact our support staff directly via WhatsApp.{" "}
          </p>
        </div>
      </div>
      <div className="accordion-section">
        <a href="#accordion-7" className="accordion-section-title">
          7. How do I get customer support if I face any problems?{" "}
          <span className="plus">+</span>
          <span className="minus">-</span>
        </a>
        <div
          id="accordion-7"
          className="accordion-section-content"
          style={{ display: "none" }}
        >
          <p>
            We offer round-the-clock, human, not chatbot, one-on-one customer service. We can also be reached through live chat on WhatsApp.{" "}
          </p>
        </div>
      </div>
      <div className="accordion-section">
        <a href="#accordion-8" className="accordion-section-title">
          8. What if a match or an event on which I have bet is cancelled?{" "}
          <span className="plus">+</span>
          <span className="minus">-</span>
        </a>
        <div
          id="accordion-8"
          className="accordion-section-content"
          style={{ display: "none" }}
        >
          <p>
            Events that are cancelled or postponed are examples of circumstances that fall under our betting guidelines. Bets on cancelled events are usually worthless, and the money is returned to your Laser247 balance.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

        </>
    )
}