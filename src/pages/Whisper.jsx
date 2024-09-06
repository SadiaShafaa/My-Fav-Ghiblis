import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

gsap.registerPlugin(MotionPathPlugin);
gsap.registerPlugin(ScrollTrigger);

const Whisper = () => {
  const textref = useRef()
  const tline= useRef()
  const Wref = useRef()
  const wisperref = useRef()
  const cityref = useRef()

  const handleClick = () => {
    window.location.href = 'https://www.netflix.com/it-en/title/70045021'; // Replace with your desired URL
  };

 useEffect(()=>{
  if (!wisperref.current || !textref.current || !cityref.current) return;

  tline.current = gsap.timeline({
    scrollTrigger: {
      trigger: Wref.current, // Use the ref instead of class name
      pin: true,
      start: 'top 30%',
      end: '+=',
      scrub: 3,
    },
  });
  tline.current.fromTo(wisperref.current,
    {
      borderRadius: '2%', 
    },
    {
      borderRadius: '30%',
      opacity: 1, 
      duration: 0.5, 
      ease: 'power1.inOut',

    })
  tline.current.fromTo(cityref.current,
    {
      borderRadius: '2%', 
      duration: 2,
      opacity: 0, 
      ease: 'power1.inOut',
    },
    {
      borderRadius: '50%',
      opacity: 1, 
      duration: 2, 
      ease: 'power1.inOut',
    })

    tline.current.fromTo(textref.current,
     { opacity: 0,
       y: 100
      },
     { 
      opacity: 1,
       y: 0,
        })

  },[])

  

  return (
    <section className='wisperS p-0 m-0 h-dvh' ref={Wref}>
      <div className='relative flex justify-center content-center h-full'>
        <img ref={cityref}
        src="/city.png"
        className='absolute  border-l-8 border-r-8'/>

        <img ref={wisperref}
        src="/wisper.png"
        className='absolute translate-y-48'/>
        <div className='absolute bottom-0 left-0 right-0 flex justify-center -translate-y-36'>
           <button
           onClick={handleClick}
           className='py-5 px-5 bg-blue-500 
           rounded-full text-white animate-pulse
           hover:animate-none hover:border-white hover:border-2 hover:bg-blue-700'
           >
            Watch Now
          </button>
          </div>
      </div>
      <div 
        className="flex absolute top-0 left-0 right-0 justify-center content-center"
      >
        <span ref={textref} className='text-8xl font-serif text-white'>
          Whisper Of The Hearts
          </span>
      </div>
    </section>
  )
}

export default Whisper