import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

// Image data
const imagesDesktop = [
  'https://res.cloudinary.com/dbnticsz8/image/upload/v1740726005/febTech/Nifa/i2wuufocaytt0yrmszo0.jpg',
  'https://res.cloudinary.com/dvlh2e6d0/image/upload/v1740132025/gfcvzxoqghtaltovscp1.jpg',
  'https://res.cloudinary.com/dbnticsz8/image/upload/v1740373636/febTech/Nifa/qqal4p1fwbtaagiefv87.jpg',
  'https://res.cloudinary.com/dbnticsz8/image/upload/v1740725994/febTech/Nifa/u7r9m8spxrkdhvdgskx1.jpg',
  'https://res.cloudinary.com/dvlh2e6d0/image/upload/v1740132023/ldzcizpxykzpi2klpxwj.jpg',
  'https://res.cloudinary.com/dbnticsz8/image/upload/v1740374293/febTech/Nifa/wbqtykgeuqwe7eiz66tl.jpg',
  'https://res.cloudinary.com/dvlh2e6d0/image/upload/v1740132022/i8tiuzrxecnr3iv7kh1z.jpg',
  'https://res.cloudinary.com/dbnticsz8/image/upload/v1740373245/febTech/Nifa/nbac1t3kv6clva4lrwxx.jpg',
  'https://res.cloudinary.com/dvlh2e6d0/image/upload/v1740132021/b630tkpmwxbwmuqcfdlm.jpg',
  'https://res.cloudinary.com/dbnticsz8/image/upload/v1740374001/febTech/Nifa/vxjvrzwndyzgwyacexdl.jpg',
  'https://res.cloudinary.com/dbnticsz8/image/upload/v1740372468/febTech/Nifa/lfhkoiqvmhn4hbouhjd0.jpg',
  'https://res.cloudinary.com/dbnticsz8/image/upload/v1740372809/febTech/Nifa/zgpyqf7cew0lcfarvidk.jpg',
];

const imagesMobile = [
  'https://res.cloudinary.com/dvlh2e6d0/image/upload/v1740132033/pyxxjrxfd72rgwytn7as.jpg',
  'https://res.cloudinary.com/dvlh2e6d0/image/upload/v1740132025/gfcvzxoqghtaltovscp1.jpg',
  'https://res.cloudinary.com/dbnticsz8/image/upload/v1740373636/febTech/Nifa/qqal4p1fwbtaagiefv87.jpg',
  'https://res.cloudinary.com/dvlh2e6d0/image/upload/v1740132023/kae92swwd1dedawgajk2.jpg',
  'https://res.cloudinary.com/dvlh2e6d0/image/upload/v1740132023/ldzcizpxykzpi2klpxwj.jpg',
  'https://res.cloudinary.com/dbnticsz8/image/upload/v1740374293/febTech/Nifa/wbqtykgeuqwe7eiz66tl.jpg',
  'https://res.cloudinary.com/dvlh2e6d0/image/upload/v1740132022/i8tiuzrxecnr3iv7kh1z.jpg',
  'https://res.cloudinary.com/dbnticsz8/image/upload/v1740373245/febTech/Nifa/nbac1t3kv6clva4lrwxx.jpg',
  'https://res.cloudinary.com/dvlh2e6d0/image/upload/v1740132021/b630tkpmwxbwmuqcfdlm.jpg',
  'https://res.cloudinary.com/dbnticsz8/image/upload/v1740374001/febTech/Nifa/vxjvrzwndyzgwyacexdl.jpg',
  'https://res.cloudinary.com/dbnticsz8/image/upload/v1740372468/febTech/Nifa/lfhkoiqvmhn4hbouhjd0.jpg',
  'https://res.cloudinary.com/dbnticsz8/image/upload/v1740372809/febTech/Nifa/zgpyqf7cew0lcfarvidk.jpg',
];

const ImageGallery = () => {
  const desktopImageRefs = useRef([]);
  const mobileImageRefs = useRef([]);

  useEffect(() => {
    if (window.innerWidth < 768) return;

    const handleMouseEnter = (img) => {
      gsap.to(img, { scale: 1.02, duration: 0.3, ease: "power2.out" });
    };

    const handleMouseLeave = (img) => {
      gsap.to(img, { scale: 1, duration: 0.3, ease: "power2.out" });
    };

    desktopImageRefs.current.forEach((img) => {
      if (img) {
        gsap.set(img, { scale: 1 });
        img.addEventListener("mouseenter", () => handleMouseEnter(img));
        img.addEventListener("mouseleave", () => handleMouseLeave(img));
      }
    });

    return () => {
      desktopImageRefs.current.forEach((img) => {
        if (img) {
          img.removeEventListener("mouseenter", handleMouseEnter);
          img.removeEventListener("mouseleave", handleMouseLeave);
        }
      });
    };
  }, [desktopImageRefs.current]);

  return (
    <div className="w-full h-auto flex justify-center" id="Gallery">
      <div className="w-8/10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-4 mt-15">
        {imagesDesktop.map((img, index) => (
          <img
            key={index}
            ref={(el) => (desktopImageRefs.current[index] = el)}
            src={img}
            alt={`Image ${index + 1}`}
            loading="lazy"
            className="hidden lg:block w-full h-80 drop-shadow-lg object-cover rounded-lg shadow-lg aspect-square cursor-pointer"
          />
        ))}
        {imagesMobile.map((img, index) => (
          <img
            key={index}
            ref={(el) => (mobileImageRefs.current[index] = el)}
            src={img}
            alt={`Image ${index + 1}`}
            loading="lazy"
            className="lg:hidden block w-full h-80 drop-shadow-lg object-cover rounded-lg shadow-lg aspect-square cursor-pointer"
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
