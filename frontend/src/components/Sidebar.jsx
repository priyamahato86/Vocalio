
import { useState } from "react";
import { Link, useLocation } from "react-router";
import useAuthUser from "../hooks/useAuthUser";
import { BellIcon, HomeIcon, Mic2Icon, UsersIcon, XIcon, MenuIcon } from "lucide-react";

const Sidebar = () => {
  const { authUser } = useAuthUser();
  const location = useLocation();
  const currentPath = location.pathname;
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Home", icon: HomeIcon },
    { path: "/friends", label: "Friends", icon: UsersIcon },
    { path: "/notifications", label: "Notifications", icon: BellIcon },
  ];

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-primary text-primary-content shadow-md"
        onClick={() => setIsOpen(true)}
      >
        <MenuIcon className="w-6 h-6" />
      </button>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:static top-0 left-0 h-screen w-64 flex flex-col 
          bg-base-200 border-r border-base-300 shadow-sm transform transition-transform duration-300 z-50
          ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
      >
        {/* LOGO */}
        <div className="h-20 flex items-center justify-between px-6 border-b border-base-300">
          <Link to="/" className="flex items-center gap-2.5">
            <Mic2Icon className="size-9 text-primary" />
            <span className="text-3xl font-bold font-mono bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary tracking-wider">
              Vocalio
            </span>
          </Link>

          {/* Close button for mobile */}
          <button
            className="lg:hidden text-base-content"
            onClick={() => setIsOpen(false)}
          >
            <XIcon className="w-6 h-6" />
          </button>
        </div>

        {/* NAVIGATION */}
        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {navItems.map(({ path, label, icon: Icon }) => (
            <Link
              key={path}
              to={path}
              onClick={() => setIsOpen(false)}
              className={`flex items-center gap-3 px-4 py-2 rounded-xl transition 
                ${
                  currentPath === path
                    ? "bg-primary text-primary-content shadow-md"
                    : "text-base-content hover:bg-base-300"
                }`}
            >
              <Icon
                className={`size-5 ${
                  currentPath === path ? "text-primary-content" : "text-base-content opacity-70"
                }`}
              />
              <span className="font-medium">{label}</span>
            </Link>
          ))}
        </nav>

        {/* USER PROFILE */}
        <div className="p-4 border-t border-base-300">
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="w-11 rounded-full ring ring-base-300 ring-offset-1">
                <img src={authUser?.profilePic} alt="User Avatar" />
              </div>
            </div>
            <div className="flex-1">
              <p className="font-semibold text-sm text-base-content">
                {authUser?.fullName}
              </p>
              <p className="text-xs text-success flex items-center gap-1">
                <span className="size-2 rounded-full bg-success inline-block" />
                Online
              </p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
