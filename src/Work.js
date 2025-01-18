import React, { useState } from "react";
import "./Work.css";

const videoCards = [
  { id: 1, title: "Philips", videoSrc: "https://player.vimeo.com/video/890563322" },
  { id: 2, title: "K_Vant", videoSrc: "https://player.vimeo.com/video/489027059" },
  { id: 3, title: "Positive Impact", videoSrc: "https://player.vimeo.com/video/844288440" },
  { id: 4, title: "KCB", videoSrc: "https://player.vimeo.com/video/504247177" },
  { id: 5, title: "OPPO Reno10 series 5G", videoSrc: "https://player.vimeo.com/video/893280704" },
  { id: 6, title: "OPPO Lounge", videoSrc: "https://player.vimeo.com/video/893282556" },
  { id: 7, title: "FX PESA", videoSrc: "https://player.vimeo.com/video/370802795" },
  { id: 8, title: "Kibao Vodka", videoSrc: "https://player.vimeo.com/video/844293052" },
  { id: 9, title: "Omoka Rahisi", videoSrc: "https://player.vimeo.com/video/548997754" },
  { id: 10, title: "Famous Musical Series", videoSrc: "https://player.vimeo.com/video/631073297" },
  { id: 11, title: "SIAYA", videoSrc: "https://player.vimeo.com/video/383046752" },
  { id: 12, title: "Sneak", videoSrc: "https://player.vimeo.com/video/428420730" },
  { id: 13, title: "All access", videoSrc: "https://player.vimeo.com/video/842480526" },
  { id: 14, title: "Netflix", videoSrc: "https://player.vimeo.com/video/924906697" },
  { id: 15, title: "Eskimi TVC", videoSrc: "https://player.vimeo.com/video/563721611" },
  { id: 16, title: "AZIMIO_GOTV_Digital", videoSrc: "https://player.vimeo.com/video/735914123" },
  { id: 17, title: "AZIMIO GOTV", videoSrc: "https://player.vimeo.com/video/735913283" },
  { id: 18, title: "Moko", videoSrc: "https://player.vimeo.com/video/893279638" },
  { id: 19, title: "SASINI TVC", videoSrc: "https://player.vimeo.com/video/566433798" },
  { id: 20, title: "Safal Group", videoSrc: "https://player.vimeo.com/video/451462497" },
  { id: 21, title: "JIJI - SHOWMAX", videoSrc: "https://player.vimeo.com/video/996838769" },
  { id: 22, title: "TVC", videoSrc: "https://player.vimeo.com/video/883679012" },
  { id: 23, title: "Mkurugenzi Edition", videoSrc: "https://player.vimeo.com/video/837148082" },
];

const Work = () => {
  const [visibleCount, setVisibleCount] = useState(9);

  const loadMore = () => setVisibleCount((prev) => Math.min(prev + 9, videoCards.length));
  const loadLess = () => setVisibleCount(9);

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
              ></iframe>
            </div>
            <h3 className="card-title">{card.title}</h3>
          </div>
        ))}
      </div>
      {visibleCount < videoCards.length && (
        <button className="load-more" onClick={loadMore}>
          Load More
        </button>
      )}
      {visibleCount > 9 && (
        <button className="load-less" onClick={loadLess}>
          Load Less
        </button>
      )}
    </div>
  );
};

export default Work;
