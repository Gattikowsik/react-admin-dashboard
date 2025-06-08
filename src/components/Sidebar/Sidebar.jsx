import {
  AttachMoneyOutlined,
  BarChartOutlined,
  ChatBubbleOutlineOutlined,
  Home,
  MailOutlined,
  ManageAccountsOutlined,
  PersonOutline,
  RecyclingOutlined,
  Settings,
  Storefront,
  Timeline,
  TrendingUp
} from "@mui/icons-material";
import "./Sidebar.css";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">

        {/* Dashboard Section */}
        <div className="sidebarMenu">
          <h2 className="sidebarTitle">Dashboard</h2>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <Link className="siderListLink" to="/">
                <Home className="listItemIcon" /> Home
              </Link>
            </li>
            <li className="sidebarListItem">
              {/* Example: If you plan to implement /analytics */}
              <Link className="siderListLink" to="/analytics">
                <Timeline className="listItemIcon" /> Analytics
              </Link>
            </li>
            <li className="sidebarListItem">
              <Link className="siderListLink" to="/sales">
                <TrendingUp className="listItemIcon" /> Sales
              </Link>
            </li>
          </ul>
        </div>

        {/* Quick Menu Section */}
        <div className="sidebarMenu">
          <h2 className="sidebarTitle">Quick Menu</h2>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <Link className="siderListLink" to="/users">
                <PersonOutline className="listItemIcon" /> Users
              </Link>
            </li>
            <li className="sidebarListItem">
              <Link className="siderListLink" to="/products">
                <Storefront className="listItemIcon" /> Products
              </Link>
            </li>
            <li className="sidebarListItem">
              <Link className="siderListLink" to="/transactions">
                <AttachMoneyOutlined className="listItemIcon" /> Transactions
              </Link>
            </li>
            <li className="sidebarListItem">
              <Link className="siderListLink" to="/reports">
                <BarChartOutlined className="listItemIcon" /> Reports
              </Link>
            </li>
          </ul>
        </div>

        {/* Notifications Section */}
        <div className="sidebarMenu">
          <h2 className="sidebarTitle">Notifications</h2>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <Link className="siderListLink" to="/mail">
                <MailOutlined className="listItemIcon" /> Mail
              </Link>
            </li>
            <li className="sidebarListItem">
              <Link className="siderListLink" to="/feedback">
                <RecyclingOutlined className="listItemIcon" /> Feedback
              </Link>
            </li>
            <li className="sidebarListItem">
              <Link className="siderListLink" to="/messages">
                <ChatBubbleOutlineOutlined className="listItemIcon" /> Messages
              </Link>
            </li>
          </ul>
        </div>

        {/* Staff Section */}
        <div className="sidebarMenu">
          <h2 className="sidebarTitle">Staff</h2>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <Link className="siderListLink" to="/manage">
                <ManageAccountsOutlined className="listItemIcon" /> Manage
              </Link>
            </li>
            <li className="sidebarListItem">
              <Link className="siderListLink" to="/settings">
                <Settings className="listItemIcon" /> Settings
              </Link>
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
}
