const AddItems = () => {
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
        <form className="card-body">
          {/* form first row */}
          <div className="flex flex-col lg:flex-row gap-5">
            <div className="form-control flex-1">
              <select className="select select-info w-full max-w-xs mt-10">
                <option disabled selected>
                  Post Type
                </option>
                <option>Lost</option>
                <option>Found</option>
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
                name="Thumbnail "
                placeholder="Image Upload"
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
                type="Location"
                name="title"
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
                name="Contact Information"
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
