import React, { useState } from "react";
import "./Work.css";

const videoCards = [
  {
    id: 1,
    title: "Philips",
    videoSrc: "https://player.vimeo.com/video/890563322",
    description: `Agency - Game changer\nClient - Philips\nProducer - Shiro\nDirector and DP - Warui Fred\nAD - Fuad Mbigi\nCamera Assistant - Nashreen`,
  },
  {
    id: 2,
    title: "K_Vant",
    videoSrc: "https://player.vimeo.com/video/489027059",
    description: `Production House - Fcia\nDOP - Enos Olik\nCamera Assistant - Warui Fred`,
  },
  {
    id: 3,
    title: "Positive Impact",
    videoSrc: "https://player.vimeo.com/video/844288440",
    description: `Production house: MOJO\nDirector: Mohammed Zain\nDP: Moha and Warui Fred`,
  },
  {
    id: 4,
    title: "KCB",
    videoSrc: "https://player.vimeo.com/video/504247177",
    description: `Client: KCB\nDirector: Enos Olik\nCinematography: Warui Fred`,
  },
  {
    id: 5,
    title: "OPPO Reno10 series 5G",
    videoSrc: "https://player.vimeo.com/video/893280704",
    description: `Client - OPPO\nCinematography - Kdart and Warui Fred`,
  },
  {
    id: 6,
    title: "OPPO Lounge",
    videoSrc: "https://player.vimeo.com/video/893282556",
    description: `Client - OPPO\nDirector - Enos Olik\nCinematography - Fred Warui, Ben Kiilu, Rango\nEdit - Rango`,
  },
  {
    id: 7,
    title: "FX PESA",
    videoSrc: "https://player.vimeo.com/video/370802795",
    description: `Agency: Brand Immersion\nCopywriters: Mike Kiruthi/Ken Kenya\nDirector/DP: Enos Olik\nFocus Puller/DIT: Fred Warui`,
  },
  {
    id: 8,
    title: "Kibao Vodka",
    videoSrc: "https://player.vimeo.com/video/844293052",
    description: `Production House - MOJO\nCinematographer: Moha & Warui Fred\n1AC/FP - Tony`,
  },
  {
    id: 9,
    title: "Omoka Rahisi",
    videoSrc: "https://player.vimeo.com/video/548997754",
    description: `Production House: Orion Studios\nDirected by Brian Muhando\nCinematography by Warui Fred\nAC: Peter`,
  },
  {
    id: 10,
    title: "Famous Musical Series",
    videoSrc: "https://player.vimeo.com/video/631073297",
    description: `Director - Enos Olik\nDP - Enos Olik\n1ST AC - Ben Kiilu\n1ST AC - Fred Warui\n1ST AD - Ken Finch`,
  },
  {
    id: 11,
    title: "SIAYA",
    videoSrc: "https://player.vimeo.com/video/383046752",
    description: `Director, cinematography DOP, Editor: Warui Fred\nColorist: Enos Olik\nAC: Ben Kilu and Rango.m\nGaffer: Isaac Awene`,
  },
  {
    id: 12,
    title: "Sneak",
    videoSrc: "https://player.vimeo.com/video/428420730",
    description: `A short two-minute film created during quarantine. Enjoy!\nDirector: Rango m.\nDirector of Photography: Warui Fred\nSound: Nesta`,
  },
  {
    id: 13,
    title: "All access",
    videoSrc: "https://player.vimeo.com/video/842480526",
    description: `Client - Grand acres\nProduction manager - Joseph Thiongo\nDirector - Enos Olik\nCinematography - Warui Fred & Ben Kiilu\nGaffer - Isaac Awene\nEdited - Rango Musau`,
  },
  {
    id: 14,
    title: "Netflix",
    videoSrc: "https://player.vimeo.com/video/924906697",
    description: `Production House - Igabantu Studios\nProducer - Faith Kaluva\nDirector - Enos Olik\n2nd Cinematography - Warui Fred\nAC - Sinde Lumumba`,
  },
  {
    id: 15,
    title: "Eskimi TVC",
    videoSrc: "https://player.vimeo.com/video/563721611",
    description: `Kenyan Team\nCinematography - Enos Olik\nProducer - Fuad Mbigi\nGaffer - Isaac Awene\n1st AC - Fred Warui`,
  },
  {
    id: 16,
    title: "AZIMIO_GOTV_Digital",
    videoSrc: "https://player.vimeo.com/video/735914123",
    description: `Production house: C_Hub\nDIRECTOR / DOP: Warui Fred`,
  },
  {
    id: 17,
    title: "AZIMIO GOTV",
    videoSrc: "https://player.vimeo.com/video/735913283",
    description: `DIRECTOR / DOP: Warui Fred`,
  },
  {
    id: 18,
    title: "Moko",
    videoSrc: "https://player.vimeo.com/video/893279638",
    description: `Client - Moko\nProject lead - Daddy Marto\nProducer - Brian Muhando\nDirector - Brian Muhando\nDirector of Photography- Warui Fred\nFocus Puller - Ben Kiilu\nMakeup - Bella Wairimu`,
  },
  {
    id: 19,
    title: "SASINI TVC",
    videoSrc: "https://player.vimeo.com/video/566433798",
    description: `Client : Sasini\nAgency : Potency Digital\nDirector / DP : Enos Olik\nPM : Joseph Mwangi\nProducer : Shiru Kahugu\n1st AD : Fuad Mbigi\n1st AC : Fred Warui\n1st AC : Ben Kiilu\nGaffer : Isaac Awene\nMUA : Mis Bella Wairimu\nEditor : Rango M\nSound : Nesta Negus\nSound Design : David KeyGuru\nProduction House : EOP Films`,
  },
  {
    id: 20,
    title: "Safal Group",
    videoSrc: "https://player.vimeo.com/video/451462497",
    description: `Safal Group Dumu Zas TV Commercials\nExecutive Producer : EOP Films\nDirector/Dop/Colorist : Enos Olik\nAssistant Director : Kennedy Munene\nProduction Manager : Joseph Mwangi\nProducer : Fuad Mbigi\nAC 1 : Fred Warui\nAC 2 : Ben Kiilu\nDIT/EDIT : Rango\nSound : Nesta Negus\nProduction Design : Fredrick Ochieng\nMake up : Mis Wairimu\nStyling : Kyle Atea\nCasting Agent : Collo\nAgency : Scanad Kenya`,
  },
  {
    id: 21,
    title: "JIJI - SHOWMAX",
    videoSrc: "https://player.vimeo.com/video/996838769",
    description: `Production: @eopfilms\nExecutive Producers: @joseethiongo @enosolik\nDirectors: @enosolik @edwinkamau\nCinematography: @churchilloele @warui_fred @ben_kiilu\nWriters: @dominionsilas @damariswriter\nProducer: @hildah_wellah\nAssistant Producers: @tancy_awuor @vigilance_atieno\nProduction Manager: @sharon_lusambili`,
  },
  {
    id: 22,
    title: "TVC",
    videoSrc: "https://player.vimeo.com/video/883679012",
    description: `Project: Awake to Every Moment. TVC\nClient: @silentnightbedding\nAgency: @leoburnett\nProduction House: @frinantpictures\nDirector/DP: @dir.andere\nAD: @fuadmbigi\nMUA: @zen_up_\nSound: @onyangogrishon\nEditor: @lawrence_odiwa\nColour&grade: @lawrence_odiwa\nArt &Set design: @mr_.elijah\nAssistant Art: @mainaciku\nLighting &Grips: @paulo_ngugi\nAssistant: @k.i.d.u.d.u\nA.C: @warui_fred\nWadrobe: @\nProduction manager: @itsray.em\nProducer: @tancy_awuor`,
  },
  {
    id: 23,
    title: "Mkurugenzi Edition",
    videoSrc: "https://player.vimeo.com/video/837148082",
    description: `Production House : @eopfilms\nDirector : @enosolik\nSet Runner : @fuadmbigi\nLine Producer : @shi_be_knowing\nProduction Manager : @joseethiongo\nDOP : @warui_fred and @ben_kiile\nProduction Design : @mr_.elijah\nSet Design : @k.i.d.u.d.u @jamirejame & Isaac Fundi @mr_.elijah\nGaffer : @isaac_awene\nMUA : mis.wairimu\nOn Set Sound Recordist : @onyangogrishon\nEditor : @rangomusau\nPost-Production : @eopfilms`,
  },
];

const Work = () => {
  const [visibleCount, setVisibleCount] = useState(9);
  const [expandedCard, setExpandedCard] = useState(null);

  const loadMore = () => setVisibleCount((prev) => Math.min(prev + 9, videoCards.length));
  const loadLess = () => setVisibleCount(9);
  const toggleExpand = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <div className="work-container">
      <h1 className="work-title">My Work</h1>
      <div className="card-container">
        {videoCards.slice(0, visibleCount).map((card) => (
          <div
            className={`card ${expandedCard === card.id ? "expanded" : ""}`}
            key={card.id}
          >
            <div className="video-container">
              <iframe
                src={card.videoSrc}
                title={card.title}
                className="card-video"
                allow="autoplay; fullscreen"
              ></iframe>
            </div>
            <div className="card-content">
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              <button className="view-button" onClick={() => toggleExpand(card.id)}>
                {expandedCard === card.id ? "Close" : "View"}
              </button>
            </div>
          </div>
        ))}
      </div>
      {visibleCount < videoCards.length && (
        <button className="load-more" onClick={loadMore}>Load More</button>
      )}
      {visibleCount > 9 && (
        <button className="load-less" onClick={loadLess}>Load Less</button>
      )}
    </div>
  );
};

export default Work;
