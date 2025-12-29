import Button from "./Button";

function ImageClipBox({ src, clipClass }) {
  return (
    <div className={clipClass}>
      <img src={src} alt="contact" />
    </div>
  );
}

function Contact() {
  return (
    <div id="contact" className="my-20 min-h-96 w-screen px-10">
      <div className="relative rounded-lg bg-black py-24 text-green-50 sm:overflow-hidden">
        <div className="absolute top-0 -left-20 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
          <ImageClipBox src="img/contact-1.webp" clipClass="contact-clip-path-1" />

          <ImageClipBox src="img/contact-2.webp" clipClass="contact-clip-path-2 lg:translate-y-40 translate-y-60" />
        </div>

        <div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:right-10 md:left-auto lg:top-20 lg:w-80">
          <ImageClipBox src="img/swordman-partial.webp" clipClass="absolute md:scale-125" />

          <ImageClipBox src="img/swordman.webp" clipClass="sword-man-clip-path md:scale-125" />
        </div>

        <div className="flex flex-col items-center text-center">
          <p className="font-general text-lg uppercase">join Zentry</p>

          <p className="font-zentry mt-10 w-full text-5xl leading-[0.9] md:text-[6rem]">
            Let's b<b className="special-font">u</b>ild the <br /> new era of <br /> g<b className="special-font">a</b>ming t<b className="special-font">o</b>gether
          </p>

          <Button title="contact us" containerClass="mt-10 cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

export default Contact;
