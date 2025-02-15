import { Link, useNavigate } from "react-router-dom";

const LatestCard = ({ card }) => {
  const navigate = useNavigate();
  const handleLostAndFound = () => {
    navigate("/LostAndFound");
  };
  const { Thumbnail, Title, location, Date } = card;
  return (
    <div className="card  w-64 border-2 border-black shadow-xl md:w-96  rounded-none ">
      <figure>
        <img className="max-h-[220px] rounded-lg" src={Thumbnail} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="text-xl p-2 ">
          <span className="font-bold mx-2">Title</span>
          {Title}
        </h2>
        <h4 className="text-wrap p-2 ">
          <span className="font-bold mx-2">Location</span>
          {location}
        </h4>
        <small className="p-2 font-bold">
          <span className="font-bold mx-2">Date</span>
          {Date}
        </small>

        <div className="border-t-2 border-black">
          <div className="flex justify-between pt-4">
            <div
              onClick={handleLostAndFound}
              className="btn btn-outline justify-start text-start font-bold text-white bg-gray-900   glass hover:text-white text-lg"
            >
              See All
            </div>
            <div className="justify-end text-end">
              <Link
                to={`/items/${card._id}`}
                className=" btn btn-outline text-lg font-bold text-white bg-gray-900  glass hover:text-white pr-3 h-max"
              >
                Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestCard;
