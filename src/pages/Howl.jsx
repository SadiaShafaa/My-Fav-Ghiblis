// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef} from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Howl = () => {
  const Href = useRef()
  const tline= useRef()
  const howlsophieref = useRef()
  const cloudUref = useRef()
  const cloudBref = useRef()
  const bgref = useRef()
  const sophietextref = useRef()
  const howltextref = useRef()
  const handleClick = () => {
    window.location.href = 'https://www.netflix.com/it-en/title/70028883'; // Replace with your desired URL
  };

  useEffect(() => {
    tline.current = gsap.timeline({
      scrollTrigger: {
        trigger: Href.current, // Use the ref instead of class name
        pin: true,
        start: 'top 10%',
        end:'+=',
        scrub: 4,
      },
    });

    tline.current.fromTo(bgref.current,
      {
        borderRadius: '2%', 
        duration: 2, 
      },
      {
        borderRadius: '50%',
        duration: 2, 
        ease: 'power1.inOut',
        scrub: 1.5
      })

   tline.current.fromTo(howlsophieref.current,
      {
        opacity: 0, // Optional: start hidden
      },
      {
        opacity: 1, // Optional: make it visible
        duration: 3,
        ease: "power1.in",
        scrub: 2,

      })

   tline.current.fromTo(cloudBref.current,
      {
        yPercent: 40, // Start off-screen at the bottom
        opacity: 0, // Optional: start hidden
      },
      {
        yPercent: -2, // Move to its final position
        opacity: 1, // Optional: make it visible
        duration: 1.5,
        ease: "slow(0.7,0.7,false)",
        scrub: 1

      })

      tline.current.fromTo(sophietextref.current,
        {
        x:-340,
        opacity:0,

      },{
        x:-320,
        opacity:1,
        ease: 'power1.inOut',
        duration: 4,
        ease: "power1.out",
        scrub: 1.5
      })
      tline.current.fromTo(howltextref.current,
        {
        x:340,
        opacity:0,

      },{
        x:320,
        opacity:1,
        ease: 'power1.inOut',
        duration: 4,
        ease: "power1.out",
        scrub: 1.5
      })

    const element = Href.current;
    const floatAnimation = gsap.timeline({ paused: true, repeat: -1, yoyo: true });

    floatAnimation.to([cloudBref.current,cloudUref.current], {
      y: '-=10',  
      duration: 1,
      ease: 'power1.inOut',
    }).to([cloudBref.current,cloudUref.current], {
      y: '+=10',  
      duration: 1,
      ease: 'power1.inOut',
    });


    element.addEventListener("mouseenter", () => floatAnimation.play());
    element.addEventListener("mouseleave", () => floatAnimation.pause());

    return () => {
      element.removeEventListener("mouseenter", () => floatAnimation.play());
      element.removeEventListener("mouseleave", () => floatAnimation.pause());
    };

  }, []);

  return (
    <section className='howlS h-screen p-0 m-0' ref={Href}>
      <div className="relative h-screen flex justify-center items-center">
      <img ref={cloudUref}
       src="/cloud2.png"
       className='absolute -translate-y-2/4 w-fit' 
       />
       <img ref={bgref}
       src="/bg.png"
       className='translate-y-20 w-fit border-l-8 border-r-8' 
       />
       <img ref={howlsophieref}
        src="/sophiehowl.png"
        className="absolute h-auto w-auto translate-y-8 2xl:-translate-y-1"
       />
       
       <img ref={cloudBref}
       src="/cloud3.png"
       className='absolute flex w-full translate-y-20  2xl:h-fit 2xl:-translate-y-1/3' 
       />
       <div className='absolute bottom-0 left-0 right-0 flex justify-center -translate-y-48 2xl:-translate-y-36'>
           <button
           onClick={handleClick}
           className='py-5 px-5 bg-blue-500 
           rounded-full text-white animate-pulse translate-y-44
           hover:animate-none hover:border-white hover:border-2 hover:bg-blue-700'
           >
            Watch Now
          </button>
          </div>

       <div ref={sophietextref}
       className='absolute flex items-centers justify-center
       h-12 w-auto bg-slate-100 rounded-2xl p-3 -translate-y-20'>
        <span>...Did you use your magic to make this? </span>
       </div>
       <div ref={howltextref}
       className='absolute flex items-centers justify-center
        h-12 w-auto bg-slate-100 rounded-2xl p-3 translate-y-14'>
        <span className='font-serif '>...Only a little, just to help the flowers grow. </span>
       </div>

      </div>

    </section>
  )
}
export default Howl