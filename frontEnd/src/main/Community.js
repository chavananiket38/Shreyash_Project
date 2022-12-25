import React from "react";
import Header from "./Header";
import './com.css'

const Community = () => {
    return(
        <div >
            <Header/>
            <h3 className="header"> Welcome to Community Page</h3>
            <div className="main">


            <div className="cardNew" >

            <div className="image">
            <img src="https://www.seniorlink.com/hubfs/iStock-941420538.jpg" />
            </div>
            <div className="title">
            <h1>Brain Games</h1>
            </div>
            <div className="des">
            <p>Sudoku, Crosswords & Wordle </p>
            
            <a href="https://chat.whatsapp.com/LRHnPZm3k50Kl9GFKhDa3D"><button>Join - Whatsapp</button><br/></a>
            <a href="https://t.me/careforgoodbraingames"><button>Join - Telegram</button><br/></a>
                
            </div>
            </div>



            <div className="cardNew">

            <div className="image">
            <img src="https://i0.wp.com/racinecountyeye.com/wp-content/uploads/2017/09/zumba2-e1504710787278.jpg" />
            </div>
            <div className="title">
            <h1>Wellness</h1>
            </div>
            <div className="des">
            <p>Zumba, Yoga & many more</p>
                
            <a href="https://chat.whatsapp.com/L5caa5TiNW31WiThgIyPYo"><button>Join - Whatsapp</button><br/></a>
            <a href="https://t.me/+CPrJNmTMJ2Q0MzY9"><button>Join - Telegram</button><br/></a>
            </div>
            </div>
            
            <div className="cardNew">

                <div className="image">
                <img src="https://cf.ltkcdn.net/seniors/images/orig/272176-1600x1066-activities-recreation-ideas-seniors.jpg" />
                </div>
                <div className="title">
                <h1>Entertainment</h1>
                </div>
                <div className="des">
                <p>Music, dance & fun</p>
                <a href="https://chat.whatsapp.com/LEkZQQh7gnvGwTiHneLNrT"><button>Join - Whatsapp</button><br/></a>
                <a href="https://t.me/careforgoodentertainment"><button>Join - Telegram</button><br/></a>
                </div>
                </div>
                
            </div>
        </div>
    )
}

export default Community;