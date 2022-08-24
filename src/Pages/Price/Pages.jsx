
import "./Pages.css";

export const Price=()=>{
    return(
        <>
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
            <div className="bottom"><button>GET STARTED</button></div>
            </div>

            <div className="professional">
                
            </div>
            <div className="teams"></div>
            <div className="enterprise"></div>
        </div>
        </>
    )
}