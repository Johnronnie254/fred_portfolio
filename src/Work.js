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
  {
    id: 10,
    title: "FAMOUS MUSICAL SERIES",
    videoSrc: "https://vimeo.com/631073297",
    description: `Director - Enos Olik\nDP - Enos Olik\n1ST AC - Ben Kiilu & Fred Warui`,
  },
  {
    id: 11,
    title: "SIAYA - Directors Cut",
    videoSrc: "https://vimeo.com/383046752",
    description: `Director/DP/Editor: Warui Fred\nColorist: Enos Olik\nAC: Ben Kiilu & Rango.m\nGaffer: Isaac Awene`,
  },
  {
    id: 12,
    title: "Sneak",
    videoSrc: "https://vimeo.com/428420730",
    description: `Director: Rango M\nDirector of Photography: Warui Fred\nSound: Nesta`,
  },
  {
    id: 13,
    title: "All Access",
    videoSrc: "https://vimeo.com/842480526",
    description: `Client: Grand Acres\nDirector: Enos Olik\nCinematography: Warui Fred & Ben Kiilu\nGaffer: Isaac Awene\nEdit: Rango Musau`,
  },
  {
    id: 14,
    title: "I'm Here For It - Training Day Netflix Sports",
    videoSrc: "https://vimeo.com/924906697",
    description: `Production House: Igabantu Studios\nProducer: Faith Kaluva\nDirector: Enos Olik\nCinematography: Warui Fred`,
  },
  {
    id: 15,
    title: "We Are Eskimi TVC",
    videoSrc: "https://vimeo.com/563721611",
    description: `Cinematography: Enos Olik\nProducer: Fuad Mbigi\nGaffer: Isaac Awene\n1st AC: Fred Warui`,
  },
  {
    id: 16,
    title: "AZIMIO GOTV Digital",
    videoSrc: "https://vimeo.com/735914123",
    description: `Production House: C_Hub\nDirector/DP: Warui Fred`,
  },
  {
    id: 17,
    title: "AZIMIO GOTV V02",
    videoSrc: "https://vimeo.com/735913283",
    description: `Director/DP: Warui Fred`,
  },
  {
    id: 18,
    title: "Moko",
    videoSrc: "https://vimeo.com/893279638",
    description: `Client: Moko\nProducer: Brian Muhando\nDirector: Brian Muhando\nDP: Warui Fred`,
  },
  {
    id: 19,
    title: "NEW LOOK SASINI TVC",
    videoSrc: "https://vimeo.com/566433798",
    description: `Client: Sasini\nDirector/DP: Enos Olik\n1st AC: Fred Warui`,
  },
  {
    id: 20,
    title: "Safal Group_MRM_Dumu Zas TV Commercial",
    videoSrc: "https://vimeo.com/451462497",
    description: `Safal Group TVC\nDirector/DP/Colorist: Enos Olik\n1st AC: Fred Warui`,
  },
  {
    id: 21,
    title: "JIJI - SHOWMAX SERIES",
    videoSrc: "https://vimeo.com/996838769",
    description: `Production: EOP Films\nCinematography: Warui Fred`,
  },
  {
    id: 22,
    title: "A Wake to Every Moment TVC",
    videoSrc: "https://vimeo.com/883679012",
    description: `Project: Awake to Every Moment TVC\nClient: Silent Night Bedding\nDirector: Andere\nAC: Warui Fred`,
  },
  {
    id: 23,
    title: "Mkurugenzi Edition",
    videoSrc: "https://vimeo.com/837148082",
    description: `Production House: EOP Films\nDirector: Enos Olik\nDOP: Warui Fred & Ben Kiilu`,
  },
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
              <h2>{card.title}</h2>
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
