import { Button } from "@chakra-ui/react";
import React from "react";
import style from "./IndividualPage.module.css";
import individual_1 from "../Individual/utils/Individual-1.jpeg";
import individual_2 from "../Individual/utils/Individual-2.jpeg";
import individual_3 from "../Individual/utils/Individual-3.jpeg";
import individual_4 from "../Individual/utils/Individual-4.jpeg";
import individual_5 from "../Individual/utils/Individual-5.jpeg";
import individual_6 from "../Individual/utils/Individual-6.jpeg";
import individual_video from "../Individual/utils/Individual_video.jpg";
import individual_plans from "../Individual/utils/Individual_plans.jpg";
import solution_1 from "../Individual/utils/solution_1.jpeg";
import solution_2 from "../Individual/utils/solution_2.jpeg";
import solution_3 from "../Individual/utils/solution_3.jpeg";
import solution_4 from "../Individual/utils/solution_4.jpeg";
import features_1 from "../Individual/utils/features_1.jpeg";

export const IndividualPage = () => {

  const solutionBox = [
    {
    imageUrl: solution_1,
    imageAlt: 'Sales',
    title: 'Sales',
    description:"Get to your best leads faster",
    
  },
  {
    imageUrl: solution_2,
    imageAlt: 'Recruting',
    title: 'Recruting',
    description:"Less emailing, more interviews",
   
  },
  {
    imageUrl: solution_3,
    imageAlt: 'Customer Success',
    title: 'Customer Success',
    description:"Connect with customers when it matters",
 
  },
  {
    imageUrl: solution_4,
    imageAlt: 'Education',
    title: 'Education',
    description:"Boost student success",
   
  }
]
  return (
    <div className={style.individual_main}>

      {/* 1st issue Top section  start*/}

      <div className={style.individual_main1}>
        {/* first box */}
        <div className={style.individual_box1}>
          <div className={style.individual_box1_a}>
            <div>
              <span style={{ fontSize: "42px", fontWeight: "900" }}>
                The genius way to <br /> work{" "}
                <span
                  style={{
                    fontSize: "42px",
                    color: "#006bff",
                    fontWeight: "bolder",
                  }}
                >
                  better
                </span>
              </span>
            </div>
            <div>
              <p style={{ fontSize: "18px", color: "#67829d" }}>
                Calendly makes it easy to work smarter when
                <br />
                you’re working solo.Meetings, sessions, and <br />
                appointments become more efficient ways to <br />
                achieve success and accomplish goals.
              </p>
            </div>

            <div>
              <Button colorScheme="messenger" size="lg">
                Sign up for free
              </Button>
            </div>
          </div>
          <div className={style.individual_box1_b}>
            <img src={individual_1} alt="image_1" />
          </div>
        </div>

        {/* 2nd box */}

        <div className={style.individual_box2}>
          <div className={style.individual_box2_b}>
            <img src={individual_2} alt="image_2" />
          </div>
          <div className={style.individual_box2_a}>
            <div>
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: "500",
                  color: "#006bff",
                }}
              >
                THE CALENDLY BOOKING LINK
              </p>
            </div>
            <div>
              <p
                style={{
                  fontSize: "25px",
                  fontWeight: "bold",
                }}
              >
                Save time with your own personalized booking links
              </p>
            </div>
            <div>
              <p style={{ fontSize: "16px", color: "##6e797e" }}>
                Time is a precious commodity. Calendly is the courteous <br />
                way to book meetings and other appointments, because <br />
                scheduling with just a few clicks makes the most of <br />
                everyone’s time.
              </p>
            </div>

            <div>
              <Button colorScheme="messenger" size="lg">
                Get Your Link
              </Button>
            </div>
          </div>
        </div>

        {/* 3rd  box */}

        <div className={style.individual_box3}>
          <div className={style.individual_box3_a}>
            <div>
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: "500",
                  color: "#006bff",
                }}
              >
                A CURATED CALENDAR
              </p>
            </div>
            <div>
              <p
                style={{
                  fontSize: "25px",
                  fontWeight: "bold",
                }}
              >
                Book up efficiently
              </p>
            </div>
            <div>
              <p style={{ fontSize: "16px", color: "##6e797e" }}>
                When invitees select a meeting slot from your schedule,
                <br />
                they onlysee the times you’re available, and only the <br />
                length and type of meeting you want to have. Your <br />
                schedule fills up efficiently, and everyone avoids excess <br />
                email exchanges.
              </p>
            </div>

            <div>
              <p style={{ color: "#006bff", fontWeight: "500" }}>
                Learn more {">"}
              </p>
            </div>
          </div>
          <div className={style.individual_box3_b}>
            <img src={individual_3} alt="image_3" />
          </div>
        </div>

        {/* 4th  box */}
        <div className={style.individual_box2}>
          <div className={style.individual_box2_b}>
            <img src={individual_4} alt="image_4" />
          </div>
          <div className={style.individual_box2_a}>
            <div>
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: "500",
                  color: "#006bff",
                }}
              >
                AUTOMATED NOTIFICATIONS & FOLLOW-UPS
              </p>
            </div>
            <div>
              <p
                style={{
                  fontSize: "25px",
                  fontWeight: "bold",
                }}
              >
                Work like you have a personal assistant
              </p>
            </div>
            <div>
              <p style={{ fontSize: "16px", color: "##6e797e" }}>
                Because Calendly automates administrative tasks like <br />
                sending reminder emails and follow-ups, you can focus on <br />
                the work that builds your business and brings customers <br />
                back for more.
              </p>
            </div>

            <div>
              <p style={{ color: "#006bff", fontWeight: "500" }}>
                Learn more {">"}
              </p>
            </div>
          </div>
        </div>

        {/* 5th  box */}
        <div className={style.individual_box3}>
          <div className={style.individual_box3_a}>
            <div>
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: "500",
                  color: "#006bff",
                }}
              >
                COLLECT PAYMENTS
              </p>
            </div>
            <div>
              <p
                style={{
                  fontSize: "25px",
                  fontWeight: "bold",
                }}
              >
                Erase billing hassles
              </p>
            </div>
            <div>
              <p style={{ fontSize: "16px", color: "##6e797e" }}>
                Stripe and PayPal integrations enable your clients to
                <br />
                submit payment as soon as they schedule a meeting. You <br />
                get paid on time, every time, without dealing with bills or
                <br />
                invoices.
              </p>
            </div>

            <div>
              <p style={{ color: "#006bff", fontWeight: "500" }}>
                Learn more {">"}
              </p>
            </div>
          </div>
          <div className={style.individual_box3_b}>
            <img src={individual_5} alt="image_5" />
          </div>
        </div>

        {/*6th  box */}

        <div className={style.individual_box2}>
          <div className={style.individual_box2_b}>
            <img src={individual_6} alt="image_6" />
          </div>
          <div className={style.individual_box2_a}>
            <div>
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: "500",
                  color: "#006bff",
                }}
              >
                SCHEDULING AT SCALE
              </p>
            </div>
            <div>
              <p
                style={{
                  fontSize: "25px",
                  fontWeight: "bold",
                }}
              >
                Retain more clients
              </p>
            </div>
            <div>
              <p style={{ fontSize: "16px", color: "##6e797e" }}>
                Happy clients are long-term clients. With Calendly, <br />
                prospects can schedule with you instantly so no one slips <br />
                through the cracks, and everything about your interaction <br />
                is personal, professional, and respectful of their time.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 1st issue Top section  end*/}

      {/* 2st issue Integration  start*/}

      <div className={style.individual_main2}>
        <div className={style.individual_main2_box}>
        <div>
              <p
                style={{
                  fontSize: "40px",
                  fontWeight: "1000",
                }}
              >
                Do more with our integrations
              </p>
            </div>
            <div>
              <p style={{ fontSize: "18px", color: "#67829d" }}>
              Smart scheduling will change the way you – and your tools – work
              </p>
            </div>
            <div>
              <Button colorScheme="messenger" size="lg" marginRight="20px" >
               View all
              </Button>
              
              <Button colorScheme="messenger" variant='outline' size="lg" border="2px solid" fontSize="22px">
                Start for free
              </Button>
            </div>
        </div>
      </div>

      {/* 2st issue Integration  end*/}

      
      {/* 3rd issue how works start*/}

      <div className={style.individual_main3}>
        <div className={style.individual_main3_box}>
        <div>
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: "500",
                  color: "#006bff",
                }}
              >
                HOW IT WORKS
              </p>
            </div>
        <div>
              <p
                style={{
                  fontSize: "36px",
                  fontWeight: "bold",
                }}
              >
                See Calendly in action

              </p>
            </div>
            <div>
              <p style={{ fontSize: "22px", color: "#67829d" }}>
              With scheduling hassles and interruptions gone, your day is cleared for <br/>
              accomplishment.
              </p>
            </div>
            <div>
              <img src={individual_video} alt="individual_video" style={{borderRadius:"8px", marginTop:"30px"}} />
            </div>
          
        </div>
      </div>

      {/* 3rd issue how works  end*/}
        

         {/* 4th issue features start*/}

         <div className={style.individual_main4}>
        <div className={style.individual_main4_box}>
        <div>
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: "500",
                  color: "#006bff",
                }}
              >
                FEATURES
              </p>
            </div>
        <div>
              <p
                style={{
                  fontSize: "36px",
                  fontWeight: "bold",
                }}
              >
               Favorite features and capabilities
          </p>

          <div className={style.individual_main4_box_last}>
           
           <div className={style.individual_main4_box_last1}>
            <img  src={features_1} alt="features_1" width="90%"/>
           </div>
           <div className={style.individual_main4_box_last2}></div>
           <div className={style.individual_main4_box_last3}>
            <div><p>Workflows</p></div>
            <div><p>Website embed</p></div>
            <div><p>Customized branding</p></div>
           </div>

          </div>
            </div>
            
        </div>
      </div>
          {/* 4th issue features start*/}

       {/* 5th issue plans start*/}

       <div className={style.individual_main5}>
        <img src={individual_plans} alt="individual_plans" width="100%" />
        
      </div>

      {/* 5th issue plans  end*/}

       {/* 6h issue solution  start*/}
       <div className={style.individual_main6}>
        <div className={style.individual_main6_box}>
        <div>
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: "500",
                  color: "#006bff",
                }}
              >
                SOLUTIONS
              </p>
            </div>
        <div>
              <p
                style={{
                  fontSize: "36px",
                  fontWeight: "bold",
                }}
              >
               The right Calendly for the work you do
          </p>

          <div className={style.individual_main6_box_last}>
            {
              solutionBox.map((item) =>(
                <div className={style.individual_main6_box_last_div}>
                  <div>
                    <img src={item.imageUrl} alt={item.imageAlt} width="100%"/>
                  </div>
                 
                 <div >
                    <p style={{fontWeight:"bold", marginLeft:"20px"}}>{item.title}</p>
                  </div>
                  <div style={{width:"90%"}}>
                 <p style={{ marginLeft:"20px", color: "#67829d"}}> {item.description}</p>
                  </div>
                  <div>
                    <p style={{fontWeight:"bold", marginLeft:"20px", color:"#006bff"}}>Learn more {">"}</p>
                  </div>
                 </div>
                
              ))
            }

          </div>
            </div>
            
           
      
        </div>
      </div>

        {/* 6h issue solution  end*/}

            {/* 7th issue calendly free  start*/}

            <div className={style.individual_main7}>
        <div className={style.individual_main7_box}>
        <div>
              <p
                style={{
                  fontSize: "42px",
                  fontWeight: "1000",
                }}
              >
                Try Calendly free
              </p>
            </div>
            <div>
              <p style={{ fontSize: "18px", color: "#67829d" }}>
              After your 14-day trial of our Teams plan, enjoy the Free version of Calendly – <br/>
               forever.
              </p>
            </div>
            <div>
              <Button colorScheme="messenger" size="lg" marginRight="20px" fontSize="16px">
              Start for free
              </Button>

              <p style={{ fontSize: "18px", color: "#67829d", marginTop:"20px" }}>
              To inquire about our Enterprise plans, click <span style={{fontWeight:"bold", color: "#006bff"}}>here.</span>

              </p>
            </div>
        </div>
      </div>

      {/* 7th issue calendly free end*/}
    </div>
  );
};
