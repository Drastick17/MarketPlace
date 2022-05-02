import React from "react";
import img1 from "../media/03.jpg";
const Carousel = () => {
  return (
    <section>
      <div className="relative left-0 overflow-hidden">
        <button aria-label="Siguiente" className="absolute block top-1/2 -translate-y-1/2 left-6">
          <i className="fas fa-chevron-left"></i>
        </button>
        <div className="w-full max-h-[400px] flex overflow-x-scroll flex-nowrap flex-shrink-0">
          <div className="min-w-full sm:min-w-[50%] lg:min-w-[20%]">
            <div className="w-full">
              <img src={img1} className="w-full max-h-[350px]"alt="Rock and Roll Hall of Fame" />
              <p>Rock and Roll Hall of Fame</p>
            </div>
          </div>
          <div className="min-w-full sm:min-w-[50%] lg:min-w-[20%]">
            <div className="w-full">
              <img src={img1} className="w-full max-h-[350px]"alt="Rock and Roll Hall of Fame" />
              <p>Rock and Roll Hall of Fame</p>
            </div>
          </div>
          <div className="min-w-full sm:min-w-[50%] lg:min-w-[20%]">
            <div className="w-full">
              <img src={img1} className="w-full max-h-[350px]"alt="Rock and Roll Hall of Fame" />
              <p>Rock and Roll Hall of Fame</p>
            </div>
          </div>
          <div className="min-w-full sm:min-w-[50%] lg:min-w-[20%]">
            <div className="w-full">
              <img src={img1} className="w-full max-h-[350px]"alt="Rock and Roll Hall of Fame" />
              <p>Rock and Roll Hall of Fame</p>
            </div>
          </div>
          <div className="min-w-full sm:min-w-[50%] lg:min-w-[20%]">
            <div className="w-full">
              <img src={img1} className="w-full max-h-[350px]"alt="Rock and Roll Hall of Fame" />
              <p>Rock and Roll Hall of Fame</p>
            </div>
          </div>  
          
        </div>
        <button aria-label="Siguiente"  className="absolute block top-1/2 -translate-y-1/2 right-6">
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
      <div role="tablist" id="carousel__indicators"></div>
    </section>
  );
};

export default Carousel;
