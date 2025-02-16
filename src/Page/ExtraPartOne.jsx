import { Fade } from "react-awesome-reveal";

const ExtraPartOne = () => {
  return (
    <div className="bg-base-100 container mx-auto">
      <h1 className="text-2xl font-bold text-center pt-4">
        Lost Something? Let Us Help You Find It
        <div className="divider divider-neutral mx-auto w-28"></div>
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
      <div className="my-4 flex flex-col md:flex-row items-center justify-center">
        <div className="w-full md:w-4/6 text-center">
          <h4 className="text-lg font-bold">Easily Report Lost Items</h4>
          <Fade>
            <p className="mt-8">
              Lost something valuable? Don't worry! With our intuitive platform,
              you can report your lost items in minutes. Provide essential
              details like the item's description, where and when you lost it,
              and even upload a photo. Our platform connects you with people who
              may have found your item, ensuring a fast and efficient recovery
              process. Join our growing community and let us help you reunite
              with your belongings.
            </p>
          </Fade>
          <div className="divider divider-neutral mx-auto w-40"></div>
        </div>
        <div className="w-full md:w-3/6 flex justify-center">
          <img
            className="w-full h-56 md:w-auto"
            src="https://i.ibb.co.com/RDfJNWm/istockphoto-1730149969-612x612.jpg"
            alt=""
          />
        </div>
      </div>

      {/* 2 */}
      <div className="my-7 flex flex-col md:flex-row items-center justify-center md:gap-x-2">
        <div className="w-full md:w-3/6 flex justify-center">
          <img
            className="w-full h-56 md:w-auto"
            src="https://i.ibb.co.com/R3PcHLp/mobile-testing-concept-illustration-114360-1871.jpg"
            alt=""
          />
        </div>
        <div className="w-full md:w-4/6 text-center">
          <h4 className="text-lg font-bold">Browse Found Items Effortlessly</h4>
          <Fade>
            <p className="mt-8">
              Looking for something you’ve lost? Our platform features an
              organized and up-to-date list of found items submitted by users in
              your area. Use advanced filters to search by category, location,
              or date, and increase your chances of locating your belongings.
              Each found item includes detailed descriptions and photos, making
              identification easier than ever. Get started today and take the
              first step toward finding what’s yours.
            </p>
          </Fade>
          <div className="divider divider-neutral mx-auto w-40"></div>
        </div>
      </div>

      {/* Section 3 */}
      <div className="flex flex-col md:flex-row items-center justify-center my-7">
        <div className="w-full md:w-4/6 text-center">
          <h4 className="text-lg font-bold">Reunite with What You’ve Lost</h4>
          <Fade>
            <p className="mt-8">
              Losing something important can be stressful, but our platform is
              here to help. With a community-driven approach, we aim to
              reconnect lost items with their rightful owners. Post details
              about your lost items, browse through found listings, and use our
              seamless communication tools to connect with the finder. Together,
              let’s make recovering lost items easier and more accessible for
              everyone.
            </p>
          </Fade>
          <div className="divider divider-neutral mx-auto w-40"></div>
        </div>
        <div className="w-full md:w-3/6 flex justify-center">
          <img
            className="w-full h-56 md:w-auto"
            src="https://i.ibb.co.com/QPJW565/images-7.jpg"
            alt=""
          />
        </div>
      </div>

      {/* HELP */}
      <div className="pt-6 bg-[#F2F4F9]">
        <div className=" bg-base-100">
          <div className="flex justify-center items-center">
            <h2 className="text-3xl font-bold text-center text-[#D9C590]">
              HELP
            </h2>
            <img
              className="size-24"
              src="https://i.ibb.co.com/W0GhLtS/found-logo-removebg-preview.png"
              alt=""
            />
          </div>
          <div className="divider mx-auto w-40"></div>
          {/* 1 */}
          <div className="collapse bg-base-100 text-center">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">
              How do I get started?
            </div>
            <div className="collapse-content">
              <p>
                Click on the Report Lost Item button and fill in a few fields
                with correct information.
              </p>
            </div>
          </div>
          {/* 2 */}
          <div className="collapse bg-base-100 text-center">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">
              How long will it take for my item to be found?
            </div>
            <div className="collapse-content">
              <p>
                We will conduct an automatic search in our database for your
                item when you Report the Lost Item on our website, which
                typically takes less than a minute.
              </p>
            </div>
          </div>
          {/*  3*/}
          <div className="collapse bg-base-100 text-center">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">
              How will I know if my item has been found?
            </div>
            <div className="collapse-content">
              <p>
                We will send you an email notification as soon as we have found
                your lost item.
              </p>
            </div>
          </div>
          {/* 4 */}
          <div className="collapse bg-base-100 text-center">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">
              What happens after I receive an email?
            </div>
            <div className="collapse-content">
              <p>
                We will provide you with instructions explaining how to pay for
                shipping so that we can ship it to you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtraPartOne;
