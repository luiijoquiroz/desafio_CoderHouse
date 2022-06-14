
import { useState, useEffect } from 'react'
import video from "../../assets/videos/BJJ.mp4";
import "./Banner.css";

const Banner = ({ state }) => {
  const [bannerState, setBannerState] = useState('banner')

    useEffect(() => {
     
      if (state === 'active') {
        setBannerState(`banner ${state}`)
      } else {
        setBannerState(`banner`)
      }
      
    }, [state])
  
  console.log(`[Banner] props:  ${JSON.stringify(bannerState, null, 2)}`)
  
  return (
    <>
      <section className={bannerState}>
        <video className='video' src={video} type='video/mp4' muted loop autoPlay ></video>
        <div className='overlay'></div>
        <div className='text'>
          <h2>Be Stronger</h2>
          <h2>Never give up</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit doloribus cumque dolorem, fugiat illum delectus? Explicabo corrupti minima repellat unde vel. Eum facere commodi rerum, eveniet amet error est magni.</p>
          <a href="/">Join us</a>
        </div>
      </section>
    </>
  );
}

export { Banner };
