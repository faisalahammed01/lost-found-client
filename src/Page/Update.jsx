import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
  const data = useLoaderData();

  const {
    name,
    email,
    _id,
    PostType,
    Title,
    Category,
    Thumbnail,
    description,
    location,
    Contact,
    Date,
  } = data;

  const handleUpdate = (e) => {
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
    };

    // send data to the server and database
    fetch(`http://localhost:5000/myItems/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newData),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.modifiedCount) {
          // console.log("successfully updated");
          Swal.fire({
            title: "Success!",
            text: "Item updated successfully",
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
        <h1 className="text-5xl font-bold">Update Lost & Found Item</h1>
        <p className="py-6">
          If you want to report a lost or found item, fill out the form and
          click on the 'Update Item' button.
        </p>
      </div>
      <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
        <form onSubmit={handleUpdate} className="card-body">
          {/* Name-Email */}
          <div className="flex flex-col lg:flex-row gap-5">
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                defaultValue={name}
                readOnly
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                defaultValue={email}
                type="text"
                readOnly
                className="input input-bordered"
                required
              />
            </div>
          </div>
          {/* form first row */}
          <div className="flex flex-col lg:flex-row gap-5">
            <div className="form-control flex-1">
              <select
                name="PostType"
                defaultValue={PostType}
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
                defaultValue={Category}
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
                defaultValue={Thumbnail}
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
                defaultValue={Title}
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
                defaultValue={description}
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
                defaultValue={location}
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
                defaultValue={Contact}
                type="text"
                name="Contact"
                placeholder="user details"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control flex-1 ">
              <label className="label">
                <span className="label-text">Date</span>
              </label>
              <input
                defaultValue={Date}
                type="date"
                name="Date"
                placeholder="Date"
                className="input input-bordered"
                required
              />
            </div>
          </div>

          <div className="form-control mt-6">
            <button className="btn btn-neutral bg-black glass text-white font-bold ">
              Update Item
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Update;
