const LatestCard = ({ card }) => {
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
        <div className="justify-end text-end">
          {/* <Link
            to={`/campaign/${capning._id}`}
            className="btn-link text-black hover:text-blue-600 pr-3 h-max"
          >
            See More
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default LatestCard;
