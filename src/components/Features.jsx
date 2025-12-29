import { useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";

function BentoTilt({ children, className = "" }) {
  const [transformStyle, setTransformStyle] = useState("");

  const itemRef = useRef(null);

  function handleMouseMove(e) {
    if (!itemRef.current) return;

    const { left, top, width, height } = itemRef.current.getBoundingClientRect();

    const relativeX = (e.clientX - left) / width;
    const relativeY = (e.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 7;
    const tiltY = (relativeX - 0.5) * -7;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.98, 0.98, 0.98)`;

    setTransformStyle(newTransform);
  }

  function handleMouseLeave() {
    setTransformStyle("");
  }

  return (
    <div ref={itemRef} className={className} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} style={{ transform: transformStyle }}>
      {children}
    </div>
  );
}

function BentoCards({ src, title, description }) {
  return (
    <div className="relative size-full">
      <video src={src} loop muted autoPlay className="absolute top-0 left-0 size-full object-cover object-center" />

      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-green-50">
        <div>
          <h1 className="bento-title">{title}</h1>

          {description && <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>}
        </div>
      </div>
    </div>
  );
}

function Features() {
  return (
    <section className="bg-black pb-52">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-32">
          <p className="font-circular-web text-lg text-green-50">Into the Metagame Layer</p>

          <p className="font-circular-web max-w-md text-lg text-blue-50 opacity-50">Immerse yourself in a rich and ever-expanding universe where a vibrant array of products converge into an interconnected overlay experience on your world.</p>
        </div>

        <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
          <BentoCards
            src="videos/feature-1.mp4"
            title={
              <>
                radi<b className="special-font">n</b>t
              </>
            }
            description="A cross-platform metagame app, turning your activities across Web2 and Web3 into a rewarding adventure."
          />
        </BentoTilt>

        <div className="grid h-[135vh] grid-cols-2 grid-rows-3 gap-7">
          <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
            <BentoCards
              src="videos/feature-2.mp4"
              title={
                <>
                  zig<b className="special-font">m</b>a
                </>
              }
              description="An anime and gaming-inspired NFT collection - the IP primed for expansion."
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
            <BentoCards
              src="videos/feature-3.mp4"
              title={
                <>
                  n<b className="special-font">e</b>xus
                </>
              }
              description="A gamified social hub, adding a new dimension of play to social interaction for Web3 communities."
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
            <BentoCards
              src="videos/feature-4.mp4"
              title={
                <>
                  az<b className="special-font">u</b>re
                </>
              }
              description="A cross-world AI Agent - elevating your gameplay to be more fun and productive."
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_2">
            <div className="flex size-full flex-col justify-between bg-teal-300 p-5">
              <h1 className="bento-title">
                M<b className="special-font">o</b>re co<b className="special-font">m</b>ming s<b className="special-font">o</b>on!
              </h1>

              <div className="m-5 scale-[5] self-end">
                <TiLocationArrow />
              </div>
            </div>
          </BentoTilt>

          <BentoTilt className="bent-tilt_2">
            <video src="videos/feature-5.mp4 " loop muted autoPlay className="size-full object-cover object-center"></video>
          </BentoTilt>
        </div>
      </div>
    </section>
  );
}

export default Features;
