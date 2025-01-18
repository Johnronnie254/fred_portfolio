import React, { useState, useEffect } from "react";
import "./Carousel.css";

const carouselData = [
  {
    title: "Cinematography",
    bio: "Fred Warui is the best cinematographer, capturing visuals with unmatched precision and creativity.",
    image: "https://i.pinimg.com/736x/cb/82/78/cb8278787032e5c6cf4faa41d91c17c8.jpg",
  },
  {
    title: "Editing",
    bio: "Fred Warui is the best editor, weaving magic in post-production to tell compelling stories.",
    image: "https://i.pinimg.com/736x/f0/aa/33/f0aa336c4f8e75d7939bc74959c99364.jpg",
  },
  {
    title: "Focus Pooling",
    bio: "Fred Warui is the best in focus pooling, ensuring every frame is sharp and captivating.",
    image: "https://i.pinimg.com/736x/a3/3c/f9/a33cf92a77bf120f2fe597d3b890cbcf.jpg",
  },
  {
    title: "Directing",
    bio: "Fred Warui is an exceptional director, bringing visions to life with a unique storytelling style.",
    image: "https://i.pinimg.com/736x/4c/43/3c/4c433c6e6884155ae3f12b7e2a338704.jpg",
  },
];

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Automatically switch slides every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === carouselData.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  const { title, bio, image } = carouselData[currentSlide];

  return (
    <div className="carousel-container">
      {carouselData.map((slide, index) => (
        <div
          key={index}
          className={`carousel-slide ${index === currentSlide ? "active" : ""}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          {index === currentSlide && (
            <div className="carousel-content">
              <h2 className="carousel-title">{title}</h2>
              <p className="carousel-bio">{bio}</p>
            </div>
          )}
        </div>
      ))}

      {/* Navigation Buttons */}
      <button className="carousel-button prev" onClick={() => handleSlideChange((currentSlide - 1 + carouselData.length) % carouselData.length)}>
        &#10094;
      </button>
      <button className="carousel-button next" onClick={() => handleSlideChange((currentSlide + 1) % carouselData.length)}>
        &#10095;
      </button>

      {/* Indicators */}
      <div className="carousel-indicators">
        {carouselData.map((_, index) => (
          <div
            key={index}
            className={`carousel-indicator ${index === currentSlide ? "active" : ""}`}
            onClick={() => handleSlideChange(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
