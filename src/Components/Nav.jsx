import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "../Context/AuthContext/AuthContext";
import { MdOutlineArrowDropDownCircle } from "react-icons/md";

const Nav = () => {
  const { user, signOutUser } = useContext(AuthContext);

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        console.log("successful sign out");
      })
      .catch((error) => {
        console.log("failed to sign out .stay here. dont leave me alone");
      });
  };
  const link = (
    <>
      <NavLink className=" text-white font-bold" to="/">
        Home
      </NavLink>
      <NavLink className=" text-white font-bold " to="/LostAndFound">
        Lost & Found Items
      </NavLink>
    </>
  );
  const links = (
    <>
      <NavLink className=" text-black font-bold" to="/AddItems">
        Add Lost & Found Item
      </NavLink>
      <NavLink className=" text-black font-bold my-4" to="/AllItems">
        All Recovered Items
      </NavLink>
      <NavLink className=" text-black font-bold" to="/MyItems">
        My Items
      </NavLink>
    </>
  );
  return (
    <div className="navbar  container glass bg-black mx-auto">
      <div className="flex-1">
        <div>
          <img
            className="size-14"
            src="https://i.ibb.co.com/W0GhLtS/found-logo-removebg-preview.png"
            alt=""
          />
        </div>
        <a className="font-bold text-white hidden sm:block">
          Lost <span className="text-white">&</span> Found{" "}
        </a>
        <div className="flex flex-1 justify-center items-center space-x-4 whitespace-nowrap">
          {link}
        </div>
      </div>

      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full text-white size-11">
              <span>
                <MdOutlineArrowDropDownCircle className="size-8 mt-2"></MdOutlineArrowDropDownCircle>
              </span>
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        {user ? (
          <>
            <button onClick={handleSignOut} className="font-bold text-white ">
              Sign out
            </button>
          </>
        ) : (
          <>
            <Link to="/login">
              <button className="font-bold text-white ">Login</button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Nav;
