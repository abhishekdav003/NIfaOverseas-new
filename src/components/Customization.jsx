import React, { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import './components.css';

const Customization = () => {
  const imageRefs = useRef([]);
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(null);

  const Products = [
    {
      img: "https://res.cloudinary.com/dbnticsz8/image/upload/v1742017351/febTech/Nifa/laftbv4xvp6zhbmk3c9z.webp",
    },
    {
      img: "https://res.cloudinary.com/dkdyrgg3q/image/upload/v1742023892/Nifa%20Overseas/pv6gsgakj5ctk7luwvkg.webp",
    },
    {
      img: "https://res.cloudinary.com/dkdyrgg3q/image/upload/v1742023892/Nifa%20Overseas/sexv6vi3khsbc5utmnln.webp",
    },
    {
      img: "https://res.cloudinary.com/dkdyrgg3q/image/upload/v1742023892/Nifa%20Overseas/e9q8lyeecn6ybeqsrpde.webp",
    },
  ];

  const animateImage = (index) => {
    if (!containerRef.current || !imageRefs.current[index]) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const imageRect = imageRefs.current[index].getBoundingClientRect();

    const targetX =
      containerRect.left + containerRect.width / 2 - imageRect.width / 2;
    const targetY =
      containerRect.top + containerRect.height / 2 - imageRect.height / 2;

    const scaleValue = window.innerWidth < 768 ? 3 : 5;

    // Reset previous image if necessary
    if (activeIndex !== null && activeIndex !== index) {
      gsap.to(imageRefs.current[activeIndex], {
        scale: 1,
        x: 0,
        y: 0,
        duration: 0.7,
        ease: "power2.inOut",
      });
    }

    // Animate current image
    gsap.to(imageRefs.current[index], {
      scale: scaleValue,
      x: targetX - imageRect.left,
      y: targetY - imageRect.top,
      duration: 0.7,
      ease: "power2.out",
    });

    setActiveIndex(index);
  };

  const handleImageClick = (index, event) => {
    event.preventDefault();
    animateImage(index);
  };

  // Trigger default selection
  useEffect(() => {
    const timeout = setTimeout(() => animateImage(0), 500); // Allow DOM to stabilize
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="flex flex-col w-full lg:px-3 text-center">
      <div className="flex flex-col items-center">
        <h2 className="text-5xl font-bold">Private-Label & Custom Branding Solutions</h2>
        <h3 className="text-3xl lg:font-bold">Looking to sell under your own brand?</h3>
        <h4 className="text-center text-xl px-5 lg:px-10 lg:text-3xl">
          We offer custom logo branding, private-label packaging, and exclusive product modifications for bulk buyers.
          Whether you're a Christmas décor brand, a home goods retailer, or a specialty store, we help you create a unique, market-ready collection.
        </h4>
      </div>

      <div className="p-6 w-full flex flex-col items-center lg:flex-row text-center">
        <div className="lg:w-[35%] h-auto">
          <h2 className="text-5xl lg:text-7xl font-bold">Complete customization Available.</h2>
          <h3 className="text-3xl font-bold">Your own design too.</h3>
          <p className="text-xl font-bold">
            Low MOQ & Bulk Order Discounts<br />
            Private Labeling & Custom Branding<br />
            Reliable International Shipping<br />
            Sustainable, Handmade Products
          </p>
        </div>

        <div className="w-full lg:w-[75%] relative flex flex-col items-center">
          <div
            ref={containerRef}
            className="absolute h-full w-[100vw] -left-24 lg:left-0 lg:w-[90%] flex items-center justify-center"
          ></div>

          <div className="w-full">
            <div className="flex flex-col w-full h-[47vh] lg:h-[45vh] items-end relative gap-3 overflow-scroll pr-1.5">
              {Products.map((item, index) => (
                <div
                  key={index}
                  className="relative border border-amber-500 p-1 rounded-2xl lg:w-[4vw] w-[20vw]"
                >
                  <img
                    ref={(el) => (imageRefs.current[index] = el)}
                    src={item.img}
                    alt="Product"
                    className="w-auto cursor-pointer h-full rounded-xl"
                    onClick={(event) => handleImageClick(index, event)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customization;
