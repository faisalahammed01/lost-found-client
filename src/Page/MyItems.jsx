import { useContext, useEffect, useState } from "react";
import { MdOutlineDeleteOutline } from "react-icons/md";
import AuthContext from "../Context/AuthContext/AuthContext";
import { GrUpdate } from "react-icons/gr";

const MyItems = () => {
  const { user } = useContext(AuthContext);
  const [item, setItem] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5000/myItem?email=${user.email}`)
        .then((res) => res.json())
        .then((items) => setItem(items));
    }
  }, [user?.email]);
  return (
    <div>
      <h1 className="text-2xl font-bold text-center my-4">
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
                    <button className="text-red-500">
                      <MdOutlineDeleteOutline className="text-3xl"></MdOutlineDeleteOutline>
                    </button>
                    <button className="text-blue-500 text-xl">
                      <GrUpdate></GrUpdate>
                    </button>
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
