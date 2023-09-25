import React from "react";
import MainCarousel from "../Componants/HomeCarousel/MainCarousel";
import HomeSectionCarosial from "../Componants/HomeSectionCarosial/HomeSectionCarosial";
import { mens_kurta } from "../../Data/Men/men_kurta";


const HomePage = () => {
  return (
    <div>
      <MainCarousel />
      <div className="space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10">
        <HomeSectionCarosial data={mens_kurta} sectionName={"Men's kurta "} />
        <HomeSectionCarosial data={mens_kurta} sectionName={"Men's Shoes"} />
        <HomeSectionCarosial data={mens_kurta} sectionName={"men's kurta "} />
        <HomeSectionCarosial data={mens_kurta} sectionName={"men's Shirt"} />
        <HomeSectionCarosial data={mens_kurta} sectionName={"Women's Saree "} />
        <HomeSectionCarosial data={mens_kurta} sectionName={"Women's Dress"} />
        
      </div>
    </div>
  );
};

export default HomePage;
