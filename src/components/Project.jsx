import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Card from "./Card";
import CartTwo from "./CartTwo";

gsap.registerPlugin(ScrollTrigger);

const Project = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateY: 0,
      },
      {
        translateY: "-100vh",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
        },
      }
    );

    return () => {
      pin.kill();
    };
  }, []);

  return (
    <section className="scroll-section-outer">
      <div ref={triggerRef} className="bg-black">
      <CartTwo/>
     
        <div ref={sectionRef} className="scroll-section-inner bg-zinc-800">
        <Card/>
        </div>
      </div>
    </section>
  );
};

export default Project;
