import { useRef } from "react";
import AnimatedTitle from "./AnimatedTitle";
import gsap from "gsap";
import RoundedCorners from "./RoundedCorners";
import Button from "./Button";

function Story() {
  const frameRef = useRef("null");

  function handleMouseMove(e) {
    const { clientX, clientY } = e;
    const element = frameRef.current;

    if (!element) return;

    const rect = element.getBoundingClientRect();
    const offsetX = clientX - rect.left;
    const offsetY = clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((offsetY - centerY) / centerY) * -7;
    const rotateY = ((offsetX - centerX) / centerX) * 7;

    gsap.to(element, {
      duration: 0.3,
      rotateX,
      rotateY,
      transformPerspective: 500,
      ease: "power1.inOut",
    });
  }

  function handleMouseLeave() {
    const element = frameRef.current;

    if (element) {
      gsap.to(element, {
        duration: 0.3,
        rotateX: 0,
        rotateY: 0,
        ease: "power1.inOut",
      });
    }
  }

  return (
    <section id="story" className="min-h-dvh w-screen bg-black text-green-50">
      <div className="flex size-full flex-col items-center py-10 pb-24">
        <p className="font-general text-sm uppercase md:text-lg">the mutiversal ip world</p>

        <div className="relative size-full">
          <AnimatedTitle title="The story of <br/> a hidden realm" sectionId="#story" containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10 " />

          <div className="story-img-container">
            <div className="story-img-mask">
              <div className="story-img-content">
                <img ref={frameRef} src="/img/entrance.webp" alt="entrance" className="object-contain" onMouseLeave={handleMouseLeave} onMouseUp={handleMouseLeave} onMouseEnter={handleMouseLeave} onMouseMove={handleMouseMove} />
              </div>
            </div>

            <RoundedCorners />
          </div>
        </div>

        <div className="-mt-80 flex w-full justify-center md:me-44 md:-mt-64 md:justify-end">
          <div className="flex h-full w-fit flex-col items-center md:items-start">
            <p className="font-circular-web mt-20 max-w-sm text-center text-teal-50 md:text-start">Where realm converge, lies Zentry and the boundless pillar. Discover its secrets and shape your fate amidst infinite opportunities</p>

            <Button id="realm-button" title="discover prologue" containerClass="mt-5" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Story;
