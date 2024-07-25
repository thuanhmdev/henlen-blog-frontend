import React from "react";
import { LuLogOut } from "react-icons/lu";
import { MdOutlineDashboard, MdOutlineDocumentScanner } from "react-icons/md";

const Sidebar = () => {
  const menuItems = [
    {
      id: "dashboard",
      title: "Dashboard",
      icon: MdOutlineDashboard,
      url: "/admin/dashboard",
    },
    {
      id: "blog",
      title: "Blog",
      icon: MdOutlineDocumentScanner,
      url: "/admin/blog",
    },
  ];
  return (
    <div className="h-full flex flex-col">
      <h3 className="font-bold text-gray-200 text-2xl">Admin</h3>
      <div className="grow">
        <div className="py-2">
          {menuItems.map((item) => {
            return (
              <div
                key={item.id}
                className="my-1.5 p-2 flex items-center hover:bg-slate-600 hover:rounded-xl cursor-pointer"
              >
                <item.icon className="text-xl" />
                <span className="ms-3 text-sm lg:text-base">{item.title}</span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="p-2 flex items-center">
        <LuLogOut className="text-xl" />
        <span className="ms-3 md:text-sm lg:text-base font-semibold">
          Logout
        </span>
      </div>
    </div>
  );
};

export default Sidebar;
