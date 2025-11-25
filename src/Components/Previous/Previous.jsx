import React, { useState } from "react";

import dtd11 from "../../assets/dtd11.webp";
import dtd12 from "../../assets/dtd12.webp";
import dtd13 from "../../assets/dtd13.webp";

import dtd21 from "../../assets/dtd21.webp";
import dtd22 from "../../assets/dtd22.webp";
import dtd23 from "../../assets/dtd23.webp";

import dtd31 from "../../assets/dtd31.webp";
import dtd32 from "../../assets/dtd32.webp";
import dtd33 from "../../assets/dtd33.webp";

const Previous = () => {
  const cardData = [
    {
      title: "Dig The Data 1.0",
      caption: [
        "The inaugural event that sparked the data revolution at NITER",
        "The most challenging data competition yet with advanced analytics and real-world problem solving",
        "Advanced analytics and machine learning competition that pushed boundaries",
      ],
      eh1: "Foundation Event",
      eh2: "Community Building",
      eh3: "Data Exploration",
      year: 2021,
      images: [dtd11, dtd12, dtd13],
    },
    {
      title: "Dig The Data 2.0",
      caption: [
        "The most challenging data competition yet with advanced analytics and real-world problem solving",
        "Advanced analytics and machine learning competition that pushed boundaries",
        "Pushed participants toward deeper insights.",
      ],
      eh1: "Advanced Visualization",
      eh2: "Real-time Analytics",
      eh3: "Student Engagement",
      year: 2022,
      images: [dtd21, dtd22, dtd23],
    },
    {
      title: "Dig The Data 3.0",
      caption: [
        "The largest edition with diverse datasets.",
        "Featured tougher evaluation metrics.",
        "Encouraged creative data-driven solutions.",
      ],
      eh1: "Advanced ML Challenges",
      eh2: "Deep Learning Focus",
      eh3: "Record Participation",
      year: 2023,
      images: [dtd31, dtd32, dtd33],
    },
  ];

  const [cardIndex, setCardIndex] = useState(1);
  const [imgIndex, setImgIndex] = useState(0);
  const [captionIndex, setCaptionIndex] = useState(0);

  const card = cardData[cardIndex];
  const images = card.images;
  const caption = card.caption;

  function prevImage() {
    setImgIndex((i) => (i - 1 + images.length) % images.length);
  }
  function nextImage() {
    setImgIndex((i) => (i + 1) % images.length);
  }

  function prevCaption() {
    setCaptionIndex((i) => (i - 1 + caption.length) % images.length);
  }
  function nextCaption() {
    setCaptionIndex((i) => (i + 1) % caption.length);
  }

  function changeCard(newIndex) {
    setCardIndex(newIndex);
    setImgIndex(0);
  }

  return (
    <div
      className="hero py-20 min-h-screen relative overflow-hidden 
                      bg-linear-to-b from-[#0D131F] via-blue-900/50 to-[#0D131F]
                      before:content-[''] before:absolute before:inset-0 
                      before:bg-[linear-gradient(#1DA0E333_1px,transparent_1px),linear-gradient(90deg,#1DA0E333_1px,transparent_1px)] 
                      before:bg-size-[20px_20px] before:opacity-30 before:pointer-events-none"
    >
      <div className="hero-content flex-col ">
        {/* previous title */}
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-8xl font-black bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4 leading-tight">
            PREVIOUS
          </h1>
          <h2 className="text-4xl md:text-6xl font-black bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-8">
            EVENTS
          </h2>
          <p className="text-xl text-gray-300">
            Relive the excitement and innovation from our past events
          </p>
        </div>
        {/* previous card */}
        <div className="card lg:flex-row rounded-3xl border border-cyan-500/30 bg-gray-900/80 backdrop-blur-2xl w-9/10 shadow-sm hover:border-[#1DA0E3] hover:shadow-[0_0_55px_#145875] transition-all duration-300">
          {/* test card */}
          <figure className="relative w-full lg:w-1/2 flex justify-center items-center px-6 md:px-10 md:py-10 lg:px-0 lg:py-0 py-8 pb-12 lg:pb-0">
            <div className=" relative w-full rounded-2xl ">
              <img
                src={images[imgIndex]}
                alt={`${card.title} slide ${imgIndex + 1}`}
                className="mx-auto w-full md:w-8/12   rounded-2xl hover:scale-105 transition-all duration-300 object-cover"
              />

              {/* arrows lg*/}
              <div className="hidden md:absolute left-4 right-4 top-1/2 md:flex -translate-y-1/2 transform justify-between pointer-events-none">
                <button
                  onClick={() => {
                    prevImage();
                    prevCaption();
                  }}
                  className="pointer-events-auto btn btn-circle bg-transparent border-cyan-500/50 text-cyan-500 backdrop-blur-2xl"
                  aria-label="previous"
                >
                  ❮
                </button>
                <button
                  onClick={() => {
                    nextImage();
                    nextCaption();
                  }}
                  className="pointer-events-auto btn btn-circle bg-transparent border-cyan-500/50 text-cyan-500 backdrop-blur-xs"
                  aria-label="next"
                >
                  ❯
                </button>
              </div>

              {/* small image indicators (bottom center) */}
              <div className="hidden md:absolute bottom-4 left-0 right-0 md:flex justify-center gap-3">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setImgIndex(idx);
                      setCaptionIndex(idx);
                    }}
                    className={`w-10 h-2 rounded-full transition-all ${
                      idx === imgIndex
                        ? "bg-cyan-400 scale-110"
                        : "bg-gray-500/40"
                    }`}
                    aria-label={`go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
            {/*arrows mobile */}
            <div className="md:hidden absolute left-5 right-5 -bottom-5 flex -translate-y-1/2 transform justify-between z-10">
                <button
                  onClick={() => {
                    prevImage();
                    prevCaption();
                  }}
                  className="pointer-events-auto btn btn-circle bg-transparent border-cyan-500/50 text-cyan-500 backdrop-blur-2xl"
                  aria-label="previous"
                >
                  ❮
                </button>
                <button
                  onClick={() => {
                    nextImage();
                    nextCaption();
                  }}
                  className="pointer-events-auto btn btn-circle bg-transparent border-cyan-500/50 text-cyan-500 backdrop-blur-xs"
                  aria-label="next"
                >
                  ❯
                </button>
              </div>
              {/* small image indicators */}
            <div className="absolute md:hidden bottom-4 left-0 right-0 flex justify-center gap-3">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setImgIndex(idx);
                      setCaptionIndex(idx);
                    }}
                    className={`w-10 h-2 rounded-full transition-all ${
                      idx === imgIndex
                        ? "bg-cyan-400 scale-110"
                        : "bg-gray-500/40"
                    }`}
                    aria-label={`go to slide ${idx + 1}`}
                  />
                ))}
              </div>      
             
          </figure>

          {/* RIGHT: content + numeric controls */}
          <div className="pt-0 lg:pt-8 p-8 flex flex-col justify-center space-y-6 lg:w-1/2">
            <div className="">
              <div className="flex justify-between items-center">
                <h4 className="text-4xl md:text-5xl font-black text-white mb-4">
                  {card.title}
                </h4>
              </div>
              <p className="text-lg text-gray-300 leading-relaxed">
                {caption[captionIndex]}
              </p>
            </div>

            <div>
              <h5 className="text-xl font-bold text-cyan-400 mb-3">
                Event Highlights
              </h5>
              <div className="space-y-2">
                <div className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                  <span>{card.eh1}</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                  <span>{card.eh2}</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                  <span>{card.eh3}</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="bg-gray-800/50 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-cyan-400">150+</div>
                <div className="text-sm text-gray-400">Participants</div>
              </div>
              <div className="bg-gray-800/50 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-blue-400">
                  {card.year}
                </div>
                <div className="text-sm text-gray-400">Year</div>
              </div>
            </div>

            {/* Numeric controls: select which DigTheData card to show */}
            <div className="pt-4 flex items-center justify-center">
              <div className="flex gap-3">
                {cardData.map((c, idx) => (
                  <button
                    key={c.title}
                    onClick={() => changeCard(idx)}
                    className={`px-3 py-2 rounded-md font-semibold transition-all duration-300 cursor-pointer ${
                      idx === cardIndex
                        ? "bg-cyan-500/20 hover:bg-gray-800/30 hover:border-cyan-400/60 border border-cyan-400 hover:text-cyan-300/70 text-cyan-300"
                        : "bg-gray-800/30 hover:bg-cyan-400/30 text-gray-300"
                    }`}
                  >
                    {idx + 1 + ".0"}
                  </button>
                ))}
              </div>

             
            </div>
          </div>

          
        </div>
        
      </div>
    </div>
  );
};
export default Previous;
