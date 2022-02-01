import React from 'react';
import interactiveImage from '../images/desktop/image-interactive.jpg'
import '../Styles/Interactive.css'
export default function Interactive() {
    
  return <div className='InteractiveContainer'>
    <div className='interactiveImage'>
        <img src={interactiveImage} />
    </div>
    <div className='interactiveArticle'>
        <h1>the leader in interactive vs</h1>
        <p>  Founded in 2011, Loopstudios has been producing world-class virtual reality 
  projects for some of the best companies around the globe. Our award-winning 
  creations have transformed businesses through digital experiences that bind 
  to their brand.</p>
    </div>
  </div>;
}
