import * as motion from "motion/react-client";
const ExtraPartTwo = () => {
  return (
    <div className="bg-blue-50">
      <h2 className="font-bold text-2xl text-black text-center pt-4">
        Recent Lost Item Reports
      </h2>

      <p className="text-center text-black mt-3">
        See Below For Recent Lost Item Reports
      </p>
      <div className="divider divider-accent mx-auto w-28"></div>
      {/* one card */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 py-3 ">
        {/* card-1 */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className=" bg-base-100  max-w-sm w-64 rounded-t-[100px] rounded-br-[100px] border-l-4 border-b-4 border-blue-500 shadow-xl"
        >
          <div className="card-body">
            <h2 className="card-title">Item Lost: Family Photos</h2>
            <p>Location: Mobile, AL, USA</p>
            <p>Category: Personal</p>
          </div>
        </motion.div>
        {/* card-2 */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className=" bg-base-100  max-w-sm w-64 rounded-t-[100px] rounded-br-[100px] border-l-4 border-b-4 border-blue-400 shadow-xl"
        >
          <div className="card-body">
            <h2 className="card-title">Category: Electronics</h2>
            <p>Location: Chelsea Lounge, Queens, NY, USA</p>
            <p>Category: Electronics</p>
          </div>
        </motion.div>
        {/* card-3 */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className=" bg-base-100  max-w-sm w-64 rounded-t-[100px] rounded-br-[100px] border-l-4 border-b-4 border-blue-400 shadow-xl"
        >
          <div className="card-body">
            <h2 className="card-title">Item Lost: IPad</h2>
            <p>Location: Newark Liberty , NJ, USA</p>
            <p>Category: Electronics</p>
          </div>
        </motion.div>
        {/* card-4 */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className=" bg-base-100  max-w-sm w-64 rounded-t-[100px] rounded-br-[100px] border-l-4 border-b-4 border-blue-400 shadow-xl"
        >
          <div className="card-body">
            <h2 className="card-title">Item Lost: Black purse</h2>
            <p>Location: Restrooms, San Francisco, CA, USA</p>
            <p>Category: Other</p>
          </div>
        </motion.div>
        {/* card-5 */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className=" bg-base-100  max-w-sm w-64 rounded-t-[100px] rounded-br-[100px] border-l-4 border-b-4 border-blue-400 shadow-xl"
        >
          <div className="card-body">
            <h2 className="card-title">Item Lost: Wedding band</h2>
            <p>Location: Brewster Road, Newark, NJ, USA</p>
            <p>Category: Jewlery</p>
          </div>
        </motion.div>
        {/* card-6*/}
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className=" bg-base-100  max-w-sm w-64 rounded-t-[100px] rounded-br-[100px] border-l-4 border-b-4 border-blue-400 shadow-xl"
        >
          <div className="card-body">
            <h2 className="card-title">Item Lost: Apple Watch</h2>
            <p>Location: Newark , USA</p>
            <p>Category: Other</p>
          </div>
        </motion.div>
        {/* card-7 */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className=" bg-base-100  max-w-sm w-64 rounded-t-[100px] rounded-br-[100px] border-l-4 border-b-4 border-blue-400 shadow-xl"
        >
          <div className="card-body">
            <h2 className="card-title">Item Lost: Hat box </h2>
            <p>Location: Brewster Road, Newark, USA</p>
            <p>Category: Other</p>
          </div>
        </motion.div>
        {/* card-8 */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className=" bg-base-100  max-w-sm w-64 rounded-t-[100px] rounded-br-[100px] border-l-4 border-b-4 border-blue-400 shadow-xl"
        >
          <div className="card-body">
            <h2 className="card-title">Item Lost: Lenovo </h2>
            <p>Location: John F. NY, USA</p>
            <p>Category: Electronics</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ExtraPartTwo;
