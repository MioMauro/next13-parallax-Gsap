import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';

import ScrollTrigger from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const scroller = useRef();
  const skills = useRef();

  useEffect(() => {
    let skillSet = gsap.utils.toArray('.skill-set');

    let to = gsap.to(skillSet, {
      xPercent: () => -100 * (skillSet.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: scroller.current,
        markers: false,
        pin: true,
        pinSpacing: true,
        scrub: 1,
        invalidateOnRefresh: true,
        anticipatePin: 1,
        snap: 1 / (skillSet.length - 1),

        end: () => '+=' + window.innerWidth,
      },
    });

    return () => {
      to.kill();
    };
  }, []);

  return (
    <div className="overflow-hidden flex">
      <div className='overflow-hidden'>
        <div
          id="skills"
          ref={scroller}
          className=" flex overflow-x-hidden w-screen m-0 bg-gray-900  relative h-screen">

          <section
            ref={skills}
            className="skill-set w-screen h-screen bg-transparent ns-horizontal-section__item flex items-center z-50">
            <div className="w-screen">
            <Image className=""
              src="https://images.pexels.com/photos/1005711/pexels-photo-1005711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="image4"
              quality={100}
              sizes={"100vw"}
              fill
              style={{objectFit: "cover",}}              
            />
            </div>
          </section>

          <section
            ref={skills}
            className="skill-set w-screen h-screen bg-transparent ns-horizontal-section__item flex items-center z-50">
            <div className="w-screen">
            <Image className=""
              src="https://images.pexels.com/photos/1272838/pexels-photo-1272838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="image4"
              quality={100}
              sizes={"100vw"}
              fill
              style={{objectFit: "cover",}}              
            />
            </div>
          </section>

          <section
            ref={skills}
            className="skill-set w-screen h-screen bg-transparent ns-horizontal-section__item flex items-center z-50">
            <div className="w-screen">
            <Image className=""
              src="https://images.pexels.com/photos/1151300/pexels-photo-1151300.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="image4"
              quality={100}
              sizes={"100vw"}
              fill
              style={{objectFit: "cover",}}              
            />
            </div>
          </section>

          <section
            ref={skills}
            className="skill-set w-screen h-screen bg-transparent ns-horizontal-section__item flex items-center z-50">
            <div className="w-screen">
            <Image className=""
              src="https://images.pexels.com/photos/1227511/pexels-photo-1227511.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="image4"
              quality={100}
              sizes={"100vw"}
              fill
              style={{objectFit: "cover",}}              
            />
            </div>
          </section>

        </div>
        </div>
    </div>
  );
}

export default App;