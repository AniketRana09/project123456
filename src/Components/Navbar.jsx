import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-white  shadow-sm flex justify-between w-screen ">
        <div>
          <a className="btn btn-ghost text-3xl font-bold text-blue-500">
            Zorex
          </a>
        </div>
        <div className="flex w-2/3 justify-between ">
          <div>
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered rounded-lg w-48 bg-white text-black  md:w-auto"
            />
          </div>
          <div className="flex gap-2">
            <h2 className="hidden md:block font-medium">Aniket</h2>
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
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
