import React from "react";
import ExtraPartOne from "../Page/ExtraPartOne";
import ExtraPartTwo from "../Page/ExtraPartTwo";
import LatestCard from "./LatestCard";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const cards = useLoaderData();
  return (
    <div>
      {/* slider start */}
      <div className="carousel w-full h-96">
        <div id="slide1" className="carousel-item relative w-full max-h-96">
          <img
            src="https://i.ibb.co.com/2hbwRyW/lost-found-banner-Image-2024-12-23-at-00-22-59-bfc6e644.jpg"
            className="w-full image-full"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full ">
          <img
            src="https://i.ibb.co.com/XSs2Sqm/DALL-E-2024-12-23-00-04-32-A-visually-appealing-website-banner-for-a-Lost-and-Found-platform-with-a.webp"
            className="w-full image-full"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co.com/DRgLvjM/lost-found-Image-2024-12-23-at-00-23-00-f798524b.jpg"
            className="w-full image-full"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co.com/2F5p9h1/DALL-E-2024-12-22-03-23-54-A-creative-and-professional-banner-for-a-Lost-and-Found-website-featuring.webp"
            className="w-full image-full"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
      <section>
        <h1 className="text-2xl font-bold text-center my-4">
          {cards.length === 0
            ? "Not Find & Lost Items Available"
            : `Latest Find & Lost Items-${cards.length}`}
        </h1>
        <div className="divider divider-accent mx-auto w-40"></div>

        <div className="my-7 container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
          {cards.map((card) => (
            <LatestCard card={card} key={card._id}></LatestCard>
          ))}
        </div>
      </section>
      {/* Slider END */}

      {/* Extra-part-1 */}
      <ExtraPartOne></ExtraPartOne>
      {/* Extra-part-two */}
      <ExtraPartTwo></ExtraPartTwo>
    </div>
  );
};

export default Home;
