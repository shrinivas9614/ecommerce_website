import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import { Button } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
const HomeSectionCarosial = ({data,sectionName}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const moveLeft = () => {
    setActiveIndex(activeIndex - 1);
  };

  const moveRight = () => {
    setActiveIndex(activeIndex + 1);
  };

  const syncActiveIndex = ({ item }) => {
    setActiveIndex(item);
  };

  const responsive = {
    0: { items: 2 },
    720: { items: 3.5 },
    1024: { items: 5.5 },
  };

  const items = data.slice(0, 10)
    .map((item, i) => <HomeSectionCard product={item} />);

  return (
    <div className="relative sm:px-4 lg:px-8">
        <h2 className="text-2x1 font-extrabold text-gray-800 py-5"> {sectionName } </h2>
      <div className="relative p-5"></div>
      <AliceCarousel
        disableButtonsControls
        items={items}
        responsive={responsive}
        onSlideChange={syncActiveIndex}
        activeIndex={activeIndex}
      />

      {activeIndex !== items.length - 5 && (
        <Button
          className="z-50"
          onClick={moveRight}
          variant="containt"
          sx={{
            position: "absolute",
            top: "8rem",
            right: "0rem",
            transform: "translateX(50%) rotate(90deg)",
            bgcolor: "#ffffff",
          }}
          area-aria-label="next"
        >
          <KeyboardArrowLeftIcon
            sx={{ transform: "translateX(50%) rotate(90deg)" }}
          />
        </Button>
      )}
      {activeIndex !== 0 && (
        <Button
          onClick={moveLeft}
          className="z-50"
          variant="containt"
          sx={{
            position: "absolute",
            top: "8rem",
            left: "0rem",
            transform: "translateX(-50%) rotate(-90deg)",
            bgcolor: "#ffffff",
          }}
          area-aria-label="next"
        >
          <KeyboardArrowLeftIcon sx={{ transform: "rotate(90deg)" }} />
        </Button>
      )}
    </div>
  );
};

export default HomeSectionCarosial;
