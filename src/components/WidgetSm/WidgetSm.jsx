import "./WidgetSm.css";
import { Visibility } from "@mui/icons-material";

export default function WidgetSm() {
  const members = [
    {
      name: "Ritika Sharma",
      title: "Frontend Developer",
      img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Aditya Verma",
      title: "UI/UX Designer",
      img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Meera Joshi",
      title: "Backend Developer",
      img: "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Kunal Singh",
      title: "Data Analyst",
      img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Pooja Nair",
      title: "Product Manager",
      img: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  return (
    <div className="widgetSm">
      <h3 className="widgetSmTitle">New Join Members</h3>
      <ul className="widgetSmList">
        {members.map((member, index) => (
          <li className="widgetSmListItem" key={index}>
            <img src={member.img} alt={member.name} className="widgetSmImg" />
            <div className="widgetSmUserText">
              <span className="widgetSmUserName">{member.name}</span>
              <span className="widgetSmUserTitle">{member.title}</span>
            </div>
            <div className="widgetSmButton">
              <button className="widgetSmBtn">
                <Visibility className="widgetSmBtnIcon" /> Display
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
