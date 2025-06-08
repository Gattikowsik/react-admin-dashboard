import "./WidgetLg.css";

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"btn " + type}>{type}</button>;
  };

  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest Transactions</h3>
      <div className="widgetLgList">
        <table className="widgetLgTable">
          <thead>
            <tr>
              <th className="widgetLgTh">Customer</th>
              <th className="widgetLgTh">Date</th>
              <th className="widgetLgTh">Amount</th>
              <th className="widgetLgTh">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="widgetLgTd widgetLgCustomer">
                <img
                  src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                  className="widgetLgImg"
                />
                <span className="widgetLgTdTitle">Arjun Mehta</span>
              </td>
              <td className="widgetLgTd widgetLgTdGray">7 June 2025</td>
              <td className="widgetLgTd widgetLgTdGray">$420.00</td>
              <td className="widgetLgTd">
                <Button type="Approved" />
              </td>
            </tr>
            <tr>
              <td className="widgetLgTd widgetLgCustomer">
                <img
                  src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                  className="widgetLgImg"
                />
                <span className="widgetLgTdTitle">Rhea Kapoor</span>
              </td>
              <td className="widgetLgTd widgetLgTdGray">6 June 2025</td>
              <td className="widgetLgTd widgetLgTdGray">$138.99</td>
              <td className="widgetLgTd">
                <Button type="Declined" />
              </td>
            </tr>
            <tr>
              <td className="widgetLgTd widgetLgCustomer">
                <img
                  src="https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                  className="widgetLgImg"
                />
                <span className="widgetLgTdTitle">Tara Sharma</span>
              </td>
              <td className="widgetLgTd widgetLgTdGray">4 June 2025</td>
              <td className="widgetLgTd widgetLgTdGray">$299.49</td>
              <td className="widgetLgTd">
                <Button type="Pending" />
              </td>
            </tr>
            <tr>
              <td className="widgetLgTd widgetLgCustomer">
                <img
                  src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                  className="widgetLgImg"
                />
                <span className="widgetLgTdTitle">Karan Yadav</span>
              </td>
              <td className="widgetLgTd widgetLgTdGray">3 June 2025</td>
              <td className="widgetLgTd widgetLgTdGray">$99.00</td>
              <td className="widgetLgTd">
                <Button type="Approved" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
