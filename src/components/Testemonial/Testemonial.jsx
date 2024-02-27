"use client";

import { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./Testemonial.css";
import image from "../../../public/2517.jpg";
import Image from "next/image";

function Testemonial() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });
  return (
    <div className="w-full">
      <div
        className="w-full h-[550px] md:h-[500px] lg:h-[500px] group bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${image.src})` }}
      >
        <div className="pt-10 md:pt-24 lg:pt-28">
          <div className="navigation-wrapper w-[90%] md:w-[55%] lg:w-[50%] mx-auto bg-white rounded-md lg:h-[250px]">
            <div ref={sliderRef} className="keen-slider">
              {reviews.map((review, index) => (
                <div key={index} className="keen-slider__slide number-slide mt-6 lg:flex">
                  <Image
                    src={review.image}
                    alt={review.name}
                    className="rounded-full lg:mx-8 md:mx-8 mx-auto bg-no-repeat"
                    width={200}
                    height={200}
                  />
                  <div className="lg:mr-9 text-center lg:text-left font-sans">
                    <h1 className="text-5xl font-normal text-[#2C3333]">{review.name}</h1>
                    <p className="text-base pt-5 lg:w-[60%] lg:pl-2">{review.text}</p>
                    <p className="text-lg pt-3 lg:pl-2">{review.date}</p>
                  </div>
                </div>
              ))}
            </div>
            {loaded && instanceRef.current && (
              <>
                <Arrow
                  left
                  onClick={(e) =>
                    e.stopPropagation() || instanceRef.current?.prev()
                  }
                  disabled={currentSlide === 0}
                  
                />

                <Arrow
                  onClick={(e) =>
                    e.stopPropagation() || instanceRef.current?.next()
                  }
                  disabled={
                    currentSlide ===
                    instanceRef.current.track.details.slides.length - 1
                  }
                />
              </>
            )}
          </div>
          {loaded && instanceRef.current && (
            <div className="dots">
              {[
                ...Array(
                  instanceRef.current.track.details.slides.length
                ).keys(),
              ].map((idx) => {
                return (
                  <button
                    key={idx}
                    onClick={() => {
                      instanceRef.current?.moveToIdx(idx);
                    }}
                    className={"dot" + (currentSlide === idx ? " active" : "")}
                  ></button>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Testemonial;

function Arrow(props) {
  const disabled = props.disabled ? " arrow--disabled" : "";
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? "arrow--left left-[-200px] md:left-[-200px] lg:left-[-200px]" : "arrow--right left-[-200px] md:left-[-200px] lg:left-[-200px]"
      } ${disabled}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  );
}

const reviews = [
  {
    name: "John Doe",
    text: "I've been using this parking website for months now and it's been a lifesaver! Easy to use, convenient locations, and great prices.",
    image: "https://i.ibb.co/2gW4Cv2/2148859448.jpg",
    date: "18 January 2024",
  },
  {
    name: "Emily Smith",
    text: "This parking website has made my daily commute much smoother. I can always find a spot quickly and without hassle. Highly recommended!",
    image: "https://i.ibb.co/qRbv48f/2148029483.jpg",
    date: "22 January 2024",
  },
  {
    name: "Michael Johnson",
    text: "Excellent service! The website is user-friendly and booking a parking spot is a breeze. I've never had any issues and always find a spot.",
    image: "https://i.ibb.co/WKGrmX9/255.jpg",
    date: "15 January 2024",
  },
  {
    name: "Sarah Williams",
    text: "I've tried many parking websites, but this one stands out for its reliability and ease of use. The mobile app is fantastic too!",
    image:
      "https://i.ibb.co/Ttq8kBm/young-man-wearing-blue-outfit-looking-confident.jpg",
    date: "3 January 2024",
  },
  {
    name: "David Brown",
    text: "I'm impressed with the level of service provided by this parking website. The support team is responsive and helpful. Will continue using!",
    image: "https://i.ibb.co/1L4jfdT/3285.jpg",
    date: "10 January 2024",
  },
];
