import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { MdGridView } from "react-icons/md";
import { TfiViewListAlt } from "react-icons/tfi";
const AllRecoveredItems = () => {
  const datas = useLoaderData();
  const [table, setTable] = useState(true);
  return (
    <div>
      {/* -------------------------------------------------------------------------------- */}
      <h1 className="text-2xl font-bold text-center my-4">
        {datas.length === 0
          ? "No Recovered Items Found Yet!  "
          : `Total Recovered Items: ${datas.length}`}
      </h1>
      {/* -------------------------------------BTN------------------------------------ */}
      <div className="text-center my-6 items-center justify-center">
        <button className="" onClick={() => setTable(true)}>
          <MdGridView className="size-9 mr-3 hover:bg-blue-200"></MdGridView>
        </button>
        <button className="" onClick={() => setTable(false)}>
          <TfiViewListAlt className="size-7 ml-3 hover:bg-blue-200"></TfiViewListAlt>
        </button>
      </div>

      {table ? (
        // !----------------------------------TABLE----------------------------------------------

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
                <th>Date</th>
                <th>Location</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {datas.map((data, i) => (
                <tr key={data._id}>
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
                    <div className="text-xl">{data?.date}</div>
                  </td>
                  <td>
                    {" "}
                    <div className="text-xl">{data?.location}</div>
                  </td>

                  <td>
                    {" "}
                    <div className="text-xl">{data?.email}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        //!-------------------------------------CARD-------------------------------------------
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
          {datas.map((data, i) => (
            <div
              key={data._id}
              className="card w-64 md:w-96 shadow-lg rounded-lg p-4"
            >
              <h2 className="text-lg font-bold mb-2">Item {i + 1}</h2>
              <p>Date: {data?.date}</p>
              <p>Location: {data?.location}</p>
              <p>Email: {data?.email}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllRecoveredItems;
