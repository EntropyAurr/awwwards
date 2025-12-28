function Hero() {
  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      <div id="video-frame" className="bg-blue-75 relative z-10 h-dvh w-screen overflow-hidden rounded-lg">
        <div>
          <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
            <div>MiniVideoPlayer</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
