
import Footer from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import "./Pages.css";
export const Price=()=>{
    return(
        <>
        <div><Navbar/></div>
        <div style={{width:"100%", margin:"auto", marginTop:"10%"}}>
       
       
        <div className="head">
            <h1>Sheduling should be easy.</h1>
        </div>
        <br></br>
        <div className="start">
          <h1>Start free.</h1>  
        </div>
        <div className="price">
            <div className="basic">
                <div className="basic"><h5>BASIC</h5></div>
                <div className="Always"><h3>Always Free</h3></div>
                <div className="basics"><p>When you want the basic</p></div>
                <div className="bottom"><button>GET STARTED</button></div>
            </div>

            <div className="essentials">
            <div className="basic"><h5>ESSENTIALS</h5></div>
            <div className="Always"><h3>$8/seat/mo</h3></div>
            <div className="basics"><p>When you need powerful scheduling automation</p></div>
            <div className="bottom2"><button>GET STARTED</button></div>
            </div>
             
             
            <div className="professional">
            <div className="basic"><h5>PROFESSIONAL</h5></div>
            <div className="Always"><h3>$12/seat/mo</h3></div>
            <div className="basics"><p>When you need customization integration and basic team features</p></div>
            <div className="bottom3"><button>GET STARTED</button></div>
            </div>


            <div className="teams">
            <div className="basic"><h5>TEAMS</h5></div>
            <div className="Always"><h3>$16/seat/mo</h3></div>
            <div className="basics"><p>When you need team needs to align on a scheduling process and collaborate efficiently</p></div>
            <div className="bottom4"><button>GET STARTED</button></div>
            </div>

            <div className="enterprise">
            <div className="basic"><h5>ENTERPRISE</h5></div>
            <div className="Always"><h3>$16/seat/mo</h3></div>
            <div className="basics"><p>
When your 30+ member team needs advanced security, control, and support </p></div>
            <div className="bottom5"><button>Contact Us</button></div>

            </div>


        </div>



        
       <div className="second">
            <div className="basic2">
                <div className="basicsec"><h5>FEATURES</h5></div>
                <div className="Always"><h3>Features by plan</h3></div>
                <div className="basics"><p>Find subscription that makes the most sense for you or your team</p></div>
                 
            </div>

            <div className="price2">
            <div className="essentials2">
            <div className="essent"><h5>BASICS</h5></div>
            <div className="Always"><h3>FREE</h3></div>
            
            <div className="bottom11"><button>Sign up</button></div>
            </div>
             
             
            <div className="professional2">
            <div className="essent"><h5>ESSENTIAL</h5></div>
            <div className="Always"><h3>$8</h3></div>
            <div className="bottom11"><button>Sign up</button></div>
            </div>


            <div className="teams2">
            <div className="essent"><h5>PROFESSIONAL</h5></div>
            <div className="Always"><h3>$12</h3></div>
            <div className="bottom11"><button>Sign up</button></div>
            </div>

            <div className="enterprise2">
            <div className="essent"><h5>TEAMS</h5></div>
            <div className="Always"><h3>$16</h3></div>
            <div className="bottom11"><button>Contact sales</button></div>

            </div>


        </div>
        </div>

        <div className="last">

            <div className="left">
                <h1>Frequently</h1>
                <h1>Asked</h1>
                <h1>Question</h1>
            </div>

            <div className="right">
                <div className="firsts">
             <div><h1>What happens at the end of my trials?</h1></div>
             <div><h1>+</h1></div>
                </div>

                <div className="firsts">
             <div><h1>Can we try Calendly with multiple users?</h1></div>
             <div><h1>+</h1></div>
                </div>

                <div className="firsts">
             <div><h1>What does renewal process look like?</h1></div>
             <div><h1>+</h1></div>
                </div>

                <div className="firsts">
             <div><h1>How do I upgrade or downgrade?</h1></div>
             <div><h1>+</h1></div>
                </div>

                <div className="firsts">
             <div><h1>We're a  non-profit organization, is there special pricing available?</h1></div>
             <div><h1>+</h1></div>
                </div>

                <div className="firsts">
             <div><h1>What payment method do you accept?</h1></div>
             <div><h1>+</h1></div>
                </div>
             </div>

         </div>


         <div className="blue">
            <br></br>
            <div className="one"><h1>Easy access for easy bookings.</h1></div>

            <div className="two">
               <h3>Share your Calendly link right from your browser, so you can schedule meetings</h3>
              
               <h3>without  the back-and-forth</h3>
            </div>

            <div className="three">
                <div><button>Start for free</button></div>
                <div><button>Talk with Sales</button></div>
            </div>
         </div>
        
        </div>
        <div><Footer/></div>
        </>
    )
}