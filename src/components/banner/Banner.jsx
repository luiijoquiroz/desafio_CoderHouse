import { Header } from '../index';
import { MainMenu } from '../index';
import { useState } from 'react'
import video from "../../assets/videos/BJJ.mp4";
import "./Banner.css";
import { useEffect } from 'react';

const Banner = ({ defaultBanner =  'banner'}) => {
  const [state, setState] = useState('')
  const [bannerState, setBannerState] = useState(defaultBanner)

  useEffect(() => {
    setBannerState(defaultBanner)
    if (state === 'active') {
      setBannerState(`${defaultBanner} ${state}`)
    } 
  }, [state, defaultBanner])

  console.log(`[BannerState]: ${bannerState}`)
  return (
    <>
      <MainMenu state={state} />
      <section className={bannerState}>
        <Header setState={setState} />
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
