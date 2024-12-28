import { useContext, useEffect, useState } from "react";
import { MdOutlineDeleteOutline } from "react-icons/md";
import AuthContext from "../Context/AuthContext/AuthContext";
import { GrUpdate } from "react-icons/gr";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const MyItems = () => {
  const { user } = useContext(AuthContext);
  const [item, setItem] = useState([]);
  // -------------delete---------------------------------
  const Item = useLoaderData();
  const [MyItem, SetItem] = useState(Item);
  const handleUserDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        //   Delete from the database
        fetch(`https://lost-found-server-eight.vercel.app/myItems/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your item has been successfully deleted",
                icon: "success",
              });

              const remainingItems = item.filter(
                (singleItem) => singleItem._id !== id
              );
              setItem(remainingItems);
            }
          });
      }
    });
  };

  useEffect(() => {
    if (user?.email) {
      fetch(
        `https://lost-found-server-eight.vercel.app/myItem?email=${user.email}`
      )
        .then((res) => res.json())
        .then((items) => setItem(items));
    }
  }, [user?.email]);
  return (
    <div>
      <h1 className="text-xl font-bold text-center my-4">
        {item.length === 0 &&
          "You haven't added any posts yet. Start by posting your lost or found items and make it easier to track or recover them.  "}
      </h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>No</th>
              <th>Name</th>
              <th>email</th>
              <th>Post-Type</th>
              <th>Category</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {item.map((items, i) => (
              <tr key={items._id}>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div>
                      <div className="font-bold">{i + 1}</div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="text-xl">{items?.name}</div>
                </td>
                <td>
                  <div className="text-xl">{items?.email}</div>
                </td>
                <td>
                  <div className="text-xl">{items?.PostType}</div>
                </td>

                <td>
                  <div className="text-xl">{items?.Category}</div>
                </td>
                <td>
                  <div className="text-xl">{items?.Date}</div>
                </td>
                <td>
                  <div className="text-xl flex items-center gap-5">
                    <button
                      onClick={() => handleUserDelete(items._id)}
                      className="text-red-500"
                    >
                      <MdOutlineDeleteOutline className="text-3xl"></MdOutlineDeleteOutline>
                    </button>
                    <Link
                      to={`/update/${items._id}`}
                      className="text-blue-500 text-xl"
                    >
                      <GrUpdate></GrUpdate>
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyItems;
