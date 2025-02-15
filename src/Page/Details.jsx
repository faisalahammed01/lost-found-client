import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import AuthContext from "../Context/AuthContext/AuthContext";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Details = () => {
  const [startDate, setStartDate] = useState(new Date());
  const { user } = useContext(AuthContext);
  const data = useLoaderData();
  const {
    PostType,
    location,
    Contact,
    Date: postDate,
    Thumbnail,
    Category,
    description,
    Title,
  } = data;
  const btnText = PostType === "Found" ? "This is Mine!" : "Found This!";

  const handleAdd = (e) => {
    e.preventDefault();

    const location = e.target.location.value;
    const recoveredDate = startDate.toISOString().split("T")[0];
    const email = e.target.email.value;

    const newData = {
      location,
      date: recoveredDate,
      email,
    };
    // console.log(newData);

    // send data to the server and database
    fetch("http://localhost:5000/AddRecovered", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Recovered Items added successfully");
          e.target.reset();
          setStartDate(new Date());
        }
      });
  };

  const handleModalOpen = () => {
    document.getElementById("my_modal_1").showModal();
  };

  const handleModalClose = () => {
    document.getElementById("my_modal_1").close();
  };
  return (
    <div className="card bg-base-100 max-w-[760px] shadow-xl mx-auto">
      <figure className="px-10 pt-10">
        <img src={Thumbnail} className="rounded-xl max-w-96 max-h-96" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{PostType}</h2>
        <p>Title:{Title}</p>
        <p>location: {location}</p>
        <p>Contact: {Contact}</p>
        <p>Category:{Category}</p>
        <p> description:{description}</p>
        <p> Date:{postDate}</p>
        <div className="card-actions">
          {/* open-btn */}
          <button
            className="btn btn-neutral bg-black glass text-white md:w-96"
            onClick={handleModalOpen}
          >
            {btnText}
          </button>
          {/* stacture */}
          <dialog id="my_modal_1" className="modal">
            <form onSubmit={handleAdd} className="modal-box">
              <h3 className="font-bold text-lg">Recover Item Information</h3>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Recovered Location</span>
                </label>
                <input
                  type="text"
                  name="location"
                  placeholder="Enter recovered location"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Recovered Date</span>
                </label>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  dateFormat="yyyy-MM-dd"
                  className="input input-bordered w-full"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Recovered Person Info</span>
                </label>
                <input
                  type="text"
                  name="email"
                  value={user.email}
                  readOnly
                  className="input input-bordered"
                />
              </div>

              <div className="modal-action mt-4 justify-between">
                <button
                  type="submit"
                  className="btn btn-outline bg-black glass text-white ml-40"
                >
                  Submit
                </button>
                <button
                  type="button"
                  className="btn btn-circle "
                  onClick={handleModalClose}
                >
                  ❌
                </button>
              </div>
            </form>
            <ToastContainer />
          </dialog>
        </div>
      </div>
    </div>
  );
};

export default Details;
