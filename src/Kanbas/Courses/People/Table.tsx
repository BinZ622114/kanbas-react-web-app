import { FaUserCircle } from "react-icons/fa";

export default function PeopleTable() {
  return (
    <div id="wd-people-table">
      <table className="table table-striped">
        <thead>
          <tr><th>Name</th><th>Login ID</th><th>Section</th><th>Role</th><th>Last Activity</th><th>Total Activity</th></tr>
        </thead>
        <tbody>
          <tr><td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Tony</span>{" "}
              <span className="wd-last-name">Stark</span></td>
            <td className="wd-login-id">001234561S</td>
            <td className="wd-section">S101</td>
            <td className="wd-role">STUDENT</td>
            <td className="wd-last-activity">2020-10-01</td>
            <td className="wd-total-activity">10:21:32</td> </tr>
          {/* Add at least 3 more users such as Bruce Wayne, Steve Rogers, and Natasha Romanoff */}
          <tr><td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Bent</span>{" "}
              <span className="wd-last-name">Jonny</span></td>
            <td className="wd-login-id">561230911S</td>
            <td className="wd-section">S101</td>
            <td className="wd-role">STUDENT</td>
            <td className="wd-last-activity">2020-11-23</td>
            <td className="wd-total-activity">20:21:32</td> </tr>
          <tr><td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Jenny</span>{" "}
              <span className="wd-last-name">Swift</span></td>
            <td className="wd-login-id">0012349823</td>
            <td className="wd-section">S101</td>
            <td className="wd-role">TA</td>
            <td className="wd-last-activity">2020-11-21</td>
            <td className="wd-total-activity">23:21:32</td> </tr>
          <tr><td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Bruce</span>{" "}
              <span className="wd-last-name">Stone</span></td>
            <td className="wd-login-id">341298161S</td>
            <td className="wd-section">S101</td>
            <td className="wd-role">TEACHER</td>
            <td className="wd-last-activity">2020-12-10</td>
            <td className="wd-total-activity">30:21:32</td> </tr>
          <tr><td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Mike</span>{" "}
              <span className="wd-last-name">Jonson</span></td>
            <td className="wd-login-id">801234561S</td>
            <td className="wd-section">S101</td>
            <td className="wd-role">STUDENT</td>
            <td className="wd-last-activity">2020-10-20</td>
            <td className="wd-total-activity">15:21:32</td> </tr>
        </tbody>
      </table>
    </div> );
}