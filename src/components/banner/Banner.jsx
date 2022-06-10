import { Header } from '../index';
import { MainMenu } from '../index';
import { useState } from 'react'
import video from "../../assets/videos/BJJ.mp4";
import "./Banner.scss";


const itemsMenu = [
  {
    text: "Home",
    url: "/",
  },
  {
    text: "Disciplinas",
    url: "/disciplinas",
  },
  {
    text: "Nosotros",
    url: "/nosotros",
  },
  {
    text: "Servicios",
    url: "/servicios",
  }
];

const Banner = () => {
  const [bannerState, setBannerState] = useState('banner')
  
  return (
    <>
      <MainMenu itemsMenu={itemsMenu} />
      <section className={bannerState}>
        <Header setBannerState={setBannerState} />
        <video className='video' src={video} type='video/mp4' muted loop autoPlay ></video>
        <div className='overlay'></div>
        <div className='text'>
          <h2>Be Stronger</h2>
          <h2>Never give up</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit doloribus cumque dolorem, fugiat illum delectus? Explicabo corrupti minima repellat unde vel. Eum facere commodi rerum, eveniet amet error est magni.</p>
          <a href="#">Join us</a>
        </div>
      </section>
    </>
  );
}

export { Banner };
