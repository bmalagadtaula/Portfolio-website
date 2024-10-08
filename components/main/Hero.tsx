import React from 'react';
import HeroContent from '../sub/HeroContent';


const Hero = () => {
  return (
    <div className='flex flex-col h-full w-full'>
      <video
        autoPlay
        muted
        loop
        className='rotate-180 absolute top-[-340px] left-0 z-[1] w-full h-full object-cover'
      >
        {/* Adding the source of the video using curly braces */}
        <source src='/blackhole.webm' type='video/webm' />
      </video>
      <HeroContent/>
    </div>
    
  );
};

export default Hero;
