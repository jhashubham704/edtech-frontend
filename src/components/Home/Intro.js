import React from "react";
import './Intro.css' ; 

export default function Intro(){ 

    return(
    
        <div className='container'> 
          <div className="div-cont">
              <p className='heading-block'>
               <h3 className='heading'>About Us </h3> 
                </p>
              <p className='content'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
          </div>
          <div className="div-img">
              <img src="https://picsum.photos/seed/picsum/200/300" alt="hero-image" />
          </div>
          </div>

    )

}