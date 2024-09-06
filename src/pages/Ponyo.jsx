import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Ponyo = () => {

  const ponyoRef = useRef();
  const tline= useRef()
  const audioRef= useRef()
  const textref = useRef()


  const handleClick = () => {
    window.location.href = 'https://www.netflix.com/watch/70106454'; // Replace with your desired URL
  };

  useEffect(() => {
  
    tline.current = gsap.timeline()

    gsap.to(textref.current, {
      x: '-10%', 
      scrollTrigger: {
        trigger: textref.current,
        pin: false,
        start: 'top 90%', 
        end: 'bottom top', 
        scrub: 1,
      },
    });

    gsap.to(ponyoRef.current,{
      x: '10%',
      scrollTrigger: {
      trigger: ponyoRef.current,
      pin: false,
      start: 'top 90%',
      end:'bottom top',
      scrub: 1,
    }
  }) 
    const floatAnimation = gsap.timeline({ paused: true, repeat: -1, yoyo: true });

    floatAnimation.to(ponyoRef.current, {
      y: '-=30', 
      borderRadius: '0%', 
      duration: 1.5,
      ease: 'power1.inOut',
    }).to( ponyoRef.current, {
      y: '+=30',  
      borderRadius: '100%',
      borderRightWidth: '10px',
      borderColor: 'white',
      duration: 1.5,
      ease: 'power1.inOut',
    });

    ponyoRef.current.addEventListener("mouseenter", () => {
      floatAnimation.play()
      audioRef.current.play();
    });
    ponyoRef.current.addEventListener("mouseleave", () => {
      floatAnimation.pause()
      audioRef.current.pause()
      audioRef.current.currentTime = 0
    });

    return () => {
      ponyoRef.current.removeEventListener("mouseenter", () =>{ 
        floatAnimation.play()
        audioRef.current.play();
      });
      ponyoRef.current.removeEventListener("mouseleave", () =>{ 
        floatAnimation.pause()
        audioRef.current.pause()
        audioRef.current.currentTime = 0
      });
    };
  }, []);

  return (
    <section className='wisperS flex flex-row justify-center content-center items-center p-0 m-0 h-dvh' >

    <div ref={textref}
    className="w-1/2 pl-20 flex flex-col justify-center content-center items-center">
    <h1 className="text-white text-8xl font-serif">
      Ponyo
    </h1> 
    <div className='h-5'></div>
    <div className='font-seri text-2xl text-white'>
    "Her name is Ponyo. She likes to eat ham. And she can do magic! <span className="block"></span>
    I got a cut on my thumb, and it went away because she licked it."<span className="block"></span>
    "Oh! Maybe she could use some of her magic to fix my hips and back."<span className="block"></span>
    "I'd let a fish lick me if it'd get me out of this wheelchair."
    </div>
    <div className='h-5'></div>
    <div className='pb-10 font-serif text-xl text-white'>— Sōsuke showing Ponyo to Yoshie and Kayo</div>
    
   <button
   onClick={handleClick}
   className='py-5 px-5 bg-blue-500 
   rounded-full text-white animate-pulse
   hover:animate-none hover:border-white hover:border-2 hover:bg-blue-700'
   >
    Watch Now
   </button>

    </div>

      <div className="w-1/2 h-screen flex justify-center items-center">
      <img 
      ref={ponyoRef}
        src="/ponyo.png"
       className='absolute border-white'/>
       <audio src="/wind.mp3" ref={audioRef} />
      </div>
    </section>
  )
}

export default Ponyo