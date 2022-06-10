import React, { Component } from "react";
import Hero from "./HeroSection";
import Category from "./CategorySection";
import Banner from "./BannerSection";
import Videos from "./VideosSection";
import Event from "./EventSection";
import Images from "./ImagesSection";
import Contact from "./ContactSection";

import Cta from "./CtaSection";
import PriceTab from "../Elements/Tab/PriceTab";
import CourseTab from "../Elements/Tab/CourseTab";

class HomeMain extends Component {
  render() {
    return (
      <main style={{ backgroundColor: "#56B24B" }}>
        {/* hero-start */}
        <Hero />
        {/* hero-end */}

        {/* category-start */}
        <Category />
        {/* category-end */}

        {/* Videos-start */}
        <Videos />
        {/* Videos-end */}

        {/* course-start */}
        <CourseTab />
        {/* course-end */}

        {/* event-start */}
        <Images />
        {/* event-end */}

        {/* tab-start */}
        {/* <Contact /> */}
        {/* tab-end */}

        {/* cta-start */}
        {/* <Cta /> */}
        {/* cta-end */}
      </main>
    );
  }
}

export default HomeMain;
