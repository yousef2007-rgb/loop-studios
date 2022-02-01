import React,{useState} from 'react';
import '../Styles/Creations.css'
import deepEarth from '../images/mobile/image-deep-earth.jpg'
import nightArcade from '../images/mobile/image-night-arcade.jpg'
import soccerTeam from '../images/mobile/image-soccer-team.jpg'
import grid from '../images/mobile/image-grid.jpg'
import fromAbove from '../images/mobile/image-from-above.jpg'
import pocketBorealis from '../images/mobile/image-pocket-borealis.jpg'
import curiosity from '../images/mobile/image-curiosity.jpg'
import fisheye from '../images/mobile/image-fisheye.jpg'
export default function Creations() {
    const [device, setDevice] = useState("desktop")
    window.onload = ()=>{
        if(window.innerWidth>500){
            setDevice("desktop");
            console.log(device);
        }else{
            setDevice("mobile");
            console.log(device);
        }
    }
    window.onresize = ()=>{
        if(window.innerWidth>500){
            setDevice("desktop");
            console.log(device);
        }else{
            setDevice("mobile");
            console.log(device);
        }
    }
  return <div className='CreationsContainer'>
      <h1>our creations</h1>
      <div className='creationsImages'>
          <div className='half'>
        <div className='imageCard'>
            <img src={require("../images/"+device+"/image-deep-earth.jpg")} />
            <div className='cardName'>
                <h2>deep</h2>
                <h2>earth</h2>
            </div>
        </div>
        <div className='imageCard'>
            <img src={require("../images/"+device+"/image-night-arcade.jpg")} />
            <div className='cardName'>
                <h2>night</h2>
                <h2>arcade</h2>
            </div>
        </div>
        <div className='imageCard'>
            <img src={require("../images/"+device+"/image-soccer-team.jpg")} />
            <div className='cardName'>
                <h2>soccer</h2>
                <h2>team</h2>
            </div>
        </div>
        <div className='imageCard'>
            <img src={require("../images/"+device+"/image-grid.jpg")} />
            <div className='cardName'>
                <h2>the</h2>
                <h2>grid</h2>
            </div>
        </div>
        </div>
        <div className='half'>
        <div className='imageCard'>
            <img src={require("../images/"+device+"/image-from-above.jpg")} />
            <div className='cardName'>
                <h2>from up</h2>
                <h2>above vr</h2>
            </div>
        </div>
        <div className='imageCard'>
            <img src={require("../images/"+device+"/image-pocket-borealis.jpg")} />
            <div className='cardName'>
                <h2>pocket</h2>
                <h2>borealis</h2>
            </div>
        </div>
      <div className='imageCard'>
            <img src={require("../images/"+device+"/image-curiosity.jpg")} />
            <div className='cardName'>
                <h2>the</h2>
                <h2>curiosity</h2>
            </div>
        </div>
        <div className='imageCard'>
            <img src={require("../images/"+device+"/image-fisheye.jpg")} />
            <div className='cardName'>
                <h2>make it</h2>
                <h2>fisheye</h2>
            </div>
            </div>
            </div>
        </div>
        <a href='#' className='seeAllBtn'>see all</a>
  </div>;
}
