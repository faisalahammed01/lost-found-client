import { useLoaderData } from "react-router-dom";

const AllRecoveredItems = () => {
  const datas = useLoaderData();
  return (
    <div>
      <h1 className="text-2xl font-bold text-center my-4">
        {datas.length === 0
          ? "No Recovered Items Found Yet!  "
          : `Total Recovered Items: ${datas.length}`}
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
              <th>Date</th>
              <th>Location</th>
              <th>Person-Info</th>
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
                  <div className="text-xl">{data?.recoveredPersonInfo}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllRecoveredItems;
