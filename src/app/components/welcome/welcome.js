'use client'
import Image from "next/image";

export default function Welcome() {
    return (
        <>

			<div className="section-one">
					<div className="e-con-inner">
                    <div className="image">
                        
                        <Image
                            className="img-fluid"
                            src="/images/laser247-banner.webp"
                            alt="Laser247" title="Welcome to Laser247"
                            width={1140}
                            height={213}      
                            />
                        </div>  <br/>
					<div className="row">
					<div className="col-12">
					<div className="left text-center">
                        <h1 className="elementor-heading-title elementor-size-default">
                            Welcome to Laser247 – <br />
                            India’s #1 Online Betting Platform for Sports and Casino Games
                        </h1>
                        <br />
                        <div className="text-left">
                            <p>
                            Would you like to try your luck at sports and make predictions about your favourite sports? For this, Laser247 Fantasy Gaming is the ideal platform.{" "}
                            </p>
                            <p>
                            Building a team, competing against other players, and receiving rewards based on your ranking (or fantasy point scores) are all possible with Laser247. Watching the athletes you have chosen play in real time increases your interest in your favourite sport.{" "}
                            </p>
                            <p>
                            Furthermore, you don't need to be an expert to use Laser247. The internet interface and the app are both simple to use and comprehend. We also have a really easy sign-up process. "The Blink of an Eye" is all that is required.{" "}
                            </p>
                            Consequently, Laser247 lets you continue to enjoy your favourite games while making real money.
                            <p />
                        </div>
                        </div>

					</div>
					</div>				
					</div>					
					<br/>	
					<div className="text-center anc-tab">
						<a className="elementor-button elementor-button-link elementor-size-sm elementor-animation-pulse-grow" href="https://wa.me/918441068489">
							<span className="elementor-button-content-wrapper">
								
								<span className="elementor-button-text">Get Laser247 Login ID</span>
							</span>
						</a>
					</div>	
					<br/>					
					</div>
							
        </>
    )
}
