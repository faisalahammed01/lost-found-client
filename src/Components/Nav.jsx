import { NavLink } from "react-router-dom";

const Nav = () => {
  const link = (
    <>
      <NavLink className="hover:text-blue-600" to="/">
        Home
      </NavLink>
      <NavLink className="hover:text-blue-600 ">Lost & Found Items</NavLink>
    </>
  );
  const links = (
    <>
      <NavLink className="hover:text-blue-600">Add Lost & Found Item</NavLink>
      <NavLink className="hover:text-blue-600">All Recovered Items</NavLink>
      <NavLink className="hover:text-blue-600">My Items</NavLink>
    </>
  );
  return (
    <div className="navbar bg-base-100 container mx-auto">
      <div className="flex-1">
        <div>
          <img
            className="size-14"
            src="https://i.ibb.co.com/W0GhLtS/found-logo-removebg-preview.png"
            alt=""
          />
        </div>
        <a className="font-bold ">
          Lost <span className="text-blue-500">&</span> Found{" "}
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
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <div className="font-bold">Login</div>
      </div>
    </div>
  );
};

export default Nav;

//
