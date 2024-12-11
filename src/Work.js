import React, { useState } from 'react';
import './Work.css';

const Work = () => {
  const cards = Array.from({ length: 27 }, (_, index) => ({
    id: index + 1,
    title: `Project ${index + 1}`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Proin suscipit nunc eget massa elementum, ac sagittis lorem viverra.`,
    videoSrc: 'https://www.w3schools.com/html/mov_bbb.mp4', // Placeholder video
  }));

  const [visibleCount, setVisibleCount] = useState(9);

  const loadMore = () => {
    setVisibleCount((prevCount) => Math.min(prevCount + 9, cards.length));
  };

  const loadLess = () => {
    setVisibleCount((prevCount) => Math.max(prevCount - 9, 9));
  };

  const handleMouseEnter = (e) => {
    const video = e.target;
    if (video.paused) {
      video.play();
    }
  };

  const handleMouseLeave = (e) => {
    const video = e.target;
    if (!video.paused) {
      video.pause();
    }
  };

  return (
    <div className="work-container">
      <h1 className="work-title">My Work</h1>
      <div className="card-container">
        {cards.slice(0, visibleCount).map((card) => (
          <div className="card" key={card.id}>
            <div className="video-container">
              <video
                src={card.videoSrc}
                className="card-video"
                muted
                loop
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
            </div>
            <div className="card-content">
              <h2>{card.title}</h2>
              <p>{card.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="button-container">
        {visibleCount < cards.length && (
          <button className="load-more" onClick={loadMore}>
            Load More <span className="arrow-down">↓</span>
          </button>
        )}
        {visibleCount > 9 && (
          <button className="load-less" onClick={loadLess}>
            Load Less <span className="arrow-up">↑</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default Work;
