import React from "react";
import ExtraPartOne from "../Page/ExtraPartOne";
import LatestCard from "./LatestCard";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const cards = useLoaderData();
  return (
    <div>
      {/* banner */}
      <div className="flex flex-col md:flex-row items-center justify-center w-full mt-3 mb-6 container mx-auto border-2  border-black rounded-xl bg-gray-50 shadow-lg p-6">
        {/* Text Section */}
        <div className="md:w-1/2 text-center md:text-left p-6">
          <h1 className="text-4xl font-extrabold text-black mb-4">
            Lost & Found
          </h1>
          <p className="text-lg text-gray-800 leading-relaxed">
            Lost something valuable? Or found something that doesn’t belong to
            you? Our Lost & Found service connects people to reunite lost items
            with their rightful owners. Submit a report and make a difference
            today!
          </p>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center">
          <img
            className="rounded-2xl w-80 md:w-96 "
            src="https://i.ibb.co.com/gMRLTRQS/images-2-removebg-preview-1.png"
            alt="Lost and Found"
          />
        </div>
      </div>

      <section>
        <h1 className="text-2xl font-bold text-center my-4">
          {cards.length === 0
            ? "Not Find & Lost Items Available"
            : `Latest Find & Lost Items-${cards.length}`}
        </h1>
        <div className="divider divider-neutral mx-auto w-40"></div>

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
      {/* <ExtraPartTwo></ExtraPartTwo> */}
    </div>
  );
};

export default Home;
