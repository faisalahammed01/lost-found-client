import { Fade } from "react-awesome-reveal";

const ExtraPartOne = () => {
  return (
    <div className="bg-base-100">
      <h1 className="text-3xl font-bold text-center pt-4">
        Lost <span className="text-blue-500">&</span> Found
        <div className="divider divider-accent mx-auto w-28"></div>
      </h1>
      <Fade>
        {" "}
        <p className="text-center mb-4">
          Losing something can be stressful, but finding it doesn’t have to be.
          Our platform provides a centralized hub for reporting lost items{" "}
          browsing found ones, and ensuring safe exchanges. Whether it’s a
          cherished keepsake or an important document, let us help you bring it
          back.
        </p>
      </Fade>
      {/* 1 */}
      <div className=" my-4 md:flex">
        <div className="w-4/6">
          <h4 className="text-lg text-center font-bold">
            Easily Report Lost Items
          </h4>
          <Fade>
            {" "}
            <p className="mt-8 text-center">
              Lost something valuable? Don't worry! With our intuitive platform,
              you can report your lost items in minutes. Provide essential
              details like the item's description, where and when you lost it,
              and even upload a photo. Our platform connects you with people who
              may have found your item, ensuring a fast and efficient recovery
              process. Join our growing community and let us help you reunite
              with your belongings.
            </p>
          </Fade>
          <div className="divider divider-accent mx-auto w-40"></div>
        </div>
        <div className="w-3/6">
          <img
            className="w-full h-56"
            src="https://i.ibb.co.com/fv0YVZc/Lost-Luggage-at-Hotel-Solutions-for-Quick-Recovery-12-22-2024-02-23-PM-optimized-250.png"
            alt=""
          />
        </div>
      </div>
      {/* 2 */}
      <div className="my-7 md:gap-x-2 md:flex">
        <div className="w-3/6">
          <img
            className="w-full h-56"
            src="https://i.ibb.co.com/R3PcHLp/mobile-testing-concept-illustration-114360-1871.jpg"
            alt=""
          />
        </div>
        <div className="w-4/6">
          <h4 className="text-lg text-center font-bold">
            Browse Found Items Effortlessly
          </h4>
          <Fade>
            {" "}
            <p className="mt-8 text-center">
              Looking for something you’ve lost? Our platform features an
              organized and up-to-date list of found items submitted by users in
              your area. Use advanced filters to search by category, location,
              or date, and increase your chances of locating your belongings.
              Each found item includes detailed descriptions and photos, making
              identification easier than ever. Get started today and take the
              first step toward finding what’s yours
            </p>
          </Fade>
          <div className="divider divider-accent mx-auto w-40"></div>
        </div>
      </div>
      {/* 3 */}
      <div className="md:flex">
        <div className="w-4/6">
          <h4 className="text-lg text-center font-bold">
            Reunite with What You’ve Lost
          </h4>
          <Fade>
            {" "}
            <p className="mt-8 text-center">
              Losing something important can be stressful, but our platform is
              here to help. With a community-driven approach, we aim to
              reconnect lost items with their rightful owners. Post details
              about your lost items, browse through found listings, and use our
              seamless communication tools to connect with the finder. Together,
              let’s make recovering lost items easier and more accessible for
              everyone.
            </p>
          </Fade>
          <div className="divider divider-accent mx-auto w-40"></div>
        </div>
        <div className="w-3/6">
          <img
            className="w-full h-56"
            src="https://i.ibb.co.com/QPJW565/images-7.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default ExtraPartOne;
