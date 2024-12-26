import swal from "sweetalert2";
import AuthContext from "../Context/AuthContext/AuthContext";
import { useContext } from "react";

const AddItems = () => {
  const { user } = useContext(AuthContext);
  const handleAdd = (e) => {
    e.preventDefault();

    const PostType = e.target.PostType.value;
    const Title = e.target.Title.value;
    const Category = e.target.Category.value;
    const Thumbnail = e.target.Thumbnail.value;
    const description = e.target.description.value;
    const location = e.target.location.value;
    const Contact = e.target.Contact.value;
    const Date = e.target.Date.value;

    const newData = {
      PostType,
      Title,
      Category,
      Thumbnail,
      description,
      location,
      Contact,
      Date,
      email: user?.email,
      name: user?.displayName || "Unknown",
    };

    // send data server and database
    fetch("http://localhost:5000/addItems", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          swal.fire({
            title: "Success!",
            text: "Items added successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
          e.target.reset();
        }
      });
  };
  return (
    <div className="lg:w-3/4 mx-auto">
      <div className="text-center p-10">
        <h1 className="text-5xl font-bold">Add Lost & Found Item</h1>
        <p className="py-6">
          If you want to report a lost or found item, fill out the form and
          click on the 'Add Post' button.
        </p>
      </div>
      <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
        <form onSubmit={handleAdd} className="card-body">
          {/* form first row */}
          <div className="flex flex-col lg:flex-row gap-5">
            <div className="form-control flex-1">
              <select
                name="PostType"
                required
                className="select select-info w-full max-w-xs mt-10"
              >
                <option value="" disabled>
                  Select Post Type
                </option>
                <option value="Lost">Lost</option>
                <option value="Found">Found</option>
              </select>
            </div>
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <input
                type="text"
                name="Category"
                placeholder="e.g., pets, documents, gadgets"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          {/* form second row */}
          <div className="flex flex-col lg:flex-row gap-5">
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Thumbnail</span>
              </label>
              <input
                type="url"
                name="Thumbnail"
                placeholder="Image url"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Title</span>
              </label>
              <input
                type="text"
                name="Title"
                placeholder="Title"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          {/* form third row */}
          <div className="flex flex-col lg:flex-row gap-5">
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <input
                type="text"
                name="description"
                placeholder="Description"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Location</span>
              </label>
              <input
                type="text"
                name="location"
                placeholder="Location where the item was lost or found"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          {/* form four row */}
          <div className="flex flex-col lg:flex-row gap-5">
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Contact Information</span>
              </label>
              <input
                type="text"
                name="Contact"
                placeholder="user details"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Date</span>
              </label>
              <input
                type="date"
                name="Date"
                placeholder="Image-Url"
                className="input input-bordered"
                required
              />
            </div>
          </div>

          <div className="form-control mt-6">
            <button className="btn btn-outline text-white font-bold bg-blue-500">
              Add Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
