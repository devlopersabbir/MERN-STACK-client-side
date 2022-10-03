import React from "react";
import Hero from "../../Components/HomePageComponent/Hero/Hero";
import Category from "../../Components/HomePageComponent/Category/Category";
import BestSelling from "../../Components/HomePageComponent/BestSelling/BestSelling";

const Home = () => {
  return (
    <>
      <div className="Home relative">
        {/* hero section */}
        <Hero />
        {/* hero section end */}

        {/* slider category section */}
        <Category />
        {/* slider category section end */}

        {/* best selling product section */}
        <BestSelling />
        {/* best selling product section end */}
      </div>
    </>
  );
};

export default Home;
