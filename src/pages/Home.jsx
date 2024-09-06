import React, { useEffect, useRef} from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);

const Home = () => {
   const vid1ref = useRef()
   const vid2ref = useRef()
   const vid3ref = useRef()
   const tline= useRef()
   const textref =useRef()
   const text1ref= useRef()
   const text2ref= useRef()
   const text3ref= useRef()
   const Mref= useRef()
   const Vref= useRef()
   const Rref= useRef()
   const Gref= useRef()
   const Lref= useRef()
   const Fref= useRef()

  useEffect(()=>{
  tline.current = gsap.timeline()

  gsap.to(textref.current,{
    y: '120%',
    scrollTrigger: {
    trigger: textref.current,
    pin: false,
    start: 'top top',
    end:'bottom top',
    scrub: 1,
  }}),

  tline.current.fromTo([vid1ref.current, vid3ref.current],
    { y: '-50%' },
    { y: '0%', duration: 2, ease: 'bounce.out' }
    )
    tline.current.fromTo(vid2ref.current,
      { y: '50%' },
      { y: '0%', duration: 2, ease: 'bounce.out' },
      0
      )
    
      tline.current.fromTo([text1ref.current,text2ref.current, text3ref.current],
        { x: '-50%' },
        { x: '0%',
          duration: 2,
          ease: 'back.inOut',
          onComplete: ()=>{
                    
            const subsequenttline = gsap.timeline();

            // Add animations to the new timeline
            subsequenttline
              .fromTo(Mref.current,
                {
                  rotationX: 90,
                },
                {
                  rotationX: 0,
                  duration: 0.5,
                },0
              )
              subsequenttline.fromTo(Vref.current,
                {
                  rotationY: 95,
                },
                {
                  rotationY: 0,
                  duration: 0.5,
                },0
              )
              subsequenttline.fromTo(Rref.current,
                {
                  x: '-10%',
                },
                {
                  x: '0%',
                  duration: 0.5,
                },0.5
              )
              subsequenttline.fromTo(Fref.current,
                {
                  x: '-10%',
                },
                {
                  x: '0%',
                  duration: 0.5,
                },0.7
              )
              subsequenttline.fromTo(Gref.current,
                {
                  y: '10%',
                },
                {
                  y: '0%',
                  duration: 0.5,
                },0.5
              )
              subsequenttline.fromTo(Lref.current,
                {
                  x: 40,
                },
                {
                  x: 0,
                  duration: 0.5,
                },0
              );
          },

        },0)
        

      // letter.addEventListener('mouseenter', () => tline.play());
      // letter.addEventListener('mouseleave', () => tline.reverse());
    
 

}, [])

  return (
<section className='homeS relative h-screen w-screen overflow-hidden p-0 m-0'>
      <div className="flex flex-row justify-between content-center relative h-full w-full">
        <video
        ref={vid1ref}
          className="h-full w-1/3 object-cover border-r-[3px]"
          src="./Spirited Away.mp4" 
          autoPlay
          loop
          muted
          playsInline
        />
        <video
        ref={vid2ref}
          className="h-full w-1/3 object-cover border-l-[3px] border-r-[3px]"
          src="./totoro.mp4" 
          autoPlay
          loop
          muted
          playsInline
        />
        <video
        ref={vid3ref}
          className="h-full w-1/3 object-cover border-l-[3px]"
          src="./MovingCastle.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
       <div
       className='absolute top-2/3 left-1/3 transform -translate-x-1/2 -translate-y-1/2 w-fit h-fit justify-center items-start'
       >
        <div className=' flex flex-col' ref={textref}>
        <span ref={text1ref}>
          <div ref={Mref}
           className='text-9xl font-bold font-sans inline-block text-white'>M</div>
          <div className='text-9xl font-bold font-sans inline-block text-white'>Y</div>
        </span>  

        <span ref={text2ref}>   
          <div ref={Fref}
          className='text-9xl font-bold font-sans inline-block text-white'>F</div>
          <div className='text-9xl font-bold font-sans inline-block text-white'>A</div>
          <div ref={Vref}
          className='text-9xl font-bold font-sans inline-block text-white'>V</div>
          <div className='text-9xl font-bold font-sans inline-block text-white'>O</div>
          <div className='text-9xl font-bold font-sans inline-block text-white'>U</div>
          <div ref={Rref}
          className='text-9xl font-bold font-sans inline-block text-white'>R</div>
          <div className='text-9xl font-bold font-sans inline-block text-white'>I</div>
          <div className='text-9xl font-bold font-sans inline-block text-white'>T</div>
          <div className='text-9xl font-bold font-sans inline-block text-white'>E</div>
        </span> 

        <span ref={text3ref}>
        <div ref={Gref}
        className='text-9xl font-bold font-sans inline-block text-white'>G</div>
        <div className='text-9xl font-bold font-sans inline-block text-white'>H</div>
        <div className='text-9xl font-bold font-sans inline-block text-white'>I</div>
        <div className='text-9xl font-bold font-sans inline-block text-white'>B</div>
        <div ref={Lref}
        className='text-9xl font-bold font-sans inline-block text-white'>L</div>
        <div className='text-9xl font-bold font-sans inline-block text-white'>I</div>
        <div className='text-9xl font-bold font-sans inline-block text-white'>S</div>
        </span>
        </div>
        </div> 
    </section>
  )
}
export default Home