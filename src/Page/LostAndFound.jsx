import { useLoaderData } from "react-router-dom";

const LostAndFound = () => {
  const Items = useLoaderData();

  return (
    <div>
      <h1 className="text-center font-bold text-xl text-gray-600">
        {" "}
        All Item-{Items.length}
      </h1>
      <div className="divider divider-neutral mx-auto w-40"></div>
      {/* PostType,
    Title,
    Category,
    Thumbnail,
    description,
    location,
    Contact,
    Date, */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 mx-auto">
        {Items.map((Item) => (
          <div
            key={Item._id}
            className="card w-64 md:w-96 shadow-xl rounded-none max-h-[450px] mb-5"
          >
            <figure>
              <img
                className="max-h-[220px] rounded-lg"
                src={Item.Thumbnail}
                alt="Items"
              />
            </figure>
            <div className="card-body">
              <h2 className="text-xl p-4 ">{Item.Title}</h2>
              <h4 className="text-wrap p-4">{Item.location}</h4>
              <h4 className="p-4">{Item.Date}</h4>
              <div className="justify-end text-end">
                {/* <Link
              to={`/Item/${Item._id}`}
              className="btn-link hover:text-blue-600 pr-3 text-black h-max"
            >
              Details Page
            </Link> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LostAndFound;
