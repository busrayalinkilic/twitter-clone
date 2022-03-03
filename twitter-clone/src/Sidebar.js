import React from "react";
import "./Sidebar.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import SidebarOption from "./SidebarOption";

function Sidebar() {
  return (
    <div className="sidebar">
      <TwitterIcon className="sidebar__twitterIcon" />
      <SidebarOption/>
      <SidebarOption/>
      <SidebarOption/>
      <SidebarOption/>
      <SidebarOption/>
      <SidebarOption/>
      <SidebarOption/>
      <SidebarOption/>
    </div>
  );
}
export default Sidebar;
