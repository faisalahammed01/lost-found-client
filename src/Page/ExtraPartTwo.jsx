const ExtraPartTwo = () => {
  return (
    <div className="bg-blue-50">
      <h2 className="font-bold text-2xl text-black text-center pt-4">
        Recent Lost Item Reports
      </h2>

      <p className="text-center text-black mt-3">
        See Below For Recent Lost Item Reports
      </p>
      <div className="divider divider-accent mx-auto w-28"></div>
      {/* one card */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 py-3 ">
        {/* card-1 */}
        <div className=" bg-base-100  max-w-sm w-64 rounded-t-[100px] rounded-br-[100px] border-l-4 border-b-4 border-blue-500 shadow-2xl">
          <div className="card-body">
            <h2 className="card-title">Item Lost: Family Photos</h2>
            <p>Location: Mobile, AL, USA</p>
            <p>Category: Personal</p>
          </div>
        </div>
        {/* card-2 */}
        <div className=" bg-base-100  max-w-sm w-64 rounded-t-[100px] rounded-br-[100px] border-l-4 border-b-4 border-blue-400 shadow-2xl">
          <div className="card-body">
            <h2 className="card-title">Category: Electronics</h2>
            <p>Location: Chelsea Lounge, Queens, NY, USA</p>
            <p>Category: Electronics</p>
          </div>
        </div>
        {/* card-3 */}
        <div className=" bg-base-100  max-w-sm w-64 rounded-t-[100px] rounded-br-[100px] border-l-4 border-b-4 border-blue-400 shadow-2xl">
          <div className="card-body">
            <h2 className="card-title">Item Lost: IPad</h2>
            <p>Location: Newark Liberty , NJ, USA</p>
            <p>Category: Electronics</p>
          </div>
        </div>
        {/* card-4 */}
        <div className=" bg-base-100  max-w-sm w-64 rounded-t-[100px] rounded-br-[100px] border-l-4 border-b-4 border-blue-400 shadow-2xl">
          <div className="card-body">
            <h2 className="card-title">Item Lost: Black purse</h2>
            <p>Location: Restrooms, San Francisco, CA, USA</p>
            <p>Category: Other</p>
          </div>
        </div>
        {/* card-5 */}
        <div className=" bg-base-100  max-w-sm w-64 rounded-t-[100px] rounded-br-[100px] border-l-4 border-b-4 border-blue-400 shadow-2xl">
          <div className="card-body">
            <h2 className="card-title">Item Lost: Wedding band</h2>
            <p>Location: Brewster Road, Newark, NJ, USA</p>
            <p>Category: Jewlery</p>
          </div>
        </div>
        {/* card-6*/}
        <div className=" bg-base-100  max-w-sm w-64 rounded-t-[100px] rounded-br-[100px] border-l-4 border-b-4 border-blue-400 shadow-2xl">
          <div className="card-body">
            <h2 className="card-title">Item Lost: Apple Watch</h2>
            <p>Location: Newark , USA</p>
            <p>Category: Other</p>
          </div>
        </div>
        {/* card-7 */}
        <div className=" bg-base-100  max-w-sm w-64 rounded-t-[100px] rounded-br-[100px] border-l-4 border-b-4 border-blue-400 shadow-2xl">
          <div className="card-body">
            <h2 className="card-title">Item Lost: Hat box </h2>
            <p>Location: Brewster Road, Newark, USA</p>
            <p>Category: Other</p>
          </div>
        </div>
        {/* card-8 */}
        <div className=" bg-base-100  max-w-sm w-64 rounded-t-[100px] rounded-br-[100px] border-l-4 border-b-4 border-blue-400 shadow-2xl">
          <div className="card-body">
            <h2 className="card-title">Item Lost: Lenovo </h2>
            <p>Location: John F. NY, USA</p>
            <p>Category: Electronics</p>
          </div>
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

export default ExtraPartTwo;
