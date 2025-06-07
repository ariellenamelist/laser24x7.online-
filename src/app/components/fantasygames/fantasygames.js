'use client'
import React from "react";
import Image from "next/image";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


export default function Fantasygames() {

        const settings = {          
          infinite: true,
          spacing: 15,
          speed: 500,
          slidesToShow: 6,
          slidesToScroll: 1,
          autoplay: true,
          dots: false,
          autoplaySpeed: 3000,
          responsive: [
            {
              breakpoint: 768, // screens less than 768px
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
              },
            },
          ],
        };

    return (
        <>
      
  <div className="section-one section-one-14">
    <div className="e-con-inner">
      <div className="row">
        <div className="col-12">
          <div className="left text-center">
            <h2 className="elementor-heading-title elementor-size-default">
              {" "}
              Are there any fantasy games available at Laser247?
            </h2>
            <div className="top--slider">
            <Slider {...settings}>
                <div className="item">
                  <Image
                    className="img-fluid"
                    src="/images/Sports-01.webp"
                    alt="Laser247" title="Welcome to Laser247"
                    width={174}
                    height={235}      
                    />
                 </div>
                 <div className="item">
                  <Image
                    className="img-fluid"
                    src="/images/Sports-02.webp"
                    alt="Laser247" title="Welcome to Laser247"
                    width={174}
                    height={235}      
                    />
                 </div>
                 <div className="item">
                  <Image
                    className="img-fluid"
                    src="/images/Sports-03.webp"
                    alt="Laser247" title="Welcome to Laser247"
                    width={174}
                    height={235}      
                    />
                 </div>
                 <div className="item">
                  <Image
                    className="img-fluid"
                    src="/images/Sports-04.webp"
                    alt="Laser247" title="Welcome to Laser247"
                    width={174}
                    height={235}      
                    />
                 </div>
                 <div className="item">
                  <Image
                    className="img-fluid"
                    src="/images/Sports-06.webp"
                    alt="Laser247" title="Welcome to Laser247"
                    width={174}
                    height={235}      
                    />
                 </div>
                 <div className="item">
                  <Image
                    className="img-fluid"
                    src="/images/Sports-05.webp"
                    alt="Laser247" title="Welcome to Laser247"
                    width={174}
                    height={235}      
                    />
                 </div>
                 <div className="item">
                  <Image
                    className="img-fluid"
                    src="/images/Sports-06.webp"
                    alt="Laser247" title="Welcome to Laser247"
                    width={174}
                    height={235}      
                    />
                 </div>
                 <div className="item">
                  <Image
                    className="img-fluid"
                    src="/images/Sports-07.webp"
                    alt="Laser247" title="Welcome to Laser247"
                    width={174}
                    height={235}      
                    />
                 </div>
                 <div className="item">
                  <Image
                    className="img-fluid"
                    src="/images/Sports-08.webp"
                    alt="Laser247" title="Welcome to Laser247"
                    width={174}
                    height={235}      
                    />
                 </div>
            </Slider>            
            </div>
            <br />
            <div className="elcontainer text-left">
              <p>
                <strong>1. Cricket: </strong> We provide pre-match and live betting choices for major series, such as the IPL, World Cup, T20s, One-Day, and Test series. Our subscribers have access to a wide range of alternatives, including toss-winner, match-winner, total runs, top bowler, top batsman, and other incredible game highlights.
              </p>
              <p>
                <strong>2. Football:</strong> We offer a variety of leagues, including the English Premier League, La Liga, Serie A, UEFA Champions League, and FIFA World Cup, for football fans. Among other things, there are wagers on Full Time/Full Time, Total Goals, and Goal Difference.{" "}
              </p>
              <p>
                <strong>3. Tennis:</strong> You can wager on significant events like Wimbledon, the US Open, and others if you decide to play tennis. Along with betting possibilities like match winner, set winner, total sets, etc., you can wager on a single or team victory.{" "}
              </p>
              <p>
                <strong>4. Horse Racing:</strong> Since ancient times, people have bet on horse races. With our platform, we provide our users with the same exciting experience. It is possible to wager on the finish line or the winner of a race.
              </p>
              <p>
                <strong>5. Basketball:</strong> Our website offers leagues like the FIBA, NBA, NCAA, BCL, and others. You can wager on the team that wins, the player with the most goals, or the difference between basket victories.{" "}
              </p>
            </div>
            <br />
            <h3 className="elementor-heading-title elementor-size-default">
              {" "}
              Online Casino Games
            </h3>{" "}
            <br />
            <div className="elcontainer text-left">
              <p>
                We also have casino games if you don't want to play any of the sports or don't enjoy them. And that is the unique feature of our platform. You may play both traditional casino games and fantasy sports at Laser247.com.
              </p>
              <p>
                You will always have something to play and never run out of possibilities because there are so many casino games. Exciting slots, classic table games, and even live dealer interactive events are available in our Laser247 casino department.
              </p>
              <div className="f-bx">
                <div className="row">
                  <div className="col-sm-4">
                    <div className="ibx">
                      <div className="img">                       
                        <Image
                          className="img-fluid"
                          src="/images/slot_game-1.webp"
                          alt="Laser247" title="Welcome to Laser247"
                          width={360}
                          height={240}      
                          />
                      </div>
                      <div className="inf">
                        <h4>Slot Games</h4>
                        <p>
                          There are more than 100 games to choose from, each with unique themes, jackpot sequences, and other features. Among the most popular games include bingo, video poker, slots, craps, piano, and live dealer.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="ibx">
                      <div className="img">
                      <Image
                          className="img-fluid"
                          src="/images/slot_game-2.webp"
                          alt="Laser247" title="Welcome to Laser247"
                          width={360}
                          height={240}      
                          />
                      </div>
                      <div className="inf">
                        <h4>Table Games</h4>
                        <p>
                          You can try your luck at live or online variations of traditional table games, including blackjack, roulette, and baccarat.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="ibx">
                      <div className="img">
                      <Image
                          className="img-fluid"
                          src="/images/slot_game-3.webp"
                          alt="Laser247" title="Welcome to Laser247"
                          width={360}
                          height={240}      
                          />                       
                      </div>
                      <div className="inf">
                        <h4>Live Casino</h4>
                        <p>
                          You can participate in our unique live casino event if you would like not to play against anonymous people or preprogrammed boards. It's a true live casino with live dealers and players. It simulates playing in a real casino and provides an amazing experience.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <br />
            </div>{" "}
            <br />
            <h3 className="elementor-heading-title elementor-size-default">
              {" "}
              Here’s a quick table showing common fantasy game types:{" "}
            </h3>{" "}
            <br />
            <div className="table-container table-responsive py-3">
              <table className="table table-bordered table-hover">
                <tbody>
                  <tr>
                    <th>Entertainment Category</th>
                    <th> Popular Games &amp; Events </th>
                    <th> Key Features</th>
                    <th> Betting Range</th>
                  </tr>
                  <tr>
                    <td>Cricket </td>
                    <td>IPL, World Cups, BBL, PSL, Domestic Leagues</td>
                    <td>Live In-Match Betting, per ball/over bets</td>
                    <td>₹2 to ₹1 lakhs</td>
                  </tr>
                  <tr>
                    <td>Football &amp; Other Sports</td>
                    <td>
                      Premier League, La Liga, NBA, Tennis, Kabaddi, Horse
                      Racing
                    </td>
                    <td>Bet on Global Sports, Acca Boost </td>
                    <td>₹2 to ₹1 lakhs</td>
                  </tr>
                  <tr>
                    <td>Authentic Desi Card Games</td>
                    <td>
                      Teen Patti (6 variants), Andar Bahar, Marriage Card, 32
                      Cards
                    </td>
                    <td>Play Classic Indian Games, Hindi-Speaking Dealers</td>
                    <td>₹2 to ₹1 lakh</td>
                  </tr>
                  <tr>
                    <td>Classic International Cards</td>
                    <td>Blackjack, Poker, Baccarat, Rummy, Dragon Tiger</td>
                    <td>Standard Casino Games, Auto-Translate Option</td>
                    <td>₹5 to ₹2 lakhs</td>
                  </tr>
                  <tr>
                    <td>Roulette &amp; Immersive Tables </td>
                    <td>European/American/French Roulette, Sic Bo, Craps</td>
                    <td>Multiple Table Types, Multi-Camera Angles</td>
                    <td>₹5 to ₹2 lakhs</td>
                  </tr>
                  <tr>
                    <td>Exciting Fast Games</td>
                    <td>Aviator, Crash, Dice, Plinko, Mines </td>
                    <td>Instant Results, Quick Gameplay</td>
                    <td>₹5 to ₹50k </td>
                  </tr>
                  <tr>
                    <td>Diverse Slot Machines</td>
                    <td>
                      Bollywood Themes, Mythology, Lucky 7s (200+ options)
                    </td>
                    <td>Huge Game Selection, Progressive Jackpots </td>
                    <td>₹2 to ₹10k per spin </td>
                  </tr>
                  <tr>
                    <td>Premium Live Casino </td>
                    <td>Live Dealers for Cards, Roulette, etc.</td>
                    <td>Real-time Interaction, HD Streaming, VIP Tables</td>
                    <td>₹100 to ₹2 lakhs</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <br />



                            
        </>
    )
}
