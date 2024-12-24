import { Link, useNavigate } from "react-router-dom";

const LatestCard = ({ card }) => {
  const navigate = useNavigate();
  const handleLostAndFound = () => {
    navigate("/LostAndFound");
  };
  const { Thumbnail, Title, location, Date } = card;
  return (
    <div className="card shadow w-64 md:w-96  rounded-none ">
      <figure>
        <img className="max-h-[220px] rounded-lg" src={Thumbnail} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="text-xl p-4 ">{Title}</h2>
        <h4 className="text-wrap p-4">{location}</h4>
        <small className="p-4 font-bold">{Date}</small>
        <div className="flex justify-between">
          <div
            onClick={handleLostAndFound}
            className="justify-start text-start font-bold text-black hover:text-blue-600 text-lg"
          >
            See All
          </div>
          <div className="justify-end text-end">
            <Link
              to={`/items/${card._id}`}
              className="text-lg font-bold text-black hover:text-blue-600 pr-3 h-max"
            >
              Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestCard;
