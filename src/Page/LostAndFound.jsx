import { useState } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";

const LostAndFound = () => {
  const Items = useLoaderData();
  const searchParam = new URLSearchParams(location.search).get("search") || "";
  const [search, setSearch] = useState(searchParam);
  const navigate = useNavigate();
  const handleSearch = (e) => {
    const newSearch = e.target.value.toLowerCase();
    setSearch(newSearch);
    navigate(`?search=${newSearch}`);
  };

  const filteredItems = Items.filter(
    (item) =>
      item.Title.toLowerCase().includes(search) ||
      item.location.toLowerCase().includes(search)
  );

  return (
    <div>
      <h1 className="text-center font-bold text-xl text-gray-600">
        Lost-And-Found Item-{filteredItems.length}
      </h1>
      <div className="divider divider-neutral mx-auto w-40"></div>
      {/* search */}
      <div className="justify-center text-center mt-5">
        <input
          value={search}
          onChange={handleSearch}
          type="text"
          placeholder="Search by title or location..."
          className="input input-bordered input-error w-full max-w-2xl"
        />
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 mx-auto">
        {filteredItems.map((Item) => (
          <div
            key={Item._id}
            className="card w-64 md:w-96 shadow rounded-none max-h-[450px] mb-5"
          >
            <figure>
              <img
                className="max-h-[220px] rounded-lg"
                src={Item.Thumbnail}
                alt="Items"
              />
            </figure>
            <div className="card-body">
              <h2 className="text-xl p-4 ">
                <span className="font-bold">Title:</span> {Item.Title}
              </h2>
              <h4 className="text-wrap p-4">
                <span className="font-bold">Location: </span>
                {Item.location}
              </h4>
              <h4 className="p-4">
                <span className="font-bold">Date:</span> {Item.Date}
              </h4>
              <div className="justify-end text-end">
                <Link
                  to={`/items/${Item._id}`}
                  className="btn-link hover:text-blue-600 pr-3 text-black h-max"
                >
                  Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LostAndFound;
