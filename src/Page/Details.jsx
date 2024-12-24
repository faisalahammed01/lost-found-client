import { useLoaderData } from "react-router-dom";

const Details = () => {
  const data = useLoaderData();
  const {
    PostType,
    Title,
    Category,
    Thumbnail,
    description,
    location,
    Contact,
    Date,
  } = data;
  return (
    <div className="card bg-base-100 max-w-[760px] shadow-xl mx-auto">
      <figure className="px-10 pt-10">
        <img src={Thumbnail} className="rounded-xl max-w-96 max-h-96" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{PostType}</h2>
        <p>{Title}</p>
        <p> {location}</p>
        <p> {Contact}</p>
        <p>{Category}</p>
        <p> {description}</p>
        <p> {Date}</p>
        <div className="card-actions">
          <button className="btn btn-info md:w-96">Ooooo </button>
        </div>
      </div>
    </div>
  );
};

export default Details;
