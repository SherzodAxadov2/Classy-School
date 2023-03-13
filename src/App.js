import React, { useEffect } from "react";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Advantages from "./components/advantages/Advantages";
import Courses from "./components/courses/Courses";
import Teachers from "./components/teachers/Teachers";
import Notes from "./components/izohar/Notes";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Home2 from "./components/home/Home2";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="app">
      <Navbar />
      <div className="home-swipe">
        <Swiper
          centeredSlides={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Home />
          </SwiperSlide>
          <SwiperSlide>
            <Home2 />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="top">
        <Advantages />
        <Courses />
      </div>
      <div className="bottom">
        <Teachers />
        <Notes />
      </div>

      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
