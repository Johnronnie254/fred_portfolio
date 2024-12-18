import React, { useState } from "react";
import "./Work.css";

const videoCards = [
  {
    id: 1,
    title: "Philips_All_271022_TX",
    videoSrc: "https://vimeo.com/890563322",
    description: `Agency - Game changer\nClient - Philips\nProducer - Shiro\nDirector and DP - Warui Fred\nAD - Fuad Mbigi\nCamera Assistant - Nashreen`,
  },
  {
    id: 2,
    title: "K_Vant",
    videoSrc: "https://vimeo.com/489027059",
    description: `Production House - Fcia\nDOP - Enos Olik\nCamera Assistant - Warui Fred`,
  },
  {
    id: 3,
    title: "Making Positive Impact through Technology",
    videoSrc: "https://vimeo.com/844288440",
    description: `Production house: MOJO\nDirector: Mohammed Zain\nDP: Moha and Warui Fred`,
  },
  {
    id: 4,
    title: "KCB GO AHEAD SPIRIT",
    videoSrc: "https://vimeo.com/504247177",
    description: `Client: KCB\nDirector: Enos Olik\nCinematography: Warui Fred`,
  },
  {
    id: 5,
    title: "OPPO Reno10 series 5G",
    videoSrc: "https://vimeo.com/893280704",
    description: `Client - OPPO\nCinematography - Kdart and Warui Fred`,
  },
  {
    id: 6,
    title: "OPPO Lounge",
    videoSrc: "https://vimeo.com/893282556",
    description: `Client - OPPO\nDirector - Enos Olik\nCinematography - Fred Warui, Ben Kiilu, Rango\nEdit - Rango`,
  },
  {
    id: 7,
    title: "FX PESA - ARE YOU ONE OF US",
    videoSrc: "https://vimeo.com/370802795",
    description: `Agency: Brand Immersion\nCopywriters: Mike Kiruthi/Ken Kenya\nDirector/DP: Enos Olik\nFocus Puller/DIT: Fred Warui`,
  },
  {
    id: 8,
    title: "Kibao Vodka - Kakwonje",
    videoSrc: "https://vimeo.com/844293052",
    description: `Production House - MOJO\nCinematographer: Moha & Warui Fred\n1AC/FP - Tony`,
  },
  {
    id: 9,
    title: "Omoka Rahisi",
    videoSrc: "https://vimeo.com/548997754",
    description: `Production House: Orion Studios\nDirected by Brian Muhando\nCinematography by Warui Fred\nAC: Peter`,
  },
  // Add all other entries similarly ...
];

const Work = () => {
  const [visibleCount, setVisibleCount] = useState(9);
  const [expanded, setExpanded] = useState({});

  const loadMore = () => setVisibleCount((prev) => Math.min(prev + 9, videoCards.length));
  const loadLess = () => setVisibleCount(9);

  const toggleExpand = (id) => setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="work-container">
      <h1 className="work-title">My Work</h1>
      <div className="card-container">
        {videoCards.slice(0, visibleCount).map((card) => (
          <div className="card" key={card.id}>
            <div className="video-container">
              <iframe
                src={card.videoSrc}
                title={card.title}
                className="card-video"
                allow="autoplay; fullscreen"
              />
            </div>
            <div className="card-content">
              <h2 className="card-title">{card.title}</h2>
              <p>
                {expanded[card.id] ? card.description : card.description.slice(0, 100)}{" "}
                {card.description.length > 100 && (
                  <span
                    className="show-more"
                    onClick={() => toggleExpand(card.id)}
                  >
                    {expanded[card.id] ? "Show Less" : "Show More"}
                  </span>
                )}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="button-container">
        {visibleCount < videoCards.length && (
          <button onClick={loadMore} className="load-more">
            Load More <span>↓</span>
          </button>
        )}
        {visibleCount > 9 && (
          <button onClick={loadLess} className="load-less">
            Load Less <span>↑</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default Work;
